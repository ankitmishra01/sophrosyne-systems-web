import type { Metadata, Viewport } from "next";
import { Newsreader, Libre_Franklin, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Chrome from "@/components/layout/Chrome";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Display face — tight, confident grotesk for big headline moments.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Kept for editorial/serif accents where still wanted (e.g. Logo wordmark).
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-libre-franklin",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4F0E6",
};

export const metadata: Metadata = {
  title: "Sophrosyne Systems — AI Infrastructure for Universities",
  description:
    "Sophrosyne Systems helps small and mid-sized universities embed AI fluency across every academic program, prove AI readiness to accreditors, and build entrepreneurial ecosystems that differentiate their enrollment proposition.",
  keywords: [
    "AI university",
    "higher education AI platform",
    "university accreditation AI",
    "AI fluency curriculum",
    "campus AI infrastructure",
    "FERPA compliant AI",
    "enrollment cliff higher education",
  ],
  openGraph: {
    title: "Sophrosyne Systems — A Measured Path Through the AI Transition",
    description:
      "AI fluency, accreditation readiness, and entrepreneurial ecosystems for regional universities. FERPA-compliant. Student IP protected. Audit-first engagement.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${newsreader.variable} ${libreFranklin.variable}`}
    >
      <body>
        <Chrome>{children}</Chrome>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
