import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sophrosyne Systems — AI Infrastructure for Universities",
  description:
    "Sophrosyne Systems partners with Tier 2 and Tier 3 universities to deploy Sophrosyne Studio, the AI Fluency Curriculum Matrix, and on-campus Foundry incubators — transforming regional campuses into venture-ready AI innovation engines.",
  keywords: [
    "AI university",
    "higher education AI platform",
    "Sophrosyne Studio",
    "AI fluency curriculum",
    "campus AI infrastructure",
    "FERPA compliant AI",
    "fractional AI engineering",
  ],
  openGraph: {
    title: "Sophrosyne Systems — Treat AI Like a Language",
    description:
      "Enterprise AI infrastructure and curriculum deployment for regional universities. FERPA-compliant. Student IP protected. Venture-ready.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
