import type { Metadata, Viewport } from "next";
import { Inter, Poppins, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zlendo Realty — One Platform, From Concept to Construction",
  description:
    "AI-native intelligent platform for architecture, engineering and construction. Draft floor plans, visualise in 3D, estimate cost and go build-ready — all in one connected workflow.",
  openGraph: {
    title: "Zlendo Realty — One Platform, From Concept to Construction",
    description:
      "AI-native intelligent platform for AEC. Design. Visualize. Realize.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a2a4e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${caveat.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
