import type { Metadata } from "next";
import SolutionCards from "@/components/sections/SolutionCards";

export const metadata: Metadata = {
  title: "Solutions — Sophrosyne Systems",
  description:
    "The three pillars of the Sophrosyne transformation system: operational cost reduction, AI fluency for every student, and an entrepreneurial ecosystem — built for small and mid-sized universities.",
};

function SolutionsHero() {
  return (
    <section
      style={{
        padding: "140px var(--pad-h) 72px",
        background:
          "radial-gradient(ellipse 80% 60% at 20% 40%, #ECF1EC 0%, #F4F0E6 60%)",
        borderBottom: "1px solid rgba(27,42,33,0.08)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            fontFamily: "var(--font-libre-franklin), sans-serif",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#B5862E",
            margin: "0 0 18px",
          }}
        >
          Three Pillars of Transformation
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 68px)",
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: "#1B2A21",
            margin: "0 0 20px",
            letterSpacing: "-0.015em",
            maxWidth: 760,
            lineHeight: 1.06,
          }}
        >
          Three pillars. One complete campus transformation.
        </h1>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.72,
            color: "#4A584E",
            maxWidth: 580,
            margin: 0,
          }}
        >
          Sophrosyne is a three-pillar transformation system for small and
          mid-sized universities — built on production software, not consulting
          decks. Each pillar works independently and compounds together: reduced
          operating costs, AI-fluent graduates, and an entrepreneurial ecosystem
          that prepares students for the world they're actually entering.
        </p>
      </div>
    </section>
  );
}

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <SolutionCards />
    </>
  );
}
