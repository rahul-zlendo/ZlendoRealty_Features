# Zlendo Realty — Features Deck

A responsive web recreation of `Zlendo_Realty_Features.pptx` (17 slides). Every
slide is rebuilt as real HTML/CSS — live, selectable, SEO-indexable text with
icons drawn as inline SVG — so it reflows properly on phone, tablet and laptop
instead of being a flat 16:9 image.

## Stack

- **Next.js 16** (App Router, React 19) — statically prerendered, no server needed
- **Tailwind CSS v4** for the design system
- **next/font** for Poppins (headings), Inter (body) and Caveat (handwritten accents)
- **next/image** for the artwork lifted from the source deck

## Run locally

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000.

## Deploy to Vercel

The project is a stock Next.js app — Vercel needs no extra configuration.

Either push this folder to a Git repo and import it at
[vercel.com/new](https://vercel.com/new), or deploy straight from the CLI:

```bash
npx vercel --cwd zlendo-realty
```

Vercel auto-detects the Next.js framework, runs `next build`, and serves the
prerendered page from its CDN with image optimisation enabled.

## Project layout

```
src/
  app/
    layout.tsx        fonts + metadata
    globals.css       design tokens, deck layout, font utilities
    page.tsx          slide order
  components/
    Deck.tsx          fixed header, prev/next, slide index, dot rail, Slide shell
    Icon.tsx          inline SVG icon set (no icon dependency)
    ui.tsx            shared primitives: Title, Lead, Card, Pill, Art, Meter…
    slides/           one component per slide
  lib/slides.ts       slide ids, nav labels and blurbs
public/
  logo.png            Zlendo Realty logo
  art/                photography and technical artwork extracted from the PPTX
```

## Design system

Brand values are sampled from the source deck and declared once in
`src/app/globals.css`:

| Token           | Value     | Used for                          |
| --------------- | --------- | --------------------------------- |
| `--color-navy`  | `#0a2a4e` | headings, body copy               |
| `--color-teal`  | `#0d8880` | primary brand accent              |
| `--color-orange`| `#f04e11` | secondary accent, emphasis        |
| `--color-danger`| `#e0342a` | problem/warning states            |
| `--color-line`  | `#dfe8f0` | hairlines, card borders           |

## Responsive behaviour

- **≥1024px** — multi-column slide layouts matching the original composition,
  with vertical scroll-snap between slides and a hover dot rail.
- **640–1024px** — columns collapse to two; scroll-snap is off so tall slides
  scroll naturally.
- **<640px** — everything stacks in a single column; the header collapses to a
  slide counter.

## Navigation

- Scroll, or use the header's prev/next buttons
- **← / →**, **PageUp / PageDown**, **Home / End** on a keyboard
- **Slides** opens a full index; each card jumps to that slide
- Every slide has a stable URL fragment (e.g. `/#spatial-ai`), and the Features
  slide links through to the detailed slides

## Editing content

All copy lives in the slide components under `src/components/slides/`. Most
slides keep their content in a plain array at the top of the file, so text
changes rarely need JSX edits.

Artwork in `public/art/` was cropped from the original slide renders. Replacing
a file with a same-named image is enough to swap it; the `<Art>` component
handles sizing, `object-fit` and responsive `sizes`.
