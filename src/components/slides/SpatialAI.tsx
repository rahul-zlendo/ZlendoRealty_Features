import { Slide } from "../Deck";
import { Icons } from "../Icon";
import { Art, Closer, FootFeature, FootRow, O, Title } from "../ui";

const STYLES: { name: string; art: string; active?: boolean }[] = [
  { name: "Modern", art: "style-modern", active: true },
  { name: "Minimal", art: "style-minimal" },
  { name: "Contemporary", art: "style-contemporary" },
  { name: "Luxury", art: "style-luxury" },
  { name: "Traditional", art: "style-traditional" },
];

const CAPABILITIES = [
  { icon: "grid", label: "Understands Room Geometry" },
  { icon: "layers", label: "Matches Design Style" },
  { icon: "sofa", label: "Plans & Places from Zlendo Library" },
] as const;

export function SpatialAI() {
  return (
    <Slide id="spatial-ai">
      <div className="flex flex-col gap-6">
        <header className="flex flex-col items-center gap-3 text-center">
          <Title>
            Choose Style and Theme.{" "}
            <O>AI Designs the Space Around It.</O>
          </Title>
          <p className="flex flex-wrap items-center justify-center gap-2 font-display text-xs font-bold tracking-[0.12em] text-navy uppercase sm:text-sm">
            Powered by Zlendo Realty&rsquo;s
            <span className="rounded-full bg-orange px-3 py-1 tracking-[0.08em] text-white">
              Patented Property Engine™
            </span>
          </p>
        </header>

        <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
          {STYLES.map((s) => (
            <li key={s.name}>
              <div
                className={`relative rounded-xl border-2 p-1.5 transition ${
                  s.active
                    ? "border-teal bg-teal-50"
                    : "border-transparent bg-white/70 hover:border-line"
                }`}
              >
                <Art
                  src={s.art}
                  alt={`${s.name} interior style reference`}
                  ratio="aspect-[4/3]"
                  className="!ring-0"
                  sizes="(max-width: 640px) 46vw, 19vw"
                />
                {s.active ? (
                  <span className="absolute -top-2 -right-2 grid size-6 place-items-center rounded-full bg-teal text-white">
                    <Icons.check className="size-4" />
                  </span>
                ) : null}
              </div>
              <p
                className={`mt-1.5 text-center text-xs font-semibold ${
                  s.active ? "text-teal" : "text-navy/65"
                }`}
              >
                {s.name}
              </p>
            </li>
          ))}
        </ul>

        <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <figure>
            <Art
              src="spatial-empty"
              alt="Empty concrete-floored room with floor-to-ceiling windows"
              ratio="aspect-[5/3]"
              sizes="(max-width: 1024px) 92vw, 36vw"
            />
          </figure>

          <div className="flex flex-col items-center gap-3 lg:w-56">
            <div className="flex items-center gap-2">
              <Icons.arrowRight className="size-5 text-teal" />
              <span className="grid size-14 place-items-center rounded-full bg-navy-900 font-display text-lg font-bold text-white ring-4 ring-teal/25">
                AI
              </span>
              <Icons.arrowRight className="size-5 text-orange" />
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-navy-900">Spatial AI</p>
              <p className="text-[0.68rem] leading-snug text-navy/60">
                Powered by Zlendo Realty&rsquo;s
                <br />
                Patented Property Engine™
              </p>
            </div>
            <ul className="flex w-full flex-col gap-1.5">
              {CAPABILITIES.map((c) => {
                const I = Icons[c.icon];
                return (
                  <li
                    key={c.label}
                    className="flex items-center gap-2 rounded-lg border border-line bg-white/80 px-2.5 py-1.5"
                  >
                    <I className="size-4 shrink-0 text-teal" />
                    <span className="text-[0.7rem] font-medium text-navy/75">
                      {c.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <figure>
            <Art
              src="spatial-furnished"
              alt="The same room fully furnished in a modern style by AI, annotated with room size, selected style, furniture fit, circulation and spatial balance"
              ratio="aspect-[2/1]"
              sizes="(max-width: 1024px) 92vw, 36vw"
              className="ring-2 ring-teal/40"
            />
          </figure>
        </div>

        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange px-4 py-2 text-xs font-bold text-white sm:text-sm">
            <Icons.target className="size-5" />
            Zlendo Realty Patented Property Engine™
          </span>
        </div>

        <Closer className="!font-medium !text-navy/70">
          AI understands the space before it furnishes the room.
        </Closer>

        <FootRow>
          <FootFeature icon="palette" tone="orange" label="Style Selection" />
          <FootFeature icon="chip" tone="teal" label="Spatial AI" sub="Our patented engine" />
          <FootFeature icon="sofa" tone="orange" label="Auto Furnishing" />
          <FootFeature icon="edit" tone="teal" label="Editable Output" />
        </FootRow>
      </div>
    </Slide>
  );
}
