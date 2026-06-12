import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Sophrosyne Systems — AI Infrastructure for Universities",
  description:
    "Sophrosyne Systems partners with small and mid-sized universities to reduce operating costs, embed AI fluency into every academic program, and build entrepreneurial ecosystems that prepare graduates for what comes next.",
  keywords: [
    "AI university",
    "higher education AI platform",
    "university operational savings",
    "AI fluency curriculum",
    "campus AI infrastructure",
    "FERPA compliant AI",
    "university cost reduction",
  ],
  openGraph: {
    title: "Sophrosyne Systems — A Measured Path Through the AI Transition",
    description:
      "Operational renewal, AI fluency, and entrepreneurial ecosystems for regional universities. FERPA-compliant. Student IP protected. Audit-first engagement.",
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
      <head>
        <meta name="theme-color" content="#F4F0E6" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
