import { Slide } from "../Deck";
import { Icons, type IconName } from "../Icon";
import { Art, Kicker, O, Step, T, Title } from "../ui";

const NEW_STEPS = [
  { icon: "doc", n: 1, head: "Enter Details", body: "Plot size, rooms needed, style preferences" },
  { icon: "sparkle", n: 2, head: "AI Creates", body: "Complete floor plan, 3D design, elevations and more" },
  { icon: "check", n: 3, head: "Visualize & Refine", body: "Customize and make it yours" },
] as const;

const EXISTING_STEPS = [
  { icon: "camera", n: 1, head: "Capture or Upload", body: "Take photos of your space or upload existing floor plan (PDF, image or CAD)" },
  { icon: "chip", n: 2, head: "AI Reconstructs", body: "Converts to editable 2D & 3D model" },
  { icon: "edit", n: 3, head: "Redesign & Visualize", body: "Explore new layouts, renovate, extend and estimate cost" },
] as const;

const PLATFORM = [
  { icon: "layers", label: "Design" },
  { icon: "image", label: "Visualize" },
  { icon: "doc", label: "Estimate" },
  { icon: "gear", label: "Collaborate" },
  { icon: "cloud", label: "Go from Concept to Construction" },
] as const;

const OUTPUTS = [
  "2D Floor Plan",
  "3D Design",
  "Elevations",
  "Interior Renders",
  "Cost Estimation",
  "Structural & MEP",
  "Drawings & Schedules",
  "Virtual Walkthrough",
  "Build Ready Output",
  "BOQ",
];

const WORKS_FOR: { icon: IconName; label: string }[] = [
  { icon: "home", label: "Homes" },
  { icon: "building", label: "Apartments" },
  { icon: "villa", label: "Villas" },
  { icon: "building", label: "Commercial Spaces" },
  { icon: "wrench", label: "Renovation & Extensions" },
  { icon: "bank", label: "Heritage & Old Buildings" },
];

function StepList({
  steps,
  tone,
}: {
  steps: typeof NEW_STEPS | typeof EXISTING_STEPS;
  tone: "teal" | "orange";
}) {
  return (
    <ul className="grid gap-3 sm:grid-cols-3">
      {steps.map((s) => {
        const I = Icons[s.icon];
        return (
          <li key={s.head} className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <I
                className={`size-4 shrink-0 ${tone === "teal" ? "text-teal" : "text-orange"}`}
              />
              <Step n={s.n} tone={tone} />
              <span className="font-display text-sm font-bold text-navy-900">
                {s.head}
              </span>
            </div>
            <p className="text-xs leading-snug text-navy/60">{s.body}</p>
          </li>
        );
      })}
    </ul>
  );
}

