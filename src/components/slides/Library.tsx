import { Slide } from "../Deck";
import { Icons } from "../Icon";
import { Art, O, Script, Step, Title } from "../ui";

const CATEGORIES = [
  { art: "cat-furniture", label: "Furniture" },
  { art: "cat-lighting", label: "Lighting" },
  { art: "cat-kitchen", label: "Kitchen & Appliances" },
  { art: "cat-bathroom", label: "Bathroom" },
  { art: "cat-doors", label: "Doors & Windows" },
  { art: "cat-flooring", label: "Flooring & Wall" },
  { art: "cat-decor", label: "Décor & Accessories" },
  { art: "cat-outdoor", label: "Outdoor" },
  { art: "cat-materials", label: "Building Materials" },
] as const;

const FILTERS = [
  "All",
  "Furniture",
  "Lighting",
  "Kitchen",
  "Bathroom",
  "Doors & Windows",
  "Flooring",
  "Décor",
  "Outdoor",
  "Materials",
];

const STEPS = [
  { n: "01", tone: "teal", head: "Explore Categories", sub: "Browse 2K+ assets" },
  { n: "02", tone: "orange", head: "Choose Style and Theme", sub: "Modern, Minimal, Contemporary…" },
  { n: "03", tone: "teal", head: "Drag. Drop. Design.", sub: "Bring your space to life" },
] as const;

export function Library() {
  return (
    <Slide id="library">
      <div className="flex flex-col gap-6">
        <header className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left">
            <Title>
              <O>2K+</O> Assets
            </Title>
            <p className="mt-1 font-display text-[clamp(0.95rem,2.4vw,1.25rem)] font-medium text-navy/65">
              Real Brands. Real Spaces. Always Growing.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3 rounded-full border border-line bg-white/85 px-4 py-2.5">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-orange text-white">
              <Icons.chart className="size-5" />
            </span>
            <div>
              <p className="font-display text-sm font-bold text-navy-900">
                Library Expands Continuously
              </p>
              <p className="text-xs text-navy/60">
                New assets, brands and styles added regularly.
              </p>
            </div>
          </div>
        </header>

        <div className="grid gap-4 lg:grid-cols-[1fr_1.15fr] lg:gap-5">
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {CATEGORIES.map((c) => (
              <li key={c.label} className="card !p-2">
                <p className="pb-1.5 text-[0.68rem] font-semibold text-navy">
                  {c.label}
                </p>
                <Art
                  src={c.art}
                  alt={`${c.label} assets`}
                  ratio="aspect-[4/3]"
                  className="!ring-0"
                  sizes="(max-width: 640px) 46vw, 16vw"
                />
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3">
            {/* library UI mock */}
            <div className="card overflow-hidden !p-0">
              <div className="flex items-center gap-3 border-b border-line px-3 py-2.5">
                <span className="font-display text-sm font-bold text-navy-900">
                  Zlendo <span className="text-orange">Realty</span> Library
                </span>
                <span className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-line px-3 py-1.5">
                  <Icons.search className="size-3.5 shrink-0 text-navy/35" />
                  <span className="truncate text-[0.7rem] text-navy/40">
                    Search furniture, materials, brands…
                  </span>
                </span>
              </div>
              <div className="no-scrollbar flex gap-1.5 overflow-x-auto px-3 py-2">
                {FILTERS.map((f, i) => (
                  <span
                    key={f}
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[0.65rem] font-medium ${
                      i === 0
                        ? "bg-orange text-white"
                        : "border border-line text-navy/65"
                    }`}
                  >
                    {f}
                  </span>
                ))}
              </div>
              <Art
                src="lib-hero"
                alt="Boucle armchair and marble coffee table styled in a bright room"
                ratio="aspect-[16/9]"
                className="!rounded-none !ring-0"
                sizes="(max-width: 1024px) 92vw, 44vw"
              />
              <div className="flex items-center gap-3 border-t border-line p-3">
                <div className="min-w-0 flex-1">
                  <p className="font-display text-sm font-bold text-navy-900">
                    Modern Lounge Chair
                  </p>
                  <p className="text-[0.68rem] text-navy/55">Furniture · Living Room</p>
                </div>
                <span className="flex gap-1.5">
                  <span className="size-4 rounded-full bg-[#5b6a4a]" />
                  <span className="size-4 rounded-full bg-[#d8c3a5]" />
                  <span className="size-4 rounded-full bg-[#bdbdbd]" />
                </span>
                <span className="shrink-0 rounded-full bg-orange px-3 py-1.5 text-[0.7rem] font-semibold text-white">
                  Add to Project
                </span>
              </div>
            </div>

            <div className="card flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="shrink-0">
                <p className="font-display text-sm font-bold text-navy-900">
                  Other Tools
                </p>
                <p className="text-xs text-navy/55">Large but overwhelming</p>
              </div>
              <span className="hidden h-10 w-px bg-line sm:block" />
              <div>
                <p className="font-display text-sm font-bold text-navy-900">
                  2K+ curated assets
                </p>
                <p className="text-xs text-navy/55">Focused on real-world needs</p>
              </div>
              <Script className="ml-auto hidden text-right lg:block">
                Design with
                <br />
                Real Possibilities
              </Script>
            </div>
          </div>
        </div>

        <ol className="grid gap-3 sm:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="flex items-center gap-3">
              <Step n={s.n} tone={s.tone} />
              <div>
                <p className="font-display text-sm font-bold text-navy-900">
                  {s.head}
                </p>
                <p className="text-xs text-navy/55">{s.sub}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Slide>
  );
}
