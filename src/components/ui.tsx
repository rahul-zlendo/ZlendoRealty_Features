import Image from "next/image";
import type { ReactNode } from "react";
import { Icons, type IconName } from "./Icon";

/* ---------------------------------------------------------------- helpers */

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

type Tone = "teal" | "orange" | "navy" | "danger" | "slate";

const toneSolid: Record<Tone, string> = {
  teal: "bg-teal text-white",
  orange: "bg-orange text-white",
  navy: "bg-navy text-white",
  danger: "bg-danger text-white",
  slate: "bg-slate-600 text-white",
};

const toneSoft: Record<Tone, string> = {
  teal: "bg-teal-50 text-teal-600",
  orange: "bg-orange-50 text-orange",
  navy: "bg-navy/10 text-navy",
  danger: "bg-red-50 text-danger",
  slate: "bg-slate-100 text-slate-600",
};

/* ------------------------------------------------------------- typography */

export function Kicker({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cx("kicker text-[0.6rem] sm:text-[0.65rem] text-navy/55", className)}>
      {children}
    </p>
  );
}

/** Slide headline. Pass segments; `accent` renders in orange, `teal` in teal. */
export function Title({
  children,
  className,
  size = "lg",
}: {
  children: ReactNode;
  className?: string;
  size?: "lg" | "md" | "sm";
}) {
  const sizes = {
    lg: "text-[clamp(1.65rem,5.2vw,3.1rem)]",
    md: "text-[clamp(1.45rem,4.4vw,2.5rem)]",
    sm: "text-[clamp(1.3rem,3.8vw,2rem)]",
  };
  return (
    <h2 className={cx("u-title text-navy-900 text-balance", sizes[size], className)}>
      {children}
    </h2>
  );
}

export const O = ({ children }: { children: ReactNode }) => (
  <span className="text-orange">{children}</span>
);

export const T = ({ children }: { children: ReactNode }) => (
  <span className="text-teal">{children}</span>
);

export function Lead({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cx(
        "text-[clamp(0.9rem,2.4vw,1.15rem)] leading-relaxed text-navy/70 text-pretty",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Script({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "font-script text-[clamp(1.1rem,3vw,1.6rem)] leading-tight text-navy",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ atoms */

export function IconBadge({
  name,
  tone = "teal",
  variant = "solid",
  size = "md",
  className,
}: {
  name: IconName;
  tone?: Tone;
  variant?: "solid" | "soft";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const I = Icons[name];
  const box = {
    sm: "size-7 rounded-lg [&>svg]:size-3.5",
    md: "size-10 rounded-xl [&>svg]:size-5",
    lg: "size-14 rounded-2xl [&>svg]:size-7",
  };
  return (
    <span
      className={cx(
        "inline-flex shrink-0 items-center justify-center",
        box[size],
        variant === "solid" ? toneSolid[tone] : toneSoft[tone],
        className,
      )}
    >
      <I />
    </span>
  );
}

export function IconCircle({
  name,
  tone = "teal",
  variant = "solid",
  size = "md",
  className,
}: {
  name: IconName;
  tone?: Tone;
  variant?: "solid" | "soft";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <IconBadge
      name={name}
      tone={tone}
      variant={variant}
      size={size}
      className={cx("!rounded-full", className)}
    />
  );
}

export function Pill({
  children,
  tone = "teal",
  variant = "soft",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  variant?: "solid" | "soft" | "outline";
  className?: string;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold sm:text-sm",
        variant === "outline"
          ? "border border-line bg-white/80 text-navy"
          : variant === "solid"
            ? toneSolid[tone]
            : toneSoft[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Card({
  children,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  return <As className={cx("card p-4 sm:p-5", className)}>{children}</As>;
}

/** Photograph / artwork lifted from the source deck. */
export function Art({
  src,
  alt,
  className,
  ratio = "aspect-[4/3]",
  fit = "cover",
  sizes = "(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw",
  priority,
  position,
}: {
  src: string;
  alt: string;
  className?: string;
  ratio?: string;
  fit?: "cover" | "contain";
  sizes?: string;
  priority?: boolean;
  position?: string;
}) {
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-xl bg-white ring-1 ring-line",
        ratio,
        className,
      )}
    >
      <Image
        src={`/art/${src}.jpg`}
        alt={alt}
        fill
        sizes={sizes}
        preload={priority}
        className={cx(
          fit === "cover" ? "object-cover" : "object-contain p-1.5",
          position,
        )}
      />
    </div>
  );
}

/* --------------------------------------------------------------- sections */

export function SlideHead({
  kicker,
  title,
  lead,
  align = "center",
  className,
  size,
}: {
  kicker?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  className?: string;
  size?: "lg" | "md" | "sm";
}) {
  return (
    <header
      className={cx(
        "flex flex-col gap-2",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {kicker ? <Kicker>{kicker}</Kicker> : null}
      <Title size={size}>{title}</Title>
      {lead ? (
        <Lead className={align === "center" ? "max-w-3xl" : "max-w-2xl"}>{lead}</Lead>
      ) : null}
    </header>
  );
}

/** Small labelled feature at the foot of a slide. */
export function FootFeature({
  icon,
  tone = "teal",
  label,
  sub,
}: {
  icon: IconName;
  tone?: Tone;
  label: ReactNode;
  sub?: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <IconCircle name={icon} tone={tone} />
      <div className="min-w-0">
        <p className="font-display text-sm leading-tight font-semibold text-navy sm:text-[0.95rem]">
          {label}
        </p>
        {sub ? <p className="text-xs text-navy/55">{sub}</p> : null}
      </div>
    </div>
  );
}

export function FootRow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "grid grid-cols-2 gap-x-4 gap-y-3 border-t border-line pt-4 sm:grid-cols-4 sm:gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Closer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cx(
        "text-center font-display text-[clamp(0.95rem,2.6vw,1.25rem)] font-semibold text-navy-900 text-balance",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Step({ n, tone = "teal" }: { n: number | string; tone?: Tone }) {
  return (
    <span
      className={cx(
        "inline-flex size-7 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold",
        toneSolid[tone],
      )}
    >
      {n}
    </span>
  );
}

export function Meter({
  label,
  value,
  color,
  icon,
}: {
  label: string;
  value: number;
  color: string;
  icon?: IconName;
}) {
  const I = icon ? Icons[icon] : null;
  return (
    <div className="flex items-center gap-2.5">
      {I ? <I className="size-4 shrink-0" style={{ color }} /> : null}
      <span className="w-14 shrink-0 text-xs font-medium text-navy/70">{label}</span>
      <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
        <span
          className="block h-full rounded-full"
          style={{ width: `${value}%`, background: color }}
        />
      </span>
      <span className="w-9 shrink-0 text-right text-xs font-semibold tabular-nums text-navy">
        {value}%
      </span>
    </div>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <Icons.arrowRight
      className={cx("size-5 shrink-0 text-orange", className)}
    />
  );
}
