import { Slide } from "../Deck";
import { Icons, type IconName } from "../Icon";
import { Art, Kicker, O, Script, Step, Title } from "../ui";

const AI_CHECKS = [
  "Recognizes spaces",
  "Detects dimensions",
  "Understands elements",
  "Generates 3D model",
];

const BENEFITS = [
  { icon: "target", head: "90%+", sub: "Accuracy" },
  { icon: "cube", head: "Structured", sub: "& Editable" },
  { icon: "cloud", head: "Ready for", sub: "Your App" },
] as const;

const INTEGRATIONS: { icon: IconName; label: string }[] = [
  { icon: "browser", label: "Web Apps" },
  { icon: "mobile", label: "Mobile Apps" },
  { icon: "home", label: "Real Estate Portals" },
  { icon: "crane", label: "Construction Platforms" },
  { icon: "sofa", label: "Interior Design Tools" },
  { icon: "cube", label: "BIM / CAD Workflows" },
  { icon: "vr", label: "AR / VR Experiences" },
  { icon: "gear", label: "Custom Applications" },
];

const JSON_SAMPLE = `{
  "project": {
    "name": "Residence",
    "units": "mm"
  },
  "rooms": [
    {
      "id": "room_1",
      "type": "living",
      "dimensions": {
        "length": 4800,
        "width": 3600,
        "height": 3000
      },
      "objects": [
        {
          "type": "sofa",
          "position": [1.2, 0, 0.5],
          "rotation": 0,
          "dimensions": [2000, 900, 800],
          "material": "fabric"
        }
      ]
    }
  ]
}`;

