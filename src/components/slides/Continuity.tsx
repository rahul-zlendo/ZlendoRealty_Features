import { Slide } from "../Deck";
import { Icons } from "../Icon";
import { Art, IconCircle, Kicker, O, SlideHead } from "../ui";

const STAGES = [
  { icon: "doc", tone: "orange", name: "Plan", art: "layer-plan", alt: "Line-drawn architectural elevation" },
  { icon: "cube", tone: "teal", name: "Design", art: "layer-wire", alt: "Translucent 3D wireframe of a house" },
  { icon: "image", tone: "orange", name: "Visualize", art: "layer-render", alt: "Photoreal render of a modern villa" },
  { icon: "doc", tone: "teal", name: "Estimate", art: "layer-boq", alt: "Bill of quantities panel over a building render" },
  { icon: "crane", tone: "orange", name: "Build", art: "layer-build", alt: "Completed house exterior" },
] as const;

export function Continuity() {
  return (
    <Slide id="continuity">
      <div className="flex flex-col gap-7">
        <SlideHead
          title={
            <>
              One Project. <O>One Continuous Intelligence Layer.</O>
            </>
          }
          lead="From concept to construction — without breaking project context."
        />

        <ol className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {STAGES.map((s) => (
            <li key={s.name} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <IconCircle name={s.icon} tone={s.tone} size="sm" />
                <span className="font-display text-sm font-bold text-navy sm:text-base">
                  {s.name}
                </span>
              </div>
              <Art
                src={s.art}
                alt={s.alt}
                ratio="aspect-[4/3]"
                sizes="(max-width: 640px) 46vw, (max-width: 1024px) 31vw, 19vw"
              />
            </li>
          ))}
        </ol>

        {/* the continuous rail + AI core */}
        <div className="relative flex flex-col items-center">
          <div className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-teal-600 via-teal to-teal-600 px-4 py-2 shadow-lg shadow-teal/20">
            <span className="kicker text-[0.6rem] text-white/85 sm:text-[0.7rem]">
              Zlendo Realty
            </span>
          </div>
          <div className="h-6 w-px bg-gradient-to-b from-teal to-orange" />
          <div className="flex flex-col items-center rounded-2xl bg-navy-900 px-6 py-4 text-center shadow-xl shadow-navy/25 ring-4 ring-teal/20">
            <span className="kicker text-[0.55rem] text-orange-400">
              Zlendo Realty
            </span>
            <span className="font-display text-xl font-bold text-white sm:text-2xl">
              AI Core
            </span>
            <span className="text-xs text-white/60">Continuous Intelligence</span>
          </div>
        </div>

        <div className="grid gap-4 text-center sm:grid-cols-2 sm:text-left">
          <Kicker className="!text-[0.58rem] !tracking-[0.24em] sm:text-left">
            Same project · Same context · Greater possibilities
          </Kicker>
          <Kicker className="!text-[0.58rem] !tracking-[0.24em] sm:text-right">
            Connected data · Smarter decisions · Real-world outcomes
          </Kicker>
        </div>

        <div className="flex flex-col items-center gap-1.5 border-t border-line pt-5 text-center">
          <p className="font-display text-[clamp(1.05rem,3vw,1.6rem)] font-bold text-navy-900">
            Design once. <O>Intelligence flows forward.</O>
          </p>
          <p className="text-sm text-navy/60 sm:text-base">
            The project changes. The context doesn&rsquo;t.
          </p>
          <Icons.chevronDown className="mt-1 size-4 text-orange" />
        </div>
      </div>
    </Slide>
  );
}
