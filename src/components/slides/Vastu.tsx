import { Slide } from "../Deck";
import { Icons } from "../Icon";
import { Art, Card, FootFeature, Meter, O, Script, Title } from "../ui";

const NAV = [
  { icon: "plan", label: "Floor Plan" },
  { icon: "cube", label: "3D View" },
  { icon: "compass", label: "Vastu", active: true },
  { icon: "leaf", label: "5 Elements" },
  { icon: "doc", label: "Suggestions" },
] as const;

const ROOMS = [
  { icon: "door", room: "Main Entrance", status: "Good" },
  { icon: "sofa", room: "Living Room", status: "Good" },
  { icon: "flame", room: "Kitchen", status: "Needs Attention" },
  { icon: "home", room: "Master Bedroom", status: "Good" },
  { icon: "home", room: "Children's Bedroom", status: "Good" },
  { icon: "droplet", room: "Bathroom", status: "Not Recommended" },
  { icon: "compass", room: "Pooja Room", status: "Good" },
] as const;

const ELEMENTS = [
  { label: "Earth", value: 80, color: "#12a05c", icon: "leaf" },
  { label: "Water", value: 70, color: "#2f83e0", icon: "droplet" },
  { label: "Fire", value: 65, color: "#e03a2f", icon: "flame" },
  { label: "Air", value: 90, color: "#8aa8c4", icon: "wind" },
  { label: "Space", value: 75, color: "#f0b400", icon: "space" },
] as const;

const REMEDIES = [
  { art: "vastu-r1", text: "Place a Tulsi plant in the North-East", tag: "Improves Health", tone: "teal" },
  { art: "vastu-r2", text: "Use warm lighting in the South-East", tag: "Enhances Prosperity", tone: "orange" },
  { art: "vastu-r3", text: "Avoid mirrors in the bedroom", tag: "Improves Harmony", tone: "danger" },
] as const;

const statusStyle: Record<string, string> = {
  Good: "text-teal",
  "Needs Attention": "text-orange",
  "Not Recommended": "text-danger",
};

const tagStyle: Record<string, string> = {
  teal: "bg-teal-50 text-teal-600",
  orange: "bg-orange-50 text-orange",
  danger: "bg-red-50 text-danger",
};

export function Vastu() {
  return (
    <Slide id="vastu">
      <div className="flex flex-col gap-6">
        <header className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left">
            <Title>
              AI Powered <O>Vastu</O>
            </Title>
            <p className="mt-1 font-display text-[clamp(0.95rem,2.4vw,1.25rem)] font-medium text-navy/65">
              Harmonize Your Space. Enhance Your Life.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-5">
            <p className="border-l-2 border-orange pl-3 text-[0.62rem] font-semibold tracking-[0.18em] text-navy/70 uppercase">
              Traditional wisdom
              <br />
              Modern technology
            </p>
            <Script className="hidden sm:block">
              Homes
              <br />
              that Feel Right.
            </Script>
          </div>
        </header>

        <div className="grid gap-4 lg:grid-cols-[auto_1.1fr_1fr_1.2fr] lg:gap-4">
          <nav className="card self-start !p-2 lg:w-36">
            <ul className="flex flex-row flex-wrap gap-1 lg:flex-col">
              {NAV.map((n) => {
                const I = Icons[n.icon];
                return (
                  <li key={n.label}>
                    <span
                      className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium ${
                        "active" in n && n.active
                          ? "bg-teal text-white"
                          : "text-navy/75"
                      }`}
                    >
                      <I className="size-4 shrink-0" />
                      {n.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Art
            src="vastu-plan"
            alt="Furnished floor plan oriented on a compass rose with north, south, east and west markers"
            ratio="aspect-[3/4]"
            fit="contain"
            sizes="(max-width: 1024px) 92vw, 24vw"
            className="bg-white"
          />

          <div className="flex flex-col gap-4">
            <Card className="flex flex-col items-center gap-2 text-center">
              <p className="self-start font-display text-sm font-bold text-navy-900">
                Vastu Score
              </p>
              <div className="relative grid size-28 place-items-center">
                <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="var(--color-line)"
                    strokeWidth="9"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#12a05c"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 42 * 0.86} ${2 * Math.PI * 42}`}
                  />
                </svg>
                <span className="text-center">
                  <span className="block font-display text-3xl font-bold text-navy-900">
                    86
                  </span>
                  <span className="block text-[0.65rem] text-navy/50">/ 100</span>
                </span>
              </div>
              <p className="font-display font-bold text-[#12a05c]">Good Vastu</p>
              <p className="text-xs text-navy/55">
                A balanced and positive living space.
              </p>
            </Card>

            <Card>
              <p className="pb-2.5 font-display text-sm font-bold text-navy-900">
                Five Element Balance
              </p>
              <ul className="flex flex-col gap-2">
                {ELEMENTS.map((e) => (
                  <li key={e.label}>
                    <Meter
                      label={e.label}
                      value={e.value}
                      color={e.color}
                      icon={e.icon}
                    />
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="flex flex-col gap-4">
            <Card>
              <p className="pb-2 font-display text-sm font-bold text-navy-900">
                Room-wise Vastu Analysis
              </p>
              <ul className="divide-y divide-line">
                {ROOMS.map((r) => {
                  const I = Icons[r.icon];
                  return (
                    <li key={r.room} className="flex items-center gap-2.5 py-2">
                      <I className="size-4 shrink-0 text-navy/45" />
                      <span className="min-w-0 flex-1 truncate text-xs font-medium text-navy/80">
                        {r.room}
                      </span>
                      <span
                        className={`flex shrink-0 items-center gap-1 text-xs font-semibold ${statusStyle[r.status]}`}
                      >
                        {r.status === "Good" ? (
                          <Icons.check className="size-4" />
                        ) : (
                          <Icons.alert className="size-4" />
                        )}
                        {r.status}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </Card>

            <Card>
              <div className="flex items-center justify-between pb-2">
                <p className="font-display text-sm font-bold text-navy-900">
                  Remedy Actions
                </p>
                <span className="text-[0.68rem] font-semibold text-teal">View All</span>
              </div>
              <ul className="grid grid-cols-3 gap-2">
                {REMEDIES.map((r) => (
                  <li key={r.text} className="flex flex-col gap-1.5">
                    <Art
                      src={r.art}
                      alt={r.text}
                      ratio="aspect-[4/3]"
                      className="!ring-0"
                      sizes="(max-width: 640px) 30vw, 12vw"
                    />
                    <p className="text-[0.62rem] leading-snug text-navy/70">
                      {r.text}
                    </p>
                    <span
                      className={`rounded px-1.5 py-0.5 text-center text-[0.55rem] font-semibold ${tagStyle[r.tone]}`}
                    >
                      {r.tag}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        <div className="grid gap-4 border-t border-line pt-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-5">
            <li>
              <FootFeature icon="target" tone="teal" label="AI-Powered Analysis" />
            </li>
            <li>
              <FootFeature icon="leaf" tone="teal" label="Traditional Vastu Principles" />
            </li>
            <li>
              <FootFeature icon="yinyang" tone="navy" label="Five Element Balance" />
            </li>
            <li>
              <FootFeature icon="bulb" tone="orange" label="Personalized Remedies" />
            </li>
            <li>
              <FootFeature icon="home" tone="teal" label="Healthier Homes, Happier Lives" />
            </li>
          </ul>
          <Script className="text-center lg:text-right">
            Design with Purpose.
            <br />
            Live with Positivity.
          </Script>
        </div>
      </div>
    </Slide>
  );
}
