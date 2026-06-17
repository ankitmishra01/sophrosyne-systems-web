import type { Metadata } from "next";
import { Suspense } from "react";
import ContactSection from "./ContactSection";

export const metadata: Metadata = {
  title: "Get Started — Sophrosyne Systems",
  description:
    "Start your institution's AI transformation. Tell us about your university and we'll respond within one business day.",
};

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    duration: "30 min",
    body: "A no-obligation conversation with a Sophrosyne strategist. We learn about your institution, your challenges, and your timeline.",
  },
  {
    number: "02",
    title: "AI & Accreditation Readiness Audit",
    duration: "4–6 weeks",
    price: "$45K · Fixed fee",
    body: "We audit your accreditation gaps, AI curriculum readiness, and operational savings opportunities across all 9 domains — including stakeholder interviews across leadership, IT, and faculty. You receive a board-ready findings deck with a prioritized roadmap and grant-funding pathway. Not ready for the full program? Ask about our targeted 90-Day Pillar Pilot on your discovery call.",
  },
  {
    number: "03",
    title: "Programme Launch",
    duration: "One Semester",
    body: "The AI Fluency Programme goes live: faculty certified, first cohort active, GitHub portfolios started. Operational efficiency work begins in parallel. The Foundry opens for its inaugural intake.",
  },
  {
    number: "04",
    title: "Ongoing Engagement",
    duration: "6–12 Months",
    body: "Expert teams remain embedded — delivering each new AI course, advancing OPEX implementation, mentoring Foundry cohorts. Students leave with GitHub portfolios that travel across every industry. Employment outcomes are tracked and reported.",
  },
];

function GetStartedHero() {
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
          Start Your Transformation
        </p>
        <h1
          style={{
            fontSize: "clamp(26px, 3.6vw, 50px)",
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: "#1B2A21",
            margin: "0 0 20px",
            letterSpacing: "-0.015em",
            maxWidth: 720,
            lineHeight: 1.1,
          }}
        >
          Tell us about your institution.
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
          We respond within one business day. Every engagement begins with a
          no-obligation 30-minute discovery call.
        </p>
      </div>
    </section>
  );
}

function ProcessSteps() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#ECF1EC",
        borderBottom: "1px solid rgba(27,42,33,0.07)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            fontFamily: "var(--font-libre-franklin), sans-serif",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#B5862E",
            margin: "0 0 14px",
          }}
        >
          What Happens Next
        </p>
        <h2
          style={{
            fontSize: "clamp(22px, 2.6vw, 36px)",
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: "#1B2A21",
            margin: "0 0 48px",
            letterSpacing: "-0.012em",
          }}
        >
          From first contact to go-live.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 28,
            position: "relative",
          }}
          className="process-grid"
        >
          {/* Connector line */}
          <div
            style={{
              position: "absolute",
              top: 22,
              left: "calc(12.5% + 4px)",
              right: "calc(12.5% + 4px)",
              height: 1,
              background:
                "linear-gradient(90deg, rgba(30,77,56,0.25) 0%, rgba(199,161,74,0.40) 50%, rgba(30,77,56,0.25) 100%)",
              pointerEvents: "none",
            }}
            className="process-connector"
          />
          {PROCESS_STEPS.map((step, i) => (
            <div key={i}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#FFFFFF",
                  border: "1.5px solid rgba(27,42,33,0.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                  position: "relative",
                  zIndex: 1,
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    fontFamily: "var(--font-newsreader), serif",
                    color: "#1E4D38",
                  }}
                >
                  {step.number}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "0 0 6px", flexWrap: "wrap" }}>
                <p
                  style={{
                    fontSize: 9,
                    fontWeight: 600,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    color: "#4A584E",
                    margin: 0,
                  }}
                >
                  {step.duration}
                </p>
                {"price" in step && (
                  <p
                    style={{
                      fontSize: 9,
                      fontWeight: 700,
                      fontFamily: "var(--font-libre-franklin), sans-serif",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#B5862E",
                      margin: 0,
                    }}
                  >
                    {(step as typeof step & { price: string }).price}
                  </p>
                )}
              </div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  fontFamily: "var(--font-newsreader), serif",
                  color: "#1B2A21",
                  margin: "0 0 8px",
                  letterSpacing: "-0.01em",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.65,
                  color: "#4A584E",
                  margin: 0,
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: 1fr 1fr !important; }
          .process-connector { display: none; }
        }
        @media (max-width: 480px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default function GetStartedPage() {
  return (
    <>
      <GetStartedHero />
      <ProcessSteps />
      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
    </>
  );
}
