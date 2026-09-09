import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const make = (path: React.ReactNode) =>
  function I(props: P) {
    return (
      <svg {...base} aria-hidden="true" {...props}>
        {path}
      </svg>
    );
  };

export const Icons = {
  plan: make(
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 10h7V3M14 21v-6h7M10 10v11" />
    </>,
  ),
  cube: make(
    <>
      <path d="M12 2.6 21 7.3v9.4L12 21.4 3 16.7V7.3z" />
      <path d="M3 7.3 12 12l9-4.7M12 12v9.4" />
    </>,
  ),
  image: make(
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.6" />
      <path d="m4 17 5-4.5 4 3.2 3-2.4 4 3.7" />
    </>,
  ),
  crane: make(
    <>
      <path d="M4 21h16M6 21V8M6 8h13M19 8v4M6 8 3 5h9" />
      <path d="M12 12h4" />
    </>,
  ),
  doc: make(
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>,
  ),
  camera: make(
    <>
      <path d="M3 8.5A2 2 0 0 1 5 6.5h2l1.4-2h7.2L17 6.5h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <circle cx="12" cy="13" r="3.4" />
    </>,
  ),
  sparkle: make(
    <>
      <path d="M12 3.2 13.8 9 19.6 10.8 13.8 12.6 12 18.4 10.2 12.6 4.4 10.8 10.2 9z" />
      <path d="M18.6 16.2 19.4 18.4 21.6 19.2 19.4 20 18.6 22.2 17.8 20 15.6 19.2 17.8 18.4z" />
    </>,
  ),
  check: make(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.2 12.4 2.6 2.6 5-5.4" />
    </>,
  ),
  alert: make(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.6v5M12 16.2h.01" />
    </>,
  ),
  warn: make(
    <>
      <path d="M10.6 3.9 2.6 17.8A1.6 1.6 0 0 0 4 20.2h16a1.6 1.6 0 0 0 1.4-2.4L13.4 3.9a1.6 1.6 0 0 0-2.8 0Z" />
      <path d="M12 9.4v4M12 17h.01" />
    </>,
  ),
  clock: make(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.4l3.4 2" />
    </>,
  ),
  users: make(
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.8 20a6.2 6.2 0 0 1 12.4 0" />
      <path d="M16.4 5.4a3.2 3.2 0 0 1 0 5.6M17.6 14.4A6.2 6.2 0 0 1 21.2 20" />
    </>,
  ),
  gear: make(
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.6a1.7 1.7 0 0 1 1.7 1.7v.5a1.4 1.4 0 0 0 2.3 1l.4-.4a1.7 1.7 0 1 1 2.4 2.4l-.4.4a1.4 1.4 0 0 0 1 2.3h.5a1.7 1.7 0 1 1 0 3.4h-.5a1.4 1.4 0 0 0-1 2.3l.4.4a1.7 1.7 0 1 1-2.4 2.4l-.4-.4a1.4 1.4 0 0 0-2.3 1v.5a1.7 1.7 0 1 1-3.4 0v-.5a1.4 1.4 0 0 0-2.3-1l-.4.4a1.7 1.7 0 1 1-2.4-2.4l.4-.4a1.4 1.4 0 0 0-1-2.3h-.5a1.7 1.7 0 1 1 0-3.4h.5a1.4 1.4 0 0 0 1-2.3l-.4-.4a1.7 1.7 0 1 1 2.4-2.4l.4.4a1.4 1.4 0 0 0 2.3-1v-.5A1.7 1.7 0 0 1 12 2.6Z" />
    </>,
  ),
  chart: make(<path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />),
  trendDown: make(
    <>
      <path d="M3 6v12h18" />
      <path d="m7 9 4 4 3-2.4 4.6 4.4M18.6 15h-3.4M18.6 15v-3.4" />
    </>,
  ),
  coins: make(
    <>
      <ellipse cx="12" cy="6.2" rx="7.4" ry="3.2" />
      <path d="M4.6 6.2v5c0 1.8 3.3 3.2 7.4 3.2s7.4-1.4 7.4-3.2v-5" />
      <path d="M4.6 11.2v5c0 1.8 3.3 3.2 7.4 3.2s7.4-1.4 7.4-3.2v-5" />
    </>,
  ),
  bulb: make(
    <>
      <path d="M9.4 17.6a6 6 0 1 1 5.2 0" />
      <path d="M9.6 20.4h4.8M10.4 17.6h3.2" />
    </>,
  ),
  handshake: make(
    <>
      <path d="M8 12.4 5.6 10a2 2 0 0 1 0-2.8l1.6-1.6a2 2 0 0 1 2.8 0L12 8l2-2.4a2 2 0 0 1 2.8 0l1.6 1.6a2 2 0 0 1 0 2.8L16 12.4" />
      <path d="m9.6 14 1.6 1.6M12.4 12.8 15 15.4M7.4 15.2 9 16.8" />
    </>,
  ),
  rocket: make(
    <>
      <path d="M12 2.8c3.4 2.2 5.2 5.6 5.2 9.4l-2.6 3.4H9.4l-2.6-3.4C6.8 8.4 8.6 5 12 2.8Z" />
      <circle cx="12" cy="10" r="1.8" />
      <path d="M9.4 15.6 7.2 21l4-2 4 2-2.2-5.4" />
    </>,
  ),
  home: make(
    <>
      <path d="m3.6 10.4 8.4-6.6 8.4 6.6" />
      <path d="M5.8 9v10.4h12.4V9" />
      <path d="M10 19.4v-5.2h4v5.2" />
    </>,
  ),
  building: make(
    <>
      <rect x="4.4" y="3" width="15.2" height="18" rx="1.6" />
      <path d="M9 7.4h1.6M13.4 7.4H15M9 11.4h1.6M13.4 11.4H15M9 15.4h1.6M13.4 15.4H15" />
    </>,
  ),
  villa: make(
    <>
      <path d="M2.6 11 12 4l9.4 7" />
      <path d="M5 10v10h14V10M9.6 20v-5h4.8v5" />
      <path d="M2.6 20h18.8" />
    </>,
  ),
  bank: make(
    <>
      <path d="M3 9.6 12 4.4l9 5.2" />
      <path d="M5.4 10.6v7.6M9.8 10.6v7.6M14.2 10.6v7.6M18.6 10.6v7.6M3 20.4h18" />
    </>,
  ),
  sun: make(
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4 7 7M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" />
    </>,
  ),
  moon: make(<path d="M20 13.6A8.4 8.4 0 0 1 10.4 4a8.4 8.4 0 1 0 9.6 9.6Z" />),
  walk: make(
    <>
      <circle cx="13" cy="4.4" r="1.8" />
      <path d="m9 21 2.4-5.4-1.8-3 .8-4.4 3.2 1.6 1.4 2.8 2.6 1" />
      <path d="m11.4 15.6 2.8 2.2.8 3.2M9.6 8.2 6.8 9.6l-.8 3" />
    </>,
  ),
  video: make(
    <>
      <rect x="2.6" y="6" width="13" height="12" rx="2" />
      <path d="m15.6 10.4 5.8-3.2v9.6l-5.8-3.2z" />
    </>,
  ),
  play: make(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.6 16 12l-6 3.4z" />
    </>,
  ),
  sofa: make(
    <>
      <path d="M4.4 11V8.4a2 2 0 0 1 2-2h11.2a2 2 0 0 1 2 2V11" />
      <path d="M3 12.6a2 2 0 0 1 4 0V15h10v-2.4a2 2 0 0 1 4 0V18H3z" />
      <path d="M6 18v1.8M18 18v1.8" />
    </>,
  ),
  layers: make(
    <>
      <path d="m12 3.4 8.6 4.2L12 11.8 3.4 7.6z" />
      <path d="m3.4 12 8.6 4.2 8.6-4.2M3.4 16.2 12 20.4l8.6-4.2" />
    </>,
  ),
  api: make(<path d="m9 8.4-4 3.6 4 3.6M15 8.4l4 3.6-4 3.6M13.4 5.4l-2.8 13.2" />),
  compass: make(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.2 8.8-2 4.4-4.4 2 2-4.4z" />
    </>,
  ),
  leaf: make(
    <>
      <path d="M20 4c0 9.4-4.6 14-11.4 14H5.4C5.4 9.6 10.6 4.6 20 4Z" />
      <path d="M4 20c1.6-4.4 4.6-7.4 8.6-9.4" />
    </>,
  ),
  droplet: make(<path d="M12 3.2c3.4 4 5.6 6.8 5.6 9.6a5.6 5.6 0 1 1-11.2 0c0-2.8 2.2-5.6 5.6-9.6Z" />),
  flame: make(
    <>
      <path d="M12 3s5.4 4 5.4 8.8A5.4 5.4 0 0 1 12 21a5.4 5.4 0 0 1-5.4-5.4C6.6 12 9.4 11 12 3Z" />
      <path d="M12 21a2.6 2.6 0 0 1-2.6-3c0-1.4 1.2-2.2 2.6-4.4 1.4 2.2 2.6 3 2.6 4.4A2.6 2.6 0 0 1 12 21Z" />
    </>,
  ),
  wind: make(<path d="M3 8.4h9.6a2.8 2.8 0 1 0-2.8-2.8M3 12.4h13.2a2.8 2.8 0 1 1-2.8 2.8M3 16.4h7" />),
  space: make(
    <>
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="8.6" strokeDasharray="2.4 3" />
    </>,
  ),
  wall: make(
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.4" />
      <path d="M3 9.6h18M3 14.4h18M9 5v4.6M15 9.6v4.8M9 14.4V19" />
    </>,
  ),
  door: make(
    <>
      <path d="M6 21V4.4a1.4 1.4 0 0 1 1.6-1.4l8 1.2a1.4 1.4 0 0 1 1.2 1.4V21" />
      <path d="M4 21h16M13.6 12.4h.01" />
    </>,
  ),
  window: make(
    <>
      <rect x="3.4" y="4" width="17.2" height="16" rx="1.6" />
      <path d="M12 4v16M3.4 12h17.2" />
    </>,
  ),
  ruler: make(<path d="M3 9.4h18v5.2H3zM7.2 9.4v2.6M11.4 9.4v3.6M15.6 9.4v2.6" />),
  cursor: make(<path d="m5.4 3.4 13.2 7.8-5.8 1.4-2 6z" />),
  text: make(<path d="M5 6V4.4h14V6M12 4.4V19.6M9 19.6h6" />),
  cloud: make(<path d="M7 18.4h10.4a3.6 3.6 0 0 0 .4-7.2A5.6 5.6 0 0 0 7 10.4a4 4 0 0 0 0 8Z" />),
  bolt: make(<path d="M13.4 2.6 5 13.4h5.6L10 21.4 19 10.6h-5.6z" />),
  wrench: make(
    <path d="M20 6.2a4.8 4.8 0 0 1-6.4 6.2L6 20l-2-2 7.6-7.6A4.8 4.8 0 0 1 17.8 4l-2.8 2.8 1.2 2.4 2.4 1.2z" />,
  ),
  target: make(
    <>
      <circle cx="12" cy="12" r="8.6" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="12" cy="12" r="1" />
    </>,
  ),
  yinyang: make(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 1 0 9" />
    </>,
  ),
  grid: make(
    <>
      <rect x="3.4" y="3.4" width="7" height="7" rx="1.4" />
      <rect x="13.6" y="3.4" width="7" height="7" rx="1.4" />
      <rect x="3.4" y="13.6" width="7" height="7" rx="1.4" />
      <rect x="13.6" y="13.6" width="7" height="7" rx="1.4" />
    </>,
  ),
  arrowRight: make(<path d="M4 12h15m-5.6-5.6L19 12l-5.6 5.6" />),
  chevronRight: make(<path d="m9.4 5.6 6.4 6.4-6.4 6.4" />),
  chevronLeft: make(<path d="M14.6 5.6 8.2 12l6.4 6.4" />),
  chevronDown: make(<path d="m5.6 9.4 6.4 6.4 6.4-6.4" />),
  close: make(<path d="m6 6 12 12M18 6 6 18" />),
  menu: make(<path d="M4 7h16M4 12h16M4 17h16" />),
  mobile: make(
    <>
      <rect x="7" y="2.6" width="10" height="18.8" rx="2" />
      <path d="M11 18.4h2" />
    </>,
  ),
  browser: make(
    <>
      <rect x="3" y="4.4" width="18" height="15.2" rx="2" />
      <path d="M3 9h18M6.4 6.7h.01M9 6.7h.01" />
    </>,
  ),
  vr: make(
    <>
      <rect x="2.6" y="7.6" width="18.8" height="9" rx="3" />
      <path d="M10 16.6c.8-2 3.2-2 4 0" />
    </>,
  ),
  file: make(
    <>
      <path d="M13.4 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.6z" />
      <path d="M13.4 3v5.6H19" />
    </>,
  ),
  scale: make(
    <>
      <path d="M12 4v16M6 20h12M5 8h14l-3.4 5.6a3.2 3.2 0 0 1-7.2 0z" />
      <path d="M12 4 5 8M12 4l7 4" />
    </>,
  ),
  pin: make(
    <>
      <path d="M12 21s6.4-6 6.4-10.4a6.4 6.4 0 1 0-12.8 0C5.6 15 12 21 12 21Z" />
      <circle cx="12" cy="10.4" r="2.4" />
    </>,
  ),
  palette: make(
    <>
      <path d="M12 3a9 9 0 0 0 0 18c1.2 0 1.8-.8 1.8-1.7 0-1.4-1-1.8-1-2.9 0-.9.7-1.6 1.7-1.6h1.6A4.9 4.9 0 0 0 21 10 7.6 7.6 0 0 0 12 3Z" />
      <circle cx="8" cy="10" r="1" />
      <circle cx="12" cy="7.6" r="1" />
      <circle cx="16" cy="10" r="1" />
    </>,
  ),
  chip: make(
    <>
      <rect x="6.6" y="6.6" width="10.8" height="10.8" rx="2" />
      <path d="M10 3v3.6M14 3v3.6M10 17.4V21M14 17.4V21M3 10h3.6M3 14h3.6M17.4 10H21M17.4 14H21" />
    </>,
  ),
  edit: make(
    <>
      <path d="M16.4 3.6a2 2 0 0 1 2.8 2.8L8.6 17H5.8v-2.8z" />
      <path d="m14.4 5.6 2.6 2.6" />
    </>,
  ),
  gauge: make(
    <>
      <path d="M4 17a8.6 8.6 0 1 1 16 0" />
      <path d="m15 10-3.4 4.2" />
    </>,
  ),
  network: make(
    <>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5" cy="18" r="2.2" />
      <circle cx="19" cy="18" r="2.2" />
      <path d="M10.4 6.8 6.4 15.9M13.6 6.8l4 9.1M7.2 18h9.6" />
    </>,
  ),
  refresh: make(
    <>
      <path d="M20.4 12a8.4 8.4 0 0 1-14.6 5.6M3.6 12a8.4 8.4 0 0 1 14.6-5.6" />
      <path d="M18.2 2.6v3.8h-3.8M5.8 21.4v-3.8h3.8" />
    </>,
  ),
  expand: make(<path d="M9 3.4H3.4V9M15 3.4h5.6V9M9 20.6H3.4V15M15 20.6h5.6V15" />),
  search: make(
    <>
      <circle cx="11" cy="11" r="6.6" />
      <path d="m16 16 4.4 4.4" />
    </>,
  ),
  upload: make(
    <>
      <path d="M12 16V4.6M8 8.4 12 4.4l4 4" />
      <path d="M4 15v3.4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V15" />
    </>,
  ),
  download: make(
    <>
      <path d="M12 4.6V16M8 12l4 4 4-4" />
      <path d="M4 15v3.4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V15" />
    </>,
  ),
} as const;

export type IconName = keyof typeof Icons;
