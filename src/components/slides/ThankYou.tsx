import Image from "next/image";
import { Slide } from "../Deck";
import { WireCityLazy } from "../three/lazy";
import { Art, IconCircle, Kicker, Script, T } from "../ui";

const THANKS = [
  { icon: "users", tone: "teal", label: "For Your Time" },
  { icon: "bulb", tone: "orange", label: "For Your Interest" },
  { icon: "handshake", tone: "navy", label: "For Your Support" },
  { icon: "rocket", tone: "orange", label: "For Believing in Zlendo Realty" },
] as const;

export function ThankYou() {
  return (
    <Slide id="thank-you">
      <WireCityLazy className="pointer-events-none absolute inset-0 -z-0 hidden opacity-25 lg:block [mask-image:radial-gradient(46%_56%_at_44%_64%,#000_0%,transparent_72%)]" />
      <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
        <div className="order-2 flex flex-col gap-6 lg:order-1">
          <div>
            <Image
              src="/logo.png"
              alt="Zlendo Realty — Design. Visualize. Realize."
              width={650}
              height={276}
              className="h-14 w-auto sm:h-18"
            />
          </div>

          <div>
            <h2 className="u-title text-[clamp(2.4rem,8vw,4.6rem)] text-navy-900">
              Thank <T>You</T>
            </h2>
            <span className="mt-1 block h-1 w-40 rounded-full bg-orange" />
            <p className="mt-4 font-display text-[clamp(0.85rem,2.4vw,1.15rem)] font-semibold tracking-[0.18em] text-navy/70 uppercase">
              Together, let&rsquo;s build
              <br />a smarter tomorrow
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
            {THANKS.map((t) => (
              <li key={t.label} className="flex flex-col items-center gap-2 text-center">
                <IconCircle
                  name={t.icon}
                  tone={t.tone}
                  variant="soft"
                  size="lg"
                  className="ring-1 ring-line"
                />
                <span className="text-xs leading-snug font-medium text-navy/75">
                  {t.label}
                </span>
              </li>
            ))}
          </ul>

          <Kicker className="!text-[0.58rem] !tracking-[0.26em]">
            Built for
            <br />a smarter tomorrow
          </Kicker>
        </div>

        <div className="order-1 flex flex-col gap-4 lg:order-2">
          <Art
            src="thanks-building"
            alt="Modern glass villa with a pool, half render and half wireframe"
            ratio="aspect-[4/3] lg:aspect-[7/8]"
            sizes="(max-width: 1024px) 96vw, 46vw"
            className="!ring-0 !bg-transparent"
          />
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Kicker className="!text-[0.55rem] !tracking-[0.26em]">
              From ideas to
              <br />
              real spaces
            </Kicker>
            <div className="text-right">
              <Script>
                From
                <br />
                Design to Realize
              </Script>
              <p className="mt-2 font-display text-sm font-bold tracking-[0.16em] text-navy uppercase">
                Zlendo Realty
              </p>
              <p className="text-[0.62rem] tracking-[0.14em] text-navy/55 uppercase">
                Design. Visualize. Realize.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
