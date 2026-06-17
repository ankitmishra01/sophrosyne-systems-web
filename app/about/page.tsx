import type { Metadata } from "next";
import TeamGrid from "@/components/sections/TeamGrid";
import PhilosophyBlocks from "@/components/sections/PhilosophyBlocks";
import FoundingCohort from "@/components/sections/FoundingCohort";

export const metadata: Metadata = {
  title: "About — Sophrosyne Systems",
  description:
    "Academic leaders, researchers, and operators. The team behind Sophrosyne Systems is built from inside the university, not around it.",
};

const HERO_STATS = [
  { value: "5 Spots", label: "Founding Cohort — limited institutional intake" },
  { value: "FERPA", label: "Compliance Architecture" },
  { value: "100%", label: "Institution IP Ownership" },
];

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
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 340px",
          gap: 64,
          alignItems: "center",
        }}
        className="about-hero-grid"
      >
        {/* Left — headline + description */}
        <div>
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
              fontSize: "clamp(26px, 3.6vw, 50px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21",
              margin: "0 0 20px",
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
            }}
          >
            Academic Leaders, Researchers, and Operators. Built from inside
            the university, not around it.
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.72,
              color: "#4A584E",
              maxWidth: 520,
              margin: 0,
            }}
          >
            Sophrosyne Systems was founded on a single conviction: that regional
            universities have more latent AI potential than any other institution
            in the country — and that they've been consistently underserved by
            enterprise software vendors who sell licenses, not outcomes.
          </p>
        </div>

        {/* Right — stats card */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(27,42,33,0.10)",
            borderRadius: "var(--radius-card)",
            boxShadow: "var(--shadow-card)",
            overflow: "hidden",
          }}
        >
          {HERO_STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "22px 28px",
                borderBottom:
                  i < HERO_STATS.length - 1
                    ? "1px solid rgba(27,42,33,0.08)"
                    : "none",
                borderLeft: "3px solid #1E4D38",
              }}
            >
              <p
                style={{
                  fontSize: 20,
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
                  color: "#4A584E",
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

      <style>{`
        @media (max-width: 860px) {
          .about-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

function TeamIntro() {
  return (
    <section
      style={{
        padding: "72px var(--pad-h)",
        background: "#1E4D38",
      }}
    >
      <p
        style={{
          fontSize: "clamp(18px, 2vw, 24px)",
          lineHeight: 1.7,
          color: "#F1EEE2",
          maxWidth: 760,
          margin: "0 auto",
          fontFamily: "var(--font-newsreader), serif",
          fontStyle: "italic",
          textAlign: "center",
          letterSpacing: "-0.01em",
        }}
      >
        Every engagement draws on the same blend: a senior AI advisor who has
        shipped production systems, an academic curriculum specialist who has
        sat on accreditation committees, and an operator with a track record
        in higher-ed finance. That combination is deliberate — and rare.
      </p>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <TeamIntro />
      <TeamGrid />
      <PhilosophyBlocks />
      <FoundingCohort />
    </>
  );
}
