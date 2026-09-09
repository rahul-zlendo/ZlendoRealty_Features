"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { SLIDES } from "@/lib/slides";
import { Icons } from "./Icon";
import { cx } from "./ui";

export function Deck({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const [indexOpen, setIndexOpen] = useState(false);
  const sections = useRef<HTMLElement[]>([]);

  useEffect(() => {
    sections.current = SLIDES.map((s) =>
      document.getElementById(s.id),
    ).filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const i = SLIDES.findIndex((s) => s.id === visible.target.id);
        if (i >= 0) setActive(i);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.current.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const goto = useCallback((i: number) => {
    const clamped = Math.max(0, Math.min(SLIDES.length - 1, i));
    document
      .getElementById(SLIDES[clamped].id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIndexOpen(false);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      if (e.key === "Escape") return setIndexOpen(false);
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        goto(active + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goto(active - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        goto(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goto(SLIDES.length - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, goto]);

  useEffect(() => {
    document.body.style.overflow = indexOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [indexOpen]);

  const progress = ((active + 1) / SLIDES.length) * 100;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-[var(--header-h)] border-b border-line/80 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-[1280px] items-center gap-3 px-3 sm:px-5">
          <a
            href="#cover"
            className="flex shrink-0 items-center gap-2"
            aria-label="Zlendo Realty — go to first slide"
          >
            <Image
              src="/logo.png"
              alt="Zlendo Realty"
              width={650}
              height={276}
              className="h-7 w-auto sm:h-8"
              priority
            />
          </a>

          <p className="ml-1 hidden min-w-0 flex-1 truncate text-sm font-medium text-navy/60 md:block">
            <span className="tabular-nums text-navy/40">
              {String(active + 1).padStart(2, "0")}
            </span>
            <span className="mx-2 text-line">/</span>
            {SLIDES[active].label}
          </p>

          <div className="ml-auto flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => goto(active - 1)}
              disabled={active === 0}
              aria-label="Previous slide"
              className="grid size-9 place-items-center rounded-lg border border-line bg-white text-navy transition hover:bg-mist disabled:opacity-35"
            >
              <Icons.chevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => goto(active + 1)}
              disabled={active === SLIDES.length - 1}
              aria-label="Next slide"
              className="grid size-9 place-items-center rounded-lg border border-line bg-white text-navy transition hover:bg-mist disabled:opacity-35"
            >
              <Icons.chevronRight className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => setIndexOpen(true)}
              className="flex h-9 items-center gap-2 rounded-lg bg-navy px-3 text-xs font-semibold text-white transition hover:bg-navy-900"
              aria-haspopup="dialog"
            >
              <Icons.grid className="size-4" />
              <span className="hidden sm:inline">Slides</span>
              <span className="tabular-nums sm:hidden">
                {active + 1}/{SLIDES.length}
              </span>
            </button>
          </div>
        </div>
        <div
          className="hairline h-0.5 origin-left transition-transform duration-500"
          style={{ transform: `scaleX(${progress / 100})` }}
          aria-hidden="true"
        />
      </header>

      {/* dot rail — large screens only */}
      <nav
        aria-label="Slide navigation"
        className="fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 flex-col gap-2 xl:flex"
      >
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => goto(i)}
            aria-label={`Go to ${s.label}`}
            aria-current={i === active}
            className="group flex items-center justify-end gap-2"
          >
            <span className="pointer-events-none rounded-md bg-navy px-2 py-1 text-[11px] font-medium whitespace-nowrap text-white opacity-0 transition group-hover:opacity-100">
              {s.label}
            </span>
            <span
              className={cx(
                "block rounded-full transition-all",
                i === active
                  ? "h-5 w-1.5 bg-orange"
                  : "size-1.5 bg-navy/25 group-hover:bg-navy/50",
              )}
            />
          </button>
        ))}
      </nav>

      <main className="deck">{children}</main>

      {indexOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="All slides"
          className="fixed inset-0 z-[60] flex flex-col bg-navy-900/95 backdrop-blur-sm"
        >
          <div className="flex h-[var(--header-h)] shrink-0 items-center justify-between px-4 sm:px-6">
            <p className="kicker text-[0.65rem] text-white/60">All slides</p>
            <button
              type="button"
              onClick={() => setIndexOpen(false)}
              aria-label="Close slide index"
              className="grid size-9 place-items-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
            >
              <Icons.close className="size-4" />
            </button>
          </div>
          <div className="no-scrollbar grid flex-1 grid-cols-1 gap-2 overflow-y-auto p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => goto(i)}
                className={cx(
                  "rounded-xl border p-4 text-left transition",
                  i === active
                    ? "border-orange bg-white/10"
                    : "border-white/15 hover:border-white/40 hover:bg-white/5",
                )}
              >
                <span className="font-display text-xs font-semibold tabular-nums text-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-base font-semibold text-white">
                  {s.label}
                </p>
                <p className="mt-0.5 text-sm text-white/55">{s.blurb}</p>
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

export function Slide({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className="slide-section">
      <div className={cx("slide-frame", className)}>{children}</div>
    </section>
  );
}