export function Api() {
  return (
    <Slide id="api">
      <div className="flex flex-col gap-6">
        <header className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left">
            <Title>
              Business Use Case <O>API</O>
            </Title>
            <p className="mt-1 font-display text-[clamp(0.95rem,2.4vw,1.25rem)] font-medium text-navy/65">
              Convert 2D to 3D. Power Your Applications.
            </p>
          </div>
          <p className="shrink-0 border-l-2 border-orange pl-3 font-display text-sm font-semibold text-navy sm:text-base">
            Same Plan.
            <br />
            Real 3D Data.
            <br />
            Ready via API.
          </p>
        </header>

        <ol className="grid gap-3 lg:grid-cols-4 lg:gap-4">
          <li className="card flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <Step n={1} tone="teal" />
              <div>
                <p className="font-display text-sm font-bold text-navy-900">
                  Upload 2D Plan
                </p>
                <p className="text-xs text-navy/55">Image file (JPG / PNG / PDF)</p>
              </div>
            </div>
            <Art
              src="api-plan"
              alt="Simple 2D floor plan with room labels and dimensions"
              ratio="aspect-[4/3]"
              fit="contain"
              sizes="(max-width: 1024px) 92vw, 22vw"
              className="bg-white"
            />
            <ul className="flex gap-2">
              {["JPG", "PNG", "PDF"].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-1 rounded-md border border-line px-2 py-1 text-[0.65rem] font-semibold text-navy/70"
                >
                  <Icons.file className="size-3.5 text-orange" />
                  {f}
                </li>
              ))}
            </ul>
          </li>

          <li className="card flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <Step n={2} tone="orange" />
              <div>
                <p className="font-display text-sm font-bold text-navy-900">
                  Zlendo AI
                </p>
                <p className="text-xs text-navy/55">
                  Auto converts with 90%+ accuracy
                </p>
              </div>
            </div>
            <div className="flex justify-center py-2">
              <span className="grid size-20 place-items-center rounded-2xl bg-gradient-to-br from-orange to-orange-400 font-display text-xl font-bold text-white shadow-lg shadow-orange/25">
                AI
              </span>
            </div>
            <ul className="flex flex-col gap-1.5">
              {AI_CHECKS.map((c) => (
                <li key={c} className="flex items-center gap-2 text-xs text-navy/75">
                  <Icons.check className="size-4 shrink-0 text-teal" />
                  {c}
                </li>
              ))}
            </ul>
          </li>

          <li className="card flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <Step n={3} tone="teal" />
              <div>
                <p className="font-display text-sm font-bold text-navy-900">
                  3D Model Output
                </p>
                <p className="text-xs text-navy/55">
                  Fully structured 3D with materials
                </p>
              </div>
            </div>
            <Art
              src="api-3d"
              alt="Isometric furnished 3D model generated from the plan"
              ratio="aspect-[4/3]"
              sizes="(max-width: 1024px) 92vw, 22vw"
            />
            <ul className="flex flex-wrap gap-1.5">
              {["3D View", "Wireframe", "Structure", "Materials"].map((t, i) => (
                <li
                  key={t}
                  className={`rounded-md px-2 py-1 text-[0.62rem] font-semibold ${
                    i === 0 ? "bg-orange text-white" : "border border-line text-navy/65"
                  }`}
                >
                  {t}
                </li>
              ))}
            </ul>
          </li>

          <li className="flex flex-col gap-3 rounded-2xl bg-navy-900 p-4 text-white">
            <div className="flex items-center gap-2.5">
              <Step n={4} tone="teal" />
              <div>
                <p className="font-display text-sm font-bold">Download 3D (JSON)</p>
                <p className="text-xs text-white/60">Structured, ready to integrate</p>
              </div>
            </div>
            <ul className="flex gap-1.5">
              {["JSON", "GLB", "FBX"].map((f, i) => (
                <li
                  key={f}
                  className={`rounded-md px-2.5 py-1 text-[0.65rem] font-semibold ${
                    i === 0 ? "bg-white/15 text-white" : "text-white/50"
                  }`}
                >
                  {f}
                </li>
              ))}
            </ul>
            <pre className="no-scrollbar max-h-44 overflow-auto rounded-lg bg-black/35 p-2.5 font-mono text-[0.6rem] leading-relaxed text-teal-50">
              {JSON_SAMPLE}
            </pre>
            <span className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-orange px-3 py-2 font-display text-sm font-semibold text-white">
              <Icons.api className="size-4" />
              Get API Access
            </span>
          </li>
        </ol>

        <ul className="grid grid-cols-3 gap-3">
          {BENEFITS.map((b) => {
            const I = Icons[b.icon];
            return (
              <li key={b.head} className="card flex items-center gap-3">
                <I className="size-6 shrink-0 text-teal" />
                <p className="font-display text-sm leading-tight font-bold text-navy-900">
                  {b.head}
                  <span className="block text-xs font-medium text-navy/55">
                    {b.sub}
                  </span>
                </p>
              </li>
            );
          })}
        </ul>

        <div className="card flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="shrink-0 lg:w-36">
            <p className="font-display text-base font-bold text-navy-900">
              Integrate Everywhere
            </p>
            <span className="mt-1.5 block h-0.5 w-10 bg-orange" />
          </div>
          <ul className="grid grow grid-cols-2 gap-x-3 gap-y-4 sm:grid-cols-4 lg:grid-cols-8">
            {INTEGRATIONS.map((it) => {
              const I = Icons[it.icon];
              return (
                <li
                  key={it.label}
                  className="flex flex-col items-center gap-1.5 text-center"
                >
                  <I className="size-6 text-navy/70" />
                  <span className="text-[0.65rem] leading-tight font-medium text-navy/70">
                    {it.label}
                  </span>
                </li>
              );
            })}
          </ul>
          <Script className="hidden shrink-0 text-right lg:block lg:w-60">
            Your Design.
            <br />
            Our API. Infinite Possibilities.
          </Script>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-3">
          <Kicker className="!text-[0.55rem] !tracking-[0.26em]">
            Built for a smarter tomorrow
          </Kicker>
          <Kicker className="!text-[0.55rem] !tracking-[0.26em]">Zlendo Realty</Kicker>
        </div>
      </div>
    </Slide>
  );
}
