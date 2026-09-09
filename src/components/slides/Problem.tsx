import { Slide } from "../Deck";
import { Icons } from "../Icon";
import { Art, Card, Kicker, O, Script, Title } from "../ui";

const STEPS = [
  {
    stage: "2D Plan",
    art: "gap-2d",
    alt: "2D floor plan with dimension lines",
    issue: "Multiple Interfaces",
    detail: "Different tools, different learning curves",
  },
  {
    stage: "3D Model",
    art: "gap-3d",
    alt: "Grey-shaded 3D massing model of a small house",
    issue: "Project Handoffs",
    detail: "Export, import, convert, synchronize",
  },
  {
    stage: "Render",
    art: "gap-render",
    alt: "Rendered exterior of a white modern house",
    issue: "High Hardware & Time",
    detail: "Rendering can take hours with high GPU cost",
  },
  {
    stage: "Estimate",
    art: null,
    alt: "",
    issue: "Data Inconsistency",
    detail: "Design changes may not automatically update in estimates",
  },
  {
    stage: "Build",
    art: "gap-build",
    alt: "Concrete frame of a building under construction",
    issue: "Miscommunication",
    detail: "Critical details may be missed between teams",
  },
] as const;

const BOQ = ["Walls", "Windows", "Doors", "Finishes", "MEP"] as const;

const PHASES = ["Concept", "Design", "Visualize", "Plan", "Construct"] as const;

const COSTS = [
  { icon: "coins", label: "Higher Costs" },
  { icon: "clock", label: "Project Delays" },
  { icon: "users", label: "Rework" },
  { icon: "warn", label: "Stakeholder Misalignment" },
  { icon: "gear", label: "Lower Productivity" },
  { icon: "trendDown", label: "Reduced Profitability" },
] as const;

export function Problem() {
  return (
    <Slide id="problem">
      <div className="flex flex-col gap-6">
        <header className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-danger/25 bg-red-50 px-4 py-2 font-display text-sm font-bold text-danger sm:text-base">
            <Icons.alert className="size-5" />
            Current Problem in AEC
          </span>
          <Title>
            Connected Tools. <O>Broken Continuity.</O>
          </Title>
          <p className="font-display text-[clamp(0.95rem,2.6vw,1.35rem)] font-medium text-navy/60">
            Plugins improve connectivity — but handoffs still create risk.
          </p>
        </header>

        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-2.5">
          {STEPS.map((s) => (
            <li key={s.stage} className="flex flex-col">
              <div className="rounded-t-xl border border-line bg-mist px-3 py-2 text-center font-display text-sm font-bold text-navy">
                {s.stage}
              </div>
              <div className="grow border-x border-line bg-white p-2">
                {s.art ? (
                  <Art
                    src={s.art}
                    alt={s.alt}
                    ratio="aspect-[4/3]"
                    className="!rounded-md !ring-0"
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 19vw"
                  />
                ) : (
                  <div className="flex aspect-[4/3] flex-col justify-center gap-1.5 rounded-md bg-mist px-3">
                    <p className="kicker text-[0.55rem] text-navy/60">
                      BOQ / Estimate
                    </p>
                    {BOQ.map((b) => (
                      <div key={b} className="flex items-center gap-2">
                        <Icons.doc className="size-3 shrink-0 text-navy/40" />
                        <span className="w-14 shrink-0 text-[0.65rem] text-navy/70">
                          {b}
                        </span>
                        <span className="h-1 flex-1 rounded-full bg-line" />
                        {b === "Windows" ? (
                          <Icons.warn className="size-3 shrink-0 text-danger" />
                        ) : null}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="rounded-b-xl border border-danger/15 bg-red-50/70 p-3">
                <p className="flex items-start gap-1.5 font-display text-sm font-semibold text-danger">
                  <Icons.alert className="mt-0.5 size-4 shrink-0" />
                  {s.issue}
                </p>
                <p className="mt-1 text-xs leading-snug text-navy/65">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center">
            <span className="rounded-full border border-teal/30 bg-white px-4 py-1.5 text-center text-[0.62rem] font-semibold tracking-[0.16em] text-navy/70 uppercase sm:text-xs">
              A more connected way <span className="text-orange">forward</span> with{" "}
              <span className="text-teal">Zlendo Realty</span>
            </span>
          </div>
          <div className="relative">
            <div className="h-1 rounded-full bg-gradient-to-r from-teal via-navy/60 to-orange" />
            <ol className="mt-2 grid grid-cols-3 gap-1 sm:grid-cols-5">
              {PHASES.map((p) => (
                <li
                  key={p}
                  className="text-center text-[0.58rem] font-semibold tracking-[0.14em] text-navy/55 uppercase sm:text-[0.65rem]"
                >
                  {p}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <Card className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="shrink-0 lg:w-52">
            <p className="font-display text-lg font-bold text-navy-900">
              The Result?
            </p>
            <p className="text-sm text-navy/65">Small misses become costly delays.</p>
            <span className="mt-2 block h-0.5 w-10 bg-orange" />
          </div>
          <ul className="grid grow grid-cols-3 gap-x-3 gap-y-4 border-line sm:grid-cols-6 lg:border-x lg:px-5">
            {COSTS.map((c) => {
              const I = Icons[c.icon];
              return (
                <li key={c.label} className="flex flex-col items-center gap-1.5 text-center">
                  <I className="size-6 text-navy/70" />
                  <span className="text-[0.68rem] leading-tight font-medium text-navy/75">
                    {c.label}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="shrink-0 text-center lg:w-40">
            <Script>
              It&rsquo;s time for
              <br />a better way.
            </Script>
            <span className="mx-auto mt-1 block h-0.5 w-16 rounded-full bg-orange" />
          </div>
        </Card>

        <Kicker className="text-center">
          People · Projects · Possibilities · Connected
        </Kicker>
      </div>
    </Slide>
  );
}
