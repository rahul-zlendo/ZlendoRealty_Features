import Image from "next/image";
import { Slide } from "../Deck";
import { WireCityLazy } from "../three/lazy";
import { Icons } from "../Icon";
import { Art, IconCircle, Kicker, T } from "../ui";

const STEPS = [
  { icon: "plan", tone: "teal", label: "Architecture", sub: "Plan smarter" },
  { icon: "cube", tone: "orange", label: "Design", sub: "Create faster" },
  { icon: "image", tone: "teal", label: "Visualization", sub: "See clearer" },
  { icon: "crane", tone: "orange", label: "Construction", sub: "Build better" },
] as const;

export function Cover() {
  return (
    <Slide id="cover">
      <WireCityLazy className="pointer-events-none absolute inset-0 -z-0 hidden opacity-25 lg:block [mask-image:radial-gradient(46%_56%_at_44%_64%,#000_0%,transparent_72%)]" />
      <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="order-2 flex flex-col gap-6 lg:order-1">
          <div>
            <Image
              src="/logo.png"
              alt="Zlendo Realty — Design. Visualize. Realize."
              width={650}
              height={276}
              priority
              className="h-16 w-auto sm:h-20 lg:h-24"
            />
          </div>

          <div>
            <h1 className="u-title text-[clamp(2rem,6.4vw,3.6rem)] text-navy-900 text-balance">
              One Platform —
              <br />
              <T>From Concept to Construction</T>
            </h1>
            <p className="mt-3 font-display text-[clamp(1rem,2.8vw,1.4rem)] font-medium tracking-tight text-navy/70">
              AI-Native Intelligent Platform for AEC
            </p>
          </div>

          <ol className="grid grid-cols-2 gap-x-2 gap-y-5 sm:flex sm:flex-wrap sm:items-start">
            {STEPS.map((s, i) => (
              <li key={s.label} className="flex items-start gap-1 sm:gap-2">
                <div className="flex w-full flex-col items-center gap-2 text-center sm:w-24">
                  <IconCircle
                    name={s.icon}
                    tone={s.tone}
                    variant="soft"
                    size="lg"
                    className="ring-1 ring-line"
                  />
                  <div>
                    <p className="kicker text-[0.6rem] text-navy">{s.label}</p>
                    <p className="mt-0.5 text-[0.62rem] tracking-wide text-navy/50 uppercase">
                      {s.sub}
                    </p>
                  </div>
                </div>
                {i < STEPS.length - 1 ? (
                  <Icons.arrowRight className="mt-5 hidden size-4 text-navy/25 sm:block" />
                ) : null}
              </li>
            ))}
          </ol>

          <Kicker className="!tracking-[0.3em]">
            People <span className="text-line">|</span> Places{" "}
            <span className="text-line">|</span> Possibilities
          </Kicker>
        </div>

        <div className="order-1 flex flex-col gap-4 lg:order-2">
          <Art
            src="hero-building"
            alt="Architectural render of a modern building resolving out of its wireframe model"
            ratio="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]"
            sizes="(max-width: 1024px) 96vw, 46vw"
            priority
            className="!bg-transparent !ring-0"
          />
          <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
            <Kicker className="!text-[0.55rem] !tracking-[0.26em]">
              Smarter spaces
              <br />
              Brighter tomorrow
            </Kicker>
            <Kicker className="!text-[0.55rem] !tracking-[0.26em]">
              Ideas · Design · Technology
              <br />
              People · <span className="text-orange">Real impact</span>
            </Kicker>
            <Kicker className="!text-[0.55rem] !tracking-[0.26em] text-right">
              Built on intelligence
              <br />
              for a better tomorrow
            </Kicker>
          </div>
        </div>
      </div>
    </Slide>
  );
}
