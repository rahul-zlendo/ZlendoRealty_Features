import { Slide } from "../Deck";
import { Icons } from "../Icon";
import { Art, Card, IconCircle, O, Title } from "../ui";

const STAGES = [
  {
    icon: "plan",
    tone: "teal",
    name: "Design",
    art: "flow-plan",
    alt: "2D floor plan drawing with dimensions",
    accent: "text-teal",
  },
  {
    icon: "cube",
    tone: "orange",
    name: "Visualize",
    art: "flow-render",
    alt: "Photoreal render of a two-storey modern house at dusk",
    accent: "text-orange",
  },
  {
    icon: "crane",
    tone: "teal",
    name: "Construct",
    art: "flow-construct",
    alt: "Building under construction with a tower crane",
    accent: "text-navy",
  },
] as const;

const OUTCOMES = [
  { icon: "gauge", tone: "teal", head: "Faster", sub: "project decisions" },
  { icon: "network", tone: "orange", head: "Reduced", sub: "workflow fragmentation" },
  { icon: "chart", tone: "teal", head: "Build-ready", sub: "project output" },
] as const;

export function Workflow() {
  return (
    <Slide id="workflow">
      <div className="flex flex-col gap-6">
        <header className="flex flex-col gap-2 border-l-2 border-line pl-4 sm:pl-6">
          <Title>
            From <O>Design</O> to <O>Visualize</O> to <O>Construct</O>
          </Title>
          <p className="font-display text-[clamp(0.95rem,2.6vw,1.3rem)] font-semibold text-teal">
            Intelligent Platform for Architecture &amp; Construction
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-navy/65 sm:text-base">
            A connected cloud workflow for planning, 3D design, visualization,
            estimation and construction-ready decisions.
          </p>
        </header>

        <ol className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {STAGES.map((s, i) => (
            <li key={s.name} className="relative flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <IconCircle name={s.icon} tone={s.tone} />
                <span
                  className={`font-display text-lg font-bold sm:text-xl ${s.accent}`}
                >
                  {s.name}
                </span>
                {i < STAGES.length - 1 ? (
                  <Icons.arrowRight className="ml-auto hidden size-5 text-orange sm:block" />
                ) : null}
              </div>
              <Art
                src={s.art}
                alt={s.alt}
                ratio="aspect-[16/10]"
                sizes="(max-width: 640px) 92vw, 31vw"
              />
            </li>
          ))}
        </ol>

        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-full border border-line bg-white/80 px-4 py-2.5 sm:px-6">
          <span className="inline-flex items-center gap-2 font-display text-sm font-semibold text-teal sm:text-base">
            <Icons.cloud className="size-5" />
            One connected workflow
          </span>
          <span className="hidden h-4 w-px bg-line sm:block" />
          <span className="text-xs text-navy/60 sm:text-sm">
            AI <span className="text-orange">•</span> Cloud{" "}
            <span className="text-orange">•</span> Automation{" "}
            <span className="text-orange">•</span> Insights
          </span>
        </div>

        <ul className="grid gap-3 sm:grid-cols-3">
          {OUTCOMES.map((o) => (
            <Card as="li" key={o.head} className="flex items-center gap-3">
              <IconCircle name={o.icon} tone={o.tone} variant="soft" />
              <div>
                <p className="font-display font-bold text-navy-900">{o.head}</p>
                <p className="text-xs text-navy/60 sm:text-sm">{o.sub}</p>
              </div>
            </Card>
          ))}
        </ul>

        <div className="flex items-center justify-center gap-3 rounded-2xl border-2 border-orange/40 bg-orange-50/60 px-4 py-3.5 text-center">
          <IconCircle name="check" tone="orange" size="sm" />
          <p className="font-display text-[clamp(0.95rem,2.6vw,1.3rem)] font-bold text-teal">
            One platform.{" "}
            <span className="text-orange italic">Concept to Design Delivery.</span>
          </p>
        </div>
      </div>
    </Slide>
  );
}
