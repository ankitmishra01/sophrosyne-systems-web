import type { Metadata } from "next";
import TeamGrid from "@/components/sections/TeamGrid";
import PhilosophyBlocks from "@/components/sections/PhilosophyBlocks";
import FoundingCohort from "@/components/sections/FoundingCohort";

export const metadata: Metadata = {
  title: "About — Sophrosyne Systems",
  description:
    "Practitioners, engineers, and higher-ed strategists. The team behind Sophrosyne Systems ships infrastructure, not slide decks.",
};

function AboutHero() {
  return (
    <section
      style={{
        padding: "140px var(--pad-h) 72px",
        background:
          "radial-gradient(ellipse 80% 65% at 85% 30%, #ECF1EC 0%, #F4F0E6 60%)",
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
          About Sophrosyne Systems
        </p>
        <h1
          style={{
            fontSize: "clamp(28px, 4.5vw, 62px)",
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: "#1B2A21",
            margin: "0 0 20px",
            letterSpacing: "-0.015em",
            maxWidth: 740,
            lineHeight: 1.08,
          }}
        >
          Practitioners, Engineers, and Higher-Ed Strategists. We ship
          infrastructure, not slide decks.
        </h1>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.72,
            color: "#4A584E",
            maxWidth: 560,
            margin: "0 0 32px",
          }}
        >
          Sophrosyne Systems was founded on a single conviction: that regional
          universities have more latent AI potential than any other institution
          in the country — and that they've been consistently underserved by
          enterprise software vendors who sell licences, not outcomes.
        </p>

        <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
          {[
            { value: "Western Accelerator", label: "Programme Partner" },
            { value: "FERPA", label: "Compliance Architecture" },
            { value: "100%", label: "Student & Faculty IP Ownership" },
          ].map((stat, i) => (
            <div key={i}>
              <p
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  fontFamily: "var(--font-newsreader), serif",
                  color: "#1E4D38",
                  margin: "0 0 4px",
                  letterSpacing: "-0.012em",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: 12,
                  color: "#6E7B71",
                  margin: 0,
                  fontWeight: 500,
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <TeamGrid />
      <PhilosophyBlocks />
      <FoundingCohort />
    </>
  );
}
