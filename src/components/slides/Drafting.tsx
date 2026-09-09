import { Slide } from "../Deck";
import { Icons } from "../Icon";
import { Art, Closer, FootFeature, FootRow, Kicker, O, SlideHead } from "../ui";

const TOOLS = [
  { icon: "cursor", label: "Select", key: "V" },
  { icon: "wall", label: "Wall", key: "W" },
  { icon: "door", label: "Door", key: "D" },
  { icon: "window", label: "Window", key: "N" },
  { icon: "ruler", label: "Dimension", key: "D" },
  { icon: "text", label: "Text", key: "T" },
] as const;

const SUGGESTIONS = [
  "Optimize room arrangement",
  "Improve circulation flow",
  "Align walls for better efficiency",
  "Auto-detect spaces & suggest furniture",
];

export function Drafting() {
  return (
    <Slide id="drafting">
      <div className="flex flex-col gap-6">
        <SlideHead
          title={
            <>
              Draft Faster. <O>Design Smarter.</O>
            </>
          }
          lead="Professional floor planning with familiar CAD-style control — enhanced by AI."
        />

        <div className="grid gap-4 lg:grid-cols-[auto_1.6fr_1fr] lg:gap-5">
          {/* tool palette */}
          <ul className="card flex flex-row flex-wrap gap-1 p-2 lg:w-40 lg:flex-col lg:gap-0.5">
            {TOOLS.map((t) => {
              const I = Icons[t.icon];
              return (
                <li
                  key={t.label}
                  className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 transition hover:bg-mist"
                >
                  <I className="size-4 shrink-0 text-navy" />
                  <span className="text-xs font-medium text-navy/80">{t.label}</span>
                  <kbd className="ml-auto hidden rounded border border-line px-1 text-[0.6rem] text-navy/40 lg:block">
                    {t.key}
                  </kbd>
                </li>
              );
            })}
          </ul>

          <Art
            src="draft-plan"
            alt="Dimensioned 2D floor plan of a two-bedroom home with living, dining, kitchen and bath"
            ratio="aspect-[4/3]"
            fit="contain"
            sizes="(max-width: 1024px) 92vw, 46vw"
            className="bg-white"
          />

          {/* AI layout assist */}
          <div className="card flex flex-col gap-3 p-4">
            <div className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-teal font-display text-xs font-bold text-white">
                AI
              </span>
              <div>
                <p className="font-display font-bold text-navy-900">
                  AI Layout Assist
                </p>
                <p className="text-xs text-navy/55">Suggestions for a better plan.</p>
              </div>
            </div>
            <ul className="flex flex-col gap-2">
              {SUGGESTIONS.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 rounded-lg border border-line bg-white/70 p-2"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-md bg-mist">
                    <Icons.plan className="size-4 text-navy/50" />
                  </span>
                  <span className="text-xs leading-snug font-medium text-navy/80">
                    {s}
                  </span>
                  <Icons.chevronRight className="ml-auto size-3.5 shrink-0 text-navy/30" />
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-auto flex items-center justify-center gap-2 rounded-full bg-teal-600 px-4 py-2.5 font-display text-sm font-semibold text-white transition hover:bg-teal"
            >
              <Icons.sparkle className="size-4" />
              Apply Suggestion
              <Icons.arrowRight className="size-4" />
            </button>
          </div>
        </div>

        <FootRow>
          <FootFeature icon="compass" tone="orange" label="CAD-Style Drafting" />
          <FootFeature icon="grid" tone="teal" label="Smart Snapping" />
          <FootFeature icon="chip" tone="orange" label="Shortcut Controls" />
          <FootFeature icon="sparkle" tone="teal" label="AI Layout Assist" />
        </FootRow>

        <Closer>
          Professional control when you need it.{" "}
          <O>AI acceleration when you want it.</O>
        </Closer>

        <Kicker className="text-center !text-[0.55rem] !tracking-[0.26em]">
          People · Projects · A brighter tomorrow
        </Kicker>
      </div>
    </Slide>
  );
}
