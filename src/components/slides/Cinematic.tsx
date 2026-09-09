import { Slide } from "../Deck";
import { Icons } from "../Icon";
import { Art, Closer, Title } from "../ui";

const SCENES = [
  { art: "cine-1", label: "Entry", alt: "Corridor leading into a lit apartment, with the camera path marked" },
  { art: "cine-2", label: "Living", alt: "Living room in daylight with a city view" },
  { art: "cine-3", label: "Dining", alt: "Dining room at sunset with pendant lighting" },
  { art: "cine-4", label: "Bedroom", alt: "Bedroom at night with city lights beyond" },
] as const;

const CONTROLS = [
  { icon: "network", tone: "text-teal", label: "Camera Path" },
  { icon: "sun", tone: "text-orange", label: "Daylight → Evening → Night" },
  { icon: "bulb", tone: "text-orange", label: "Add Lights" },
  { icon: "play", tone: "text-teal", label: "Smooth Walkthrough" },
] as const;

export function Cinematic() {
  return (
    <Slide id="cinematic">
      <div className="flex flex-col gap-6">
        <header className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left">
            <Title>
              <span className="text-orange">Cinematic Video.</span>
              <br />
              Render in Minutes.
            </Title>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy/65 sm:text-base">
              Create walkthrough-ready 4K visuals with cinematic camera motion,
              daylight and lighting control.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-5">
            <div className="flex flex-col items-center gap-1">
              <Icons.video className="size-7 text-navy" />
              <span className="font-display text-sm font-bold text-navy">
                4K Video
              </span>
            </div>
            <span className="h-9 w-px bg-line" />
            <div className="flex flex-col items-center gap-1">
              <Icons.gauge className="size-7 text-navy" />
              <span className="font-display text-sm font-bold text-navy">
                Render in Minutes
              </span>
            </div>
          </div>
        </header>

        <ul className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
          {SCENES.map((s) => (
            <li key={s.label}>
              <Art
                src={s.art}
                alt={s.alt}
                ratio="aspect-[3/4]"
                sizes="(max-width: 640px) 46vw, 23vw"
              />
            </li>
          ))}
        </ul>

        {/* player bar */}
        <div className="flex items-center gap-3 rounded-2xl bg-navy-900 px-4 py-3 text-white">
          <Icons.play className="size-7 shrink-0" />
          <span className="relative h-1 flex-1 rounded-full bg-white/20">
            <span className="block h-full w-1/3 rounded-full bg-orange" />
          </span>
          <span className="shrink-0 font-mono text-xs tabular-nums text-white/70">
            00:00 / 00:28
          </span>
          <Icons.expand className="size-5 shrink-0 text-white/70" />
        </div>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4">
          {CONTROLS.map((c) => {
            const I = Icons[c.icon];
            return (
              <li key={c.label} className="flex items-center gap-2">
                <I className={`size-5 shrink-0 ${c.tone}`} />
                <span className="text-xs font-medium text-navy/75 sm:text-sm">
                  {c.label}
                </span>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-center gap-3">
          <span className="h-0.5 w-8 rounded-full bg-orange" />
          <Closer className="!text-navy/70">
            Show space, mood and movement before execution.
          </Closer>
          <span className="h-0.5 w-8 rounded-full bg-orange" />
        </div>
      </div>
    </Slide>
  );
}