export function NewOrExisting() {
  return (
    <Slide id="new-or-existing">
      <div className="flex flex-col gap-6">
        <header className="flex flex-col items-center gap-1.5 text-center">
          <Title>
            New Home or Existing Home
            <br />
            <O>Zlendo Realty</O> Makes It Simple.
          </Title>
          <p className="font-display text-[clamp(0.9rem,2.4vw,1.2rem)] font-medium text-teal">
            Same Platform. Endless Possibilities.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-5">
          {/* build new */}
          <section className="overflow-hidden rounded-2xl border border-line bg-white/80">
            <div className="flex items-center gap-3 bg-teal-600 px-4 py-3 text-white">
              <Icons.home className="size-6 shrink-0" />
              <div>
                <h3 className="font-display text-base font-bold sm:text-lg">
                  Build a New Home
                </h3>
                <p className="text-xs text-white/75">
                  Start from your ideas. Design your dream space.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-4">
              <StepList steps={NEW_STEPS} tone="teal" />
              <Art
                src="twin-new"
                alt="Wireframe sketch resolving into a photoreal render of a modern home"
                ratio="aspect-[16/9]"
                sizes="(max-width: 1024px) 92vw, 38vw"
              />
            </div>
          </section>

          {/* centre hub */}
          <div className="flex flex-col items-center gap-3 lg:w-52 lg:pt-6">
            <div className="hidden items-center gap-1 lg:flex">
              <Icons.arrowRight className="size-6 text-teal" />
              <Icons.chevronLeft className="size-6 text-orange" />
            </div>
            <div className="rounded-full border border-line bg-white px-5 py-4 text-center shadow-sm">
              <p className="font-display text-lg font-bold text-navy-900">
                Zlendo <span className="text-orange">Realty</span>
              </p>
              <p className="text-[0.6rem] tracking-wide text-teal">
                Design. Visualize. Realize.
              </p>
            </div>
            <p className="font-display text-sm font-bold text-navy-900">
              One Platform For Every Space
            </p>
            <ul className="flex flex-wrap justify-center gap-x-3 gap-y-1.5 lg:flex-col lg:items-start">
              {PLATFORM.map((p) => {
                const I = Icons[p.icon];
                return (
                  <li
                    key={p.label}
                    className="flex items-center gap-2 text-xs text-navy/70"
                  >
                    <I className="size-4 shrink-0 text-navy/45" />
                    {p.label}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* reconstruct */}
          <section className="overflow-hidden rounded-2xl border border-line bg-white/80">
            <div className="flex items-center gap-3 bg-orange px-4 py-3 text-white">
              <Icons.building className="size-6 shrink-0" />
              <div>
                <h3 className="font-display text-base font-bold sm:text-lg">
                  Reconstruct or Renovate an Existing Home
                </h3>
                <p className="text-xs text-white/80">
                  Give your existing space a new life.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-4">
              <StepList steps={EXISTING_STEPS} tone="orange" />
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                <figure className="col-span-1">
                  <Art
                    src="twin-photo"
                    alt="Photograph of an old cottage"
                    ratio="aspect-[3/4]"
                    sizes="20vw"
                  />
                  <figcaption className="mt-1 text-center text-[0.6rem] text-navy/60">
                    Take a Photo
                  </figcaption>
                </figure>
                <figure className="col-span-1">
                  <Art
                    src="twin-plan"
                    alt="Scanned floor plan drawing"
                    ratio="aspect-[3/4]"
                    fit="contain"
                    sizes="20vw"
                  />
                  <figcaption className="mt-1 text-center text-[0.6rem] text-navy/60">
                    Upload Floor Plan
                  </figcaption>
                </figure>
                <figure className="col-span-2">
                  <Art
                    src="twin-beforeafter"
                    alt="Split view comparing an existing space with its reimagined design"
                    ratio="aspect-[3/2] sm:aspect-[3/4]"
                    sizes="(max-width: 640px) 46vw, 20vw"
                  />
                  <figcaption className="mt-1 text-center text-[0.6rem] text-navy/60">
                    Existing Space → Reimagined Possibilities
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
        </div>

        <section className="flex flex-col gap-2.5 border-t border-line pt-4">
          <h3 className="font-display text-sm font-bold text-navy-900">
            What You Get
          </h3>
          <ul className="flex flex-wrap gap-2">
            {OUTPUTS.map((o) => (
              <li
                key={o}
                className="rounded-lg border border-line bg-white/80 px-2.5 py-1.5 text-[0.7rem] font-medium text-navy/75"
              >
                {o}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <h3 className="font-display text-sm font-bold text-navy-900">Works For</h3>
          {WORKS_FOR.map((w) => {
            const I = Icons[w.icon];
            return (
              <span
                key={w.label}
                className="flex items-center gap-1.5 text-xs text-navy/70"
              >
                <I className="size-4 shrink-0 text-navy/45" />
                {w.label}
              </span>
            );
          })}
        </section>

        <Kicker className="text-right !text-[0.55rem] !tracking-[0.26em]">
          From any space <T>to a better tomorrow</T>
        </Kicker>
      </div>
    </Slide>
  );
}
