"use client";

import dynamic from "next/dynamic";

/* three.js is only pulled in on the client, and only for the slides that use
   it, so the rest of the deck stays a static, script-light page. */

export const PlanViewerLazy = dynamic(
  () => import("./PlanViewer").then((m) => m.PlanViewer),
  {
    ssr: false,
    loading: () => null,
  },
);

export const WireCityLazy = dynamic(
  () => import("./WireCity").then((m) => m.WireCity),
  { ssr: false, loading: () => null },
);
