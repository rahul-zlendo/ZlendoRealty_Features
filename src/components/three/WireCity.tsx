"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/* A slow, decorative wireframe massing model. Purely atmospheric: it sits
   behind slide content at low opacity and never takes pointer events. */
export function WireCity({ className }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 200);
    camera.position.set(16, 11, 18);
    camera.lookAt(0, 2.2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    el.appendChild(renderer.domElement);
    Object.assign(renderer.domElement.style, {
      width: "100%",
      height: "100%",
      display: "block",
    });

    const city = new THREE.Group();
    scene.add(city);

    const box = new THREE.BoxGeometry(1, 1, 1);
    const edges = new THREE.EdgesGeometry(box);
    const teal = new THREE.LineBasicMaterial({
      color: 0x0d8880,
      transparent: true,
      opacity: 0.5,
    });
    const orange = new THREE.LineBasicMaterial({
      color: 0xf04e11,
      transparent: true,
      opacity: 0.45,
    });

    /* deterministic pseudo-random so the composition is stable across renders */
    let seed = 20260909;
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };

    const SPAN = 5;
    for (let gx = -SPAN; gx <= SPAN; gx += 1) {
      for (let gz = -SPAN; gz <= SPAN; gz += 1) {
        const dist = Math.hypot(gx, gz);
        if (dist > SPAN) continue;
        if (rand() > 0.42) continue;

        const h = 1 + (1 - dist / SPAN) * 7 * rand() + 0.6;
        const w = 0.9 + rand() * 0.7;
        const line = new THREE.LineSegments(
          edges,
          rand() > 0.86 ? orange : teal,
        );
        line.scale.set(w, h, w);
        line.position.set(gx * 2.1, h / 2, gz * 2.1);
        city.add(line);
      }
    }

    /* ground grid */
    const grid = new THREE.GridHelper(30, 20, 0x0a2a4e, 0x0a2a4e);
    const gm = grid.material as THREE.Material;
    gm.transparent = true;
    gm.opacity = 0.12;
    scene.add(grid);

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

    let raf = 0;
    let running = false;
    const render = () => renderer.render(scene, camera);
    const loop = () => {
      raf = requestAnimationFrame(loop);
      city.rotation.y += 0.0011;
      grid.rotation.y = city.rotation.y;
      render();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting === running) return;
        running = entry.isIntersecting;
        if (running && !reduced) loop();
        else {
          cancelAnimationFrame(raf);
          if (running) render();
        }
      },
      { rootMargin: "150px" },
    );
    io.observe(el);
    if (reduced) render();

    return () => {
      io.disconnect();
      ro.disconnect();
      cancelAnimationFrame(raf);
      edges.dispose();
      box.dispose();
      teal.dispose();
      orange.dispose();
      grid.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={host}
      aria-hidden="true"
      className={className}
      style={{ pointerEvents: "none" }}
    />
  );
}
