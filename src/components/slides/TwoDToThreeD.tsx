import { Slide } from "../Deck";
import { Icons } from "../Icon";
import { PlanViewerLazy } from "../three/lazy";
import { Art, Closer, FootFeature, FootRow, Kicker, O, Pill, SlideHead } from "../ui";

const TOOLS = [
  { icon: "cursor", label: "Select" },
  { icon: "wall", label: "Wall" },
  { icon: "door", label: "Door" },
  { icon: "window", label: "Window" },
  { icon: "ruler", label: "Dimension" },
  { icon: "text", label: "Text" },
] as const;

export function TwoDToThreeD() {
  return (
    <Slide id="2d-to-3d">
      <div className="flex flex-col gap-6">
        <SlideHead
          title={
            <>
              Draw in 2D. <O>See It in 3D — Instantly.</O>
            </>
          }
          lead="Every design change becomes immediately visible in 3D."
        />

        <p className="-mt-3 text-center text-xs text-navy/45">
          The model on the right is live — drag it to orbit the plan.
        </p>

        <div className="grid gap-4 lg:grid-cols-[auto_1fr_auto_1fr] lg:items-center lg:gap-4">
          <ul className="card flex flex-row flex-wrap gap-1 p-2 lg:w-32 lg:flex-col">
            {TOOLS.map((t) => {
              const I = Icons[t.icon];
              return (
                <li
                  key={t.label}
                  className="flex items-center gap-2 rounded-lg px-2 py-1.5"
                >
                  <I className="size-4 shrink-0 text-navy" />
                  <span className="text-[0.7rem] font-medium text-navy/75">
                    {t.label}
                  </span>
                </li>
              );
            })}
          </ul>

          <Art
            src="d23-plan"
            alt="Dimensioned 2D floor plan being edited"
            ratio="aspect-[4/3]"
            fit="contain"
            sizes="(max-width: 1024px) 92vw, 34vw"
            className="bg-white"
          />

          <div className="flex flex-row items-center justify-center gap-2 lg:flex-col">
            <Pill tone="teal" variant="solid">
              Draw
            </Pill>
            <Icons.arrowRight className="size-4 rotate-90 text-orange lg:rotate-0" />
            <Pill tone="orange" variant="solid">
              Visualize
            </Pill>
            <Icons.arrowRight className="size-4 rotate-90 text-teal lg:rotate-0" />
            <Pill tone="navy" variant="solid">
              Refine
            </Pill>
          </div>

          <PlanViewerLazy />
        </div>

        <FootRow className="sm:grid-cols-3">
          <FootFeature icon="cube" tone="orange" label="Live 2D/3D" />
          <FootFeature icon="layers" tone="teal" label="Same Geometry" />
          <FootFeature icon="refresh" tone="orange" label="Continuous Workflow" />
        </FootRow>

        <Closer className="!font-medium !text-navy/70">
          No redraw. No separate modeling stage. Same project, same geometry.
        </Closer>

        <Kicker className="text-center !text-[0.55rem] !tracking-[0.26em]">
          People · Projects · A brighter tomorrow
        </Kicker>
      </div>
    </Slide>
  );
}
