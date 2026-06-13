import type { Metadata, Viewport } from "next";
import { Newsreader, Libre_Franklin } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
    "Sophrosyne Systems helps small and mid-sized universities embed AI fluency across every academic programme, prove AI readiness to accreditors, and build entrepreneurial ecosystems that differentiate their enrolment proposition.",
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
      className={`${newsreader.variable} ${libreFranklin.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
