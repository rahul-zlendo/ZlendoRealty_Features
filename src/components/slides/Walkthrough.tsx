import { Slide } from "../Deck";
import { Icons } from "../Icon";
import { Art, Closer, FootFeature, FootRow, Kicker, O, SlideHead } from "../ui";

export function Walkthrough() {
  return (
    <Slide id="walkthrough">
      <div className="flex flex-col gap-6">
        <SlideHead
          title={
            <>
              Walk Through It. <O>Understand It Before You Build.</O>
            </>
          }
          lead="Real-time 3D walkthrough with daylight and night-light simulation."
        />

        <div>
          <Art
            src="walk-split"
            alt="Split view of the same apartment interior in daylight and at night"
            ratio="aspect-[16/9]"
            sizes="(max-width: 1024px) 94vw, 90vw"
            priority
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="card flex items-center gap-3">
            <Icons.walk className="size-5 shrink-0 text-teal" />
            <p className="text-xs font-medium text-navy/75 sm:text-sm">
              True-to-scale spatial experience
            </p>
          </div>
          <div className="card flex items-center gap-3">
            <Icons.sun className="size-5 shrink-0 text-orange" />
            <p className="text-xs font-medium text-navy/75 sm:text-sm">
              Morning · Noon · Evening sun study
            </p>
          </div>
          <div className="card flex items-center gap-3">
            <Icons.bulb className="size-5 shrink-0 text-teal" />
            <p className="text-xs font-medium text-navy/75 sm:text-sm">
              Add and place lights in real time
            </p>
          </div>
        </div>

        <FootRow>
          <FootFeature icon="walk" tone="orange" label="Walkthrough" />
          <FootFeature icon="sun" tone="teal" label="Sunlight Study" />
          <FootFeature icon="moon" tone="orange" label="Night Lighting" />
          <FootFeature icon="bulb" tone="teal" label="Light Placement" />
        </FootRow>

        <div className="flex flex-col items-center gap-1">
          <Closer>See space, scale and lighting before execution.</Closer>
          <Kicker className="!text-[0.58rem] !tracking-[0.24em]">
            Same project. Better decisions.
          </Kicker>
        </div>
      </div>
    </Slide>
  );
}
