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
    title: "AI & OpEx Readiness Audit",
    duration: "4–6 weeks",
    body: "We audit all 9 operational cost domains, your data infrastructure, and curriculum readiness — including stakeholder interviews across leadership, IT, and faculty. You receive a board-ready findings deck with a prioritised savings roadmap.",
  },
  {
    number: "03",
    title: "Platform Launch",
    duration: "4–8 weeks",
    body: "Studio deploys campus-wide, the Curriculum Matrix launches across departments, faculty are certified, and the Foundry opens for its first cohort.",
  },
  {
    number: "04",
    title: "Go Live",
    duration: "Ongoing",
    body: "Your institution joins the Intercollegiate AI Exchange Network. Students build, employers hire, and your fluency data feeds accreditation reports automatically.",
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
            fontSize: "clamp(32px, 5vw, 64px)",
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: "#1B2A21",
            margin: "0 0 20px",
            letterSpacing: "-0.015em",
            maxWidth: 720,
            lineHeight: 1.06,
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
            fontSize: "clamp(24px, 3.5vw, 40px)",
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
              <p
                style={{
                  fontSize: 9,
                  fontWeight: 600,
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: "#8A968C",
                  margin: "0 0 6px",
                }}
              >
                {step.duration}
              </p>
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
