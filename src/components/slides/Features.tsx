import { Slide } from "../Deck";
import { Icons, type IconName } from "../Icon";
import { Art, Kicker, O, Title } from "../ui";

type Feature = {
  n: string;
  name: string;
  icon: IconName;
  tone: "teal" | "orange";
  art: string;
  alt: string;
  detail: string;
  href?: string;
};

const FEATURES: Feature[] = [
  {
    n: "01",
    name: "Floor Plan Drafting",
    icon: "plan",
    tone: "teal",
    art: "f01",
    alt: "Floor plan drafting canvas with a CAD tool palette",
    detail: "CAD-style tools with smart snapping and AI layout assist.",
    href: "#drafting",
  },
  {
    n: "02",
    name: "Instant 2D → 3D Visualization",
    icon: "cube",
    tone: "orange",
    art: "f02",
    alt: "A 2D plan converting into a furnished 3D model",
    detail: "Every 2D change becomes immediately visible in 3D.",
    href: "#2d-to-3d",
  },
  {
    n: "03",
    name: "Spatial AI / AI Inspiration",
    icon: "chip",
    tone: "teal",
    art: "f03",
    alt: "Style picker offering modern, minimal, contemporary, luxury and traditional",
    detail: "Modern, minimal, contemporary, luxury and traditional styles.",
    href: "#spatial-ai",
  },
  {
    n: "04",
    name: "Real-Time 3D Walkthrough",
    icon: "walk",
    tone: "orange",
    art: "f04",
    alt: "Interior walkthrough view with navigation controls",
    detail: "Move through the space with daylight and night lighting.",
    href: "#walkthrough",
  },
  {
    n: "05",
    name: "Cinematic 4K Video",
    icon: "video",
    tone: "teal",
    art: "f05",
    alt: "4K video player showing a villa at dusk",
    detail: "Walkthrough-ready 4K visuals with cinematic camera motion.",
    href: "#cinematic",
  },
  {
    n: "06",
    name: "Cost Estimation & Detailed BOQ",
    icon: "doc",
    tone: "orange",
    art: "f06",
    alt: "Bill of quantities listing concrete, bricks, steel, tiles and paint",
    detail: "Concrete, bricks, steel, tiles, paint, electrical, plumbing.",
  },
  {
    n: "07",
    name: "MEP Design & Structural Design",
    icon: "layers",
    tone: "teal",
    art: "f07",
    alt: "MEP services model beside a structural frame model",
    detail: "Coordinated services and structure on one model.",
    href: "#mep",
  },
  {
    n: "08",
    name: "2K+ Asset & Material Library",
    icon: "sofa",
    tone: "orange",
    art: "f08",
    alt: "Grid of furniture, lighting and material assets",
    detail: "Curated furniture, fittings, finishes and materials.",
    href: "#library",
  },
  {
    n: "09",
    name: "2D → 3D Conversion API",
    icon: "api",
    tone: "teal",
    art: "f09",
    alt: "JPG, PNG and PDF files converting to a JSON 3D model",
    detail: "JPG, PNG or PDF in — structured JSON 3D out.",
    href: "#api",
  },
  {
    n: "10",
    name: "Smart Wizard",
    icon: "sparkle",
    tone: "orange",
    art: "f10",
    alt: "Requirements form generating a finished floor plan",
    detail: "Tell it your requirements, get a floor plan in seconds.",
  },
  {
    n: "11",
    name: "Vasthu",
    icon: "compass",
    tone: "teal",
    art: "f11",
    alt: "Vasthu score dial with five-element balance and recommendations",
    detail: "Vasthu score, five-element balance and remedies.",
    href: "#vastu",
  },
];

export function Features() {
  return (
    <Slide id="features">
      <div className="flex flex-col gap-7">
        <header className="flex flex-col items-center gap-2 text-center">
          <Title>
            Powerful <O>Features</O>
          </Title>
          <Kicker className="!text-[0.62rem] !tracking-[0.3em] sm:!text-sm">
            Everything you need. In one platform.
          </Kicker>
        </header>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FEATURES.map((f) => {
            const I = Icons[f.icon];
            const solid =
              f.tone === "teal" ? "bg-teal text-white" : "bg-orange text-white";
            const inner = (
              <>
                <div className="flex items-center gap-2.5">
                  <span
                    className={`grid size-8 shrink-0 place-items-center rounded-full font-display text-xs font-bold ${solid}`}
                  >
                    {f.n}
                  </span>
                  <h3 className="font-display text-sm leading-tight font-bold text-navy-900">
                    {f.name}
                  </h3>
                  <I
                    className={`ml-auto size-5 shrink-0 ${
                      f.tone === "teal" ? "text-teal" : "text-orange"
                    }`}
                  />
                </div>
                <Art
                  src={f.art}
                  alt={f.alt}
                  ratio="aspect-[16/10]"
                  fit="contain"
                  className="mt-2.5 !ring-0"
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 23vw"
                />
                <p className="mt-2 text-xs leading-relaxed text-navy/60">
                  {f.detail}
                </p>
                {f.href ? (
                  <span className="mt-2 inline-flex items-center gap-1 text-[0.7rem] font-semibold text-orange">
                    See it
                    <Icons.arrowRight className="size-3.5" />
                  </span>
                ) : null}
              </>
            );

            return (
              <li key={f.n}>
                {f.href ? (
                  <a
                    href={f.href}
                    className="card block h-full p-3.5 transition hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-lg"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="card h-full p-3.5">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
          <Kicker className="!text-[0.58rem] !tracking-[0.26em]">
            Built for a smarter tomorrow
          </Kicker>
          <Kicker className="!text-[0.58rem] !tracking-[0.26em]">
            Zlendo Realty
          </Kicker>
        </div>
      </div>
    </Slide>
  );
}
