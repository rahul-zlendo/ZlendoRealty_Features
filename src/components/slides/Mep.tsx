import { Slide } from "../Deck";
import { Icons } from "../Icon";
import { Art, Kicker, O, T, Title } from "../ui";

const PROJECT_NAV = [
  { icon: "home", label: "Architectural" },
  { icon: "cube", label: "Structural" },
  { icon: "network", label: "MEP", active: true },
  { icon: "layers", label: "Views" },
  { icon: "doc", label: "Schedules" },
  { icon: "upload", label: "Export" },
] as const;

const SYSTEMS = [
  { icon: "wind", label: "HVAC", color: "#2f83e0", on: true },
  { icon: "droplet", label: "Plumbing", color: "#e03a2f", on: true },
  { icon: "bolt", label: "Electrical", color: "#f0b400", on: true },
  { icon: "flame", label: "Fire Fighting", color: "#f0562f", on: false },
  { icon: "layers", label: "Structural", color: "#12a05c", on: true },
] as const;

const LAYOUTS = [
  { art: "mep-structural", label: "Structural Model", icon: "layers", color: "#12a05c" },
  { art: "mep-hvac", label: "HVAC Layout", icon: "wind", color: "#2f83e0" },
  { art: "mep-plumbing", label: "Plumbing Layout", icon: "droplet", color: "#e03a2f" },
  { art: "mep-electrical", label: "Electrical Layout", icon: "bolt", color: "#f0b400" },
] as const;

const BUILD_READY = ["Clash Free", "Coordinated", "Detailed", "Accurate Quantities"];

const TOOLS = [
  { icon: "cube", label: "Isolate" },
  { icon: "layers", label: "Transparency" },
  { icon: "grid", label: "Section" },
  { icon: "warn", label: "Clash Check" },
] as const;

export function Mep({
  id,
  hero,
  heroAlt,
}: {
  id: string;
  hero: string;
  heroAlt: string;
}) {
  return (
    <Slide id={id}>
      <div className="flex flex-col gap-5">
        <header className="flex flex-col items-center gap-1.5 text-center lg:flex-row lg:justify-between lg:text-left">
          <div>
            <Title size="md">
              Integrated <T>MEP</T> &amp; <O>Structural</O>
            </Title>
            <p className="font-display text-[clamp(0.9rem,2.2vw,1.15rem)] font-medium text-navy/65">
              From Design to Build, Fully Connected
            </p>
          </div>
          <Kicker className="!text-[0.58rem] !tracking-[0.26em] lg:text-right">
            One model
            <br />
            Complete clarity
          </Kicker>
        </header>

        <div className="grid gap-4 lg:grid-cols-[auto_1.5fr_1fr] lg:gap-4">
          {/* project nav */}
          <nav className="card self-start p-2 lg:w-40">
            <p className="px-2 pb-1.5 text-[0.62rem] font-semibold tracking-wide text-navy/45 uppercase">
              Project
            </p>
            <ul className="flex flex-row flex-wrap gap-1 lg:flex-col">
              {PROJECT_NAV.map((n) => {
                const I = Icons[n.icon];
                return (
                  <li key={n.label}>
                    <span
                      className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-medium ${
                        "active" in n && n.active
                          ? "bg-orange-50 text-orange"
                          : "text-navy/75"
                      }`}
                    >
                      <I className="size-4 shrink-0" />
                      {n.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="lg:col-start-2 lg:row-start-1 lg:flex lg:flex-col lg:gap-4">
          <Art
            src={hero}
            alt={heroAlt}
            ratio="aspect-[3/2]"
            fit="contain"
            sizes="(max-width: 1024px) 94vw, 44vw"
            className="bg-white"
          />

          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {LAYOUTS.map((l) => {
              const I = Icons[l.icon];
              return (
                <li key={l.label} className="card !p-2">
                  <Art
                    src={l.art}
                    alt={l.label}
                    ratio="aspect-[4/3]"
                    className="!ring-0"
                    sizes="(max-width: 640px) 46vw, 12vw"
                  />
                  <p className="mt-1.5 flex items-center justify-center gap-1.5 text-[0.65rem] font-semibold text-navy/75">
                    <I className="size-3.5" style={{ color: l.color }} />
                    {l.label}
                  </p>
                </li>
              );
            })}
          </ul>
          </div>

          {/* systems + views */}
          <div className="flex flex-col gap-3">
            <div className="card p-3">
              <p className="pb-2 text-[0.62rem] font-semibold tracking-wide text-navy/45 uppercase">
                Systems
              </p>
              <ul className="flex flex-col gap-1.5">
                {SYSTEMS.map((s) => {
                  const I = Icons[s.icon];
                  return (
                    <li key={s.label} className="flex items-center gap-2.5">
                      <I className="size-4 shrink-0" style={{ color: s.color }} />
                      <span className="text-xs font-medium text-navy/80">
                        {s.label}
                      </span>
                      <span
                        className={`ml-auto flex h-4 w-8 items-center rounded-full px-0.5 transition ${
                          s.on ? "justify-end bg-teal" : "justify-start bg-line"
                        }`}
                        role="img"
                        aria-label={s.on ? "visible" : "hidden"}
                      >
                        <span className="block size-3 rounded-full bg-white" />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="card p-3">
              <div className="flex items-center justify-between pb-2">
                <p className="text-[0.62rem] font-semibold tracking-wide text-navy/45 uppercase">
                  Floor View
                </p>
                <span className="rounded border border-line px-2 py-0.5 text-[0.62rem] text-navy/60">
                  First Floor
                </span>
              </div>
              <Art
                src="mep-floorview"
                alt="Colour-coded services overlaid on the first-floor plan"
                ratio="aspect-[16/9]"
                fit="contain"
                sizes="(max-width: 1024px) 92vw, 26vw"
                className="!ring-0 bg-white"
              />
            </div>

            <div className="card p-3">
              <p className="pb-2 text-[0.62rem] font-semibold tracking-wide text-navy/45 uppercase">
                3D View — MEP + Structure
              </p>
              <Art
                src="mep-3dview"
                alt="3D view of coordinated MEP services and structure"
                ratio="aspect-[16/10]"
                sizes="(max-width: 1024px) 92vw, 26vw"
                className="!ring-0"
              />
              <ul className="mt-2.5 flex justify-between gap-2">
                {TOOLS.map((t) => {
                  const I = Icons[t.icon];
                  return (
                    <li
                      key={t.label}
                      className="flex flex-1 flex-col items-center gap-0.5 text-center"
                    >
                      <I
                        className={`size-4 ${
                          t.label === "Clash Check" ? "text-danger" : "text-navy/60"
                        }`}
                      />
                      <span className="text-[0.55rem] leading-tight text-navy/60">
                        {t.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="card">
            <p className="font-display text-sm font-bold text-navy-900">
              Build Ready
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
              {BUILD_READY.map((b) => (
                <li key={b} className="flex items-center gap-1.5 text-xs text-navy/70">
                  <Icons.check className="size-4 shrink-0 text-teal" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <p className="font-display text-sm font-bold text-navy-900">
              Detailed Drawings &amp; Schedules
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
              {["MEP Drawings", "Material Schedule", "Riser Diagram"].map((d) => (
                <li key={d} className="flex items-center gap-1.5 text-xs text-navy/70">
                  <Icons.doc className="size-4 shrink-0 text-navy/40" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Kicker className="!text-[0.55rem] !tracking-[0.26em]">
          From design <O>to realize</O>
        </Kicker>
      </div>
    </Slide>
  );
}
