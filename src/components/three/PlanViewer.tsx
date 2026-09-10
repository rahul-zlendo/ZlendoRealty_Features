"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/* The same 12.4 m x 8.7 m plan drawn on this slide, in metres: [x, z, w, d]. */
const ENVELOPE = { w: 12.4, d: 8.7 };

const ROOMS = [
  { name: "Bedroom 1", x: 0, z: 0, w: 3.8, d: 3.2 },
  { name: "Living", x: 3.8, z: 0, w: 4.4, d: 4.2 },
  { name: "Bedroom 2", x: 8.2, z: 0, w: 3.7, d: 3.2 },
  { name: "Kitchen", x: 0, z: 3.2, w: 3.8, d: 3.3 },
  { name: "Dining", x: 3.8, z: 4.2, w: 4.4, d: 3.3 },
  { name: "Bath", x: 8.2, z: 3.2, w: 2.0, d: 2.9 },
] as const;

/* Low blocks that read as furniture: [x, z, w, d, h] */
const FURNITURE = [
  { x: 0.6, z: 0.5, w: 1.6, d: 2.0, h: 0.5, c: 0xd8cfc2 }, // bed 1
  { x: 8.9, z: 0.5, w: 1.6, d: 2.0, h: 0.5, c: 0xd8cfc2 }, // bed 2
  { x: 4.4, z: 0.6, w: 2.6, d: 0.9, h: 0.7, c: 0xc9d6d4 }, // sofa
  { x: 5.3, z: 2.2, w: 1.0, d: 1.0, h: 0.35, c: 0xb9a68d }, // coffee table
  { x: 4.6, z: 5.0, w: 1.8, d: 1.1, h: 0.75, c: 0xb9a68d }, // dining table
  { x: 0.4, z: 3.5, w: 3.0, d: 0.6, h: 0.9, c: 0xcfd8dd }, // kitchen run
  { x: 8.5, z: 3.5, w: 0.8, d: 1.6, h: 0.55, c: 0xe3e8ea }, // bath tub
] as const;

const WALL_H = 2.7;
/* Internal partitions are cut low so the plan reads like a dollhouse. */
const PART_H = 1.25;
const WALL_T = 0.16;

type Mode = "wireframe" | "structure" | "furnished";

