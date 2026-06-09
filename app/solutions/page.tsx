import type { Metadata } from "next";
import SolutionCards from "@/components/sections/SolutionCards";

export const metadata: Metadata = {
  title: "Solutions — Sophrosyne Systems",
  description:
    "The four pillars of the Sophrosyne ecosystem: Sophrosyne Studio, the AI Fluency Curriculum Matrix, On-Campus AI Foundries, and the Intercollegiate AI Exchange Network.",
};

function SolutionsHero() {
  return (
    <section
      style={{
        padding: "140px var(--pad-h) 72px",
        background:
          "radial-gradient(ellipse 60% 60% at 20% 40%, rgba(16,185,129,0.06) 0%, transparent 65%) #0f172a",
        borderBottom: "1px solid rgba(248,250,252,0.05)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#10b981",
            margin: "0 0 18px",
          }}
        >
          The Four Pillars
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 68px)",
            fontWeight: 800,
            color: "#f8fafc",
            margin: "0 0 20px",
            letterSpacing: "-0.03em",
            maxWidth: 760,
            lineHeight: 1.04,
          }}
        >
          Scalable software infrastructure for the regional campus.
        </h1>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.68,
            color: "rgba(248,250,252,0.55)",
            maxWidth: 580,
            margin: 0,
          }}
        >
          The enrollment crisis is a data and infrastructure crisis. Sophrosyne
          addresses it at the root — replacing institutional software debt with
          a proprietary, interoperable AI ecosystem designed specifically for
          academic governance.
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
