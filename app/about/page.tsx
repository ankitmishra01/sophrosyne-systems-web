import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import DisplayHeading from "@/components/ui/DisplayHeading";
import Section from "@/components/ui/Section";
import TeamGrid from "@/components/sections/TeamGrid";
import PhilosophyBlocks from "@/components/sections/PhilosophyBlocks";
import FoundingCohort from "@/components/sections/FoundingCohort";

export const metadata: Metadata = {
  title: "About — Sophrosyne Systems",
  description:
    "Academic leaders, researchers, and operators. The team behind Sophrosyne Systems is built from inside the university, not around it.",
};

const HERO_STATS = [
  { value: "5 Spots", label: "Founding Cohort, limited institutional intake" },
  { value: "FERPA", label: "Compliance Architecture" },
  { value: "100%", label: "Institution IP Ownership" },
];

function AboutHero() {
  return (
    <section
      style={{
        padding: "180px var(--pad-h) 88px",
        background:
          "radial-gradient(120% 80% at 50% -10%, #ECF1EC 0%, #F4F0E6 60%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 360px",
          gap: 64,
          alignItems: "center",
        }}
        className="about-hero-grid"
      >
        {/* Left — headline + description */}
        <div>
          <Reveal>
            <Eyebrow>About Sophrosyne Systems</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <DisplayHeading
              as="h1"
              size="display"
              accent="not around it."
              style={{ margin: "22px 0 0" }}
            >
              Academic Leaders, Researchers, and Operators. Built from inside
              the university,
            </DisplayHeading>
          </Reveal>
          <Reveal delay={120}>
            <p
              style={{
                fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
                lineHeight: 1.6,
                color: "#4A584E",
                maxWidth: 560,
                margin: "24px 0 0",
              }}
            >
              Sophrosyne Systems was founded on one conviction: regional
              universities have more untapped AI potential than any other type
              of institution. And they have been consistently underserved by
              vendors who sell software licences, not outcomes.
            </p>
          </Reveal>
        </div>

        {/* Right — stats card */}
        <Reveal
          delay={100}
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(27,42,33,0.10)",
            borderRadius: 18,
            boxShadow:
              "0 1px 2px rgba(27,42,33,0.04), 0 24px 48px -32px rgba(27,42,33,0.16)",
            overflow: "hidden",
          }}
        >
          {HERO_STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "24px 28px",
                borderBottom:
                  i < HERO_STATS.length - 1
                    ? "1px solid rgba(27,42,33,0.08)"
                    : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.7rem",
                  fontWeight: 600,
                  color: "#1E4D38",
                  margin: "0 0 5px",
                  letterSpacing: "-0.025em",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: 12.5,
                  color: "#4A584E",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>
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
    <Section bg="pine" py="clamp(72px, 8vw, 104px)">
      <Reveal style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.4rem, 2.4vw, 2.1rem)",
            fontWeight: 600,
            lineHeight: 1.32,
            letterSpacing: "-0.02em",
            color: "#F1EEE2",
            margin: 0,
            textWrap: "balance",
          }}
        >
          Every engagement draws on the same team: a senior AI advisor who has
          built production systems, a curriculum specialist with accreditation
          experience, and a finance operator who knows higher education.{" "}
          <span style={{ color: "#C7A14A" }}>That combination is rare.</span>
        </p>
      </Reveal>
    </Section>
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