export function PlanViewer({ className }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<Mode>("furnished");
  const [ready, setReady] = useState(false);
  const api = useRef<{
    setMode: (m: Mode) => void;
    reset: () => void;
  } | null>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(44, 1, 0.1, 200);
    const HOME = new THREE.Vector3(10.5, 9.5, 13.5);
    camera.position.copy(HOME);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    el.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    renderer.domElement.style.touchAction = "pan-y";

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enablePan = false;
    controls.minDistance = 9;
    controls.maxDistance = 30;
    controls.minPolarAngle = 0.25;
    controls.maxPolarAngle = Math.PI / 2.35;
    controls.autoRotate = !reduced;
    controls.autoRotateSpeed = 0.55;
    controls.target.set(ENVELOPE.w / 2, 0.8, ENVELOPE.d / 2);

    /* ---- lighting ---- */
    scene.add(new THREE.HemisphereLight(0xffffff, 0xdfe8f0, 1.15));
    const sun = new THREE.DirectionalLight(0xfff4e8, 1.5);
    sun.position.set(14, 18, 8);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.left = -14;
    sun.shadow.camera.right = 14;
    sun.shadow.camera.top = 14;
    sun.shadow.camera.bottom = -14;
    scene.add(sun);
    const fill = new THREE.DirectionalLight(0xdff1f0, 0.5);
    fill.position.set(-10, 8, -6);
    scene.add(fill);

    /* ---- groups so modes can toggle whole layers ---- */
    const solids = new THREE.Group();
    const wires = new THREE.Group();
    const furniture = new THREE.Group();
    scene.add(solids, wires, furniture);

    const wallMat = new THREE.MeshStandardMaterial({
      color: 0xfaf7f3,
      roughness: 0.9,
      metalness: 0,
    });
    const slabMat = new THREE.MeshStandardMaterial({
      color: 0xdfe7ee,
      roughness: 0.95,
    });
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xd8c3a5,
      roughness: 0.8,
    });
    const wetFloorMat = new THREE.MeshStandardMaterial({
      color: 0xdfe6e8,
      roughness: 0.6,
    });
    const wireMat = new THREE.LineBasicMaterial({ color: 0x0d8880 });
    const edgeMat = new THREE.LineBasicMaterial({
      color: 0x0a2a4e,
      transparent: true,
      opacity: 0.28,
    });

    const box = new THREE.BoxGeometry(1, 1, 1);

    const addWall = (x: number, z: number, w: number, d: number, h = WALL_H) => {
      const m = new THREE.Mesh(box, wallMat);
      m.scale.set(w, h, d);
      m.position.set(x + w / 2, h / 2, z + d / 2);
      m.castShadow = true;
      m.receiveShadow = true;
      solids.add(m);

      const line = new THREE.LineSegments(
        new THREE.EdgesGeometry(box),
        wireMat,
      );
      line.scale.copy(m.scale);
      line.position.copy(m.position);
      wires.add(line);

      const soft = new THREE.LineSegments(
        new THREE.EdgesGeometry(box),
        edgeMat,
      );
      soft.scale.copy(m.scale);
      soft.position.copy(m.position);
      solids.add(soft);
    };

    /* floor slab */
    const slab = new THREE.Mesh(box, slabMat);
    slab.scale.set(ENVELOPE.w + 0.6, 0.16, ENVELOPE.d + 0.6);
    slab.position.set(ENVELOPE.w / 2, -0.08, ENVELOPE.d / 2);
    slab.receiveShadow = true;
    solids.add(slab);

    const slabWire = new THREE.LineSegments(
      new THREE.EdgesGeometry(box),
      wireMat,
    );
    slabWire.scale.copy(slab.scale);
    slabWire.position.copy(slab.position);
    wires.add(slabWire);

    /* perimeter */
    addWall(-WALL_T, -WALL_T, ENVELOPE.w + WALL_T * 2, WALL_T);
    addWall(-WALL_T, ENVELOPE.d, ENVELOPE.w + WALL_T * 2, WALL_T);
    addWall(-WALL_T, 0, WALL_T, ENVELOPE.d);
    addWall(ENVELOPE.w, 0, WALL_T, ENVELOPE.d);

    /* room floors + low partitions */
    for (const r of ROOMS) {
      const wet = r.name === "Bath" || r.name === "Kitchen";
      const f = new THREE.Mesh(box, wet ? wetFloorMat : floorMat);
      f.scale.set(r.w, 0.04, r.d);
      f.position.set(r.x + r.w / 2, 0.02, r.z + r.d / 2);
      f.receiveShadow = true;
      solids.add(f);

      addWall(r.x, r.z + r.d, r.w, WALL_T, PART_H);
      addWall(r.x + r.w, r.z, WALL_T, r.d, PART_H);
    }

    /* furniture */
    for (const f of FURNITURE) {
      const m = new THREE.Mesh(
        box,
        new THREE.MeshStandardMaterial({ color: f.c, roughness: 0.7 }),
      );
      m.scale.set(f.w, f.h, f.d);
      m.position.set(f.x + f.w / 2, f.h / 2, f.z + f.d / 2);
      m.castShadow = true;
      m.receiveShadow = true;
      furniture.add(m);
    }

    const applyMode = (m: Mode) => {
      solids.visible = m !== "wireframe";
      wires.visible = m === "wireframe";
      furniture.visible = m === "furnished";
    };
    applyMode("furnished");

    api.current = {
      setMode: applyMode,
      reset: () => {
        camera.position.copy(HOME);
        controls.target.set(ENVELOPE.w / 2, 0.8, ENVELOPE.d / 2);
        controls.update();
      },
    };

    /* ---- sizing ---- */
    const resize = () => {
      const { clientWidth: w, clientHeight: h } = el;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    /* ---- only animate while on screen ---- */
    let visible = false;
    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      controls.update();
      renderer.render(scene, camera);
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        const next = entry.isIntersecting;
        if (next === visible) return;
        visible = next;
        if (visible) loop();
        else cancelAnimationFrame(raf);
      },
      { rootMargin: "200px" },
    );
    io.observe(el);

    const pause = () => {
      controls.autoRotate = false;
    };
    renderer.domElement.addEventListener("pointerdown", pause);

    setReady(true);

    return () => {
      io.disconnect();
      ro.disconnect();
      cancelAnimationFrame(raf);
      renderer.domElement.removeEventListener("pointerdown", pause);
      controls.dispose();
      scene.traverse((o) => {
        if (o instanceof THREE.Mesh || o instanceof THREE.LineSegments) {
          o.geometry.dispose();
          const mat = o.material;
          if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
          else mat.dispose();
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
      api.current = null;
    };
  }, []);

  const pick = (m: Mode) => {
    setMode(m);
    api.current?.setMode(m);
  };

  const MODES: { id: Mode; label: string }[] = [
    { id: "wireframe", label: "Wireframe" },
    { id: "structure", label: "Structure" },
    { id: "furnished", label: "Furnished" },
  ];

  return (
    <div className={className}>
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-teal-50/70 to-white ring-1 ring-line">
        <div ref={host} className="aspect-[4/3] w-full" />

        {!ready ? (
          <div className="absolute inset-0 grid place-items-center text-xs text-navy/45">
            Loading 3D model…
          </div>
        ) : null}

        <span className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-white/85 px-2.5 py-1 text-[0.6rem] font-semibold tracking-wide text-navy/60 uppercase">
          Drag to orbit
        </span>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        {MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => pick(m.id)}
            aria-pressed={mode === m.id}
            className={`rounded-full px-3 py-1.5 text-[0.7rem] font-semibold transition ${
              mode === m.id
                ? "bg-teal text-white"
                : "border border-line bg-white text-navy/70 hover:border-teal/40"
            }`}
          >
            {m.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => api.current?.reset()}
          className="ml-auto rounded-full border border-line bg-white px-3 py-1.5 text-[0.7rem] font-semibold text-navy/60 transition hover:border-orange/40"
        >
          Reset view
        </button>
      </div>
    </div>
  );
}
