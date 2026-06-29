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
    body: "We audit your accreditation gaps, AI curriculum readiness, and operational savings opportunities across all 9 domains, including stakeholder interviews across leadership, IT, and faculty. You receive a board-ready findings deck with a prioritized roadmap and grant-funding pathway. Not ready for the full program? Ask about our targeted 90-Day Pillar Pilot on your discovery call.",
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
    body: "Expert teams remain embedded, delivering each new AI course, advancing operational efficiency work, and mentoring Foundry cohorts. Students leave with GitHub portfolios that travel across every industry. Employment outcomes are tracked and reported.",
  },
];

function GetStartedHero() {
  return (
    <section
      style={{
        padding: "140px var(--pad-h) 80px",
        background: "#1E4D38",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Texture */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(241,238,226,0.022) 0px, rgba(241,238,226,0.022) 1px, transparent 1px, transparent 20px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 15% 50%, rgba(199,161,74,0.08) 0%, transparent 55%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }} className="gs-hero-grid">
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.18em", textTransform: "uppercase", color: "#C7A14A", margin: "0 0 20px" }}>
            Start Your Transformation
          </p>
          <h1 style={{ fontSize: "clamp(28px, 3.8vw, 54px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif", color: "#F1EEE2", margin: "0 0 22px", letterSpacing: "-0.018em", maxWidth: 680, lineHeight: 1.08 }}>
            Tell us about your institution.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.72, color: "rgba(201,217,206,0.80)", maxWidth: 480, margin: 0 }}>
            We respond within one business day. Every engagement begins with a no-obligation 30-minute discovery call.
          </p>
        </div>

        {/* Quick contact card */}
        <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(199,161,74,0.22)", borderRadius: "var(--radius-card)", padding: "24px 28px", flexShrink: 0, minWidth: 220 }} className="gs-hero-card">
          <p style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(199,161,74,0.70)", margin: "0 0 12px" }}>
            Prefer email?
          </p>
          <a href="mailto:lauretta@sophrosynesystems.org" style={{ fontSize: 13, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", color: "#E9C77B", textDecoration: "none", display: "block", marginBottom: 16, letterSpacing: "0.01em" }}>
            lauretta@sophrosynesystems.org
          </a>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {["No obligation", "Reply within 1 business day", "Grant language on request"].map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 11.5, color: "rgba(201,217,206,0.75)", fontFamily: "var(--font-libre-franklin), sans-serif" }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#9FBFAD", flexShrink: 0 }} />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .gs-hero-grid { grid-template-columns: 1fr !important; }
          .gs-hero-card { display: none !important; }
        }
      `}</style>
    </section>
  );
}

function ProcessSteps() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#F4F0E6",
        borderBottom: "1px solid rgba(27,42,33,0.07)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 60% at 80% 30%, rgba(199,161,74,0.05) 0%, transparent 55%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: 52 }}>
          <p style={{ fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.18em", textTransform: "uppercase", color: "#B5862E", margin: "0 0 14px" }}>
            What Happens Next
          </p>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif", color: "#1B2A21", margin: 0, letterSpacing: "-0.014em", lineHeight: 1.1 }}>
            From first contact to go-live.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }} className="process-grid">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                background: i === 1 ? "#1E4D38" : "#FFFFFF",
                border: `1px solid ${i === 1 ? "rgba(199,161,74,0.22)" : "rgba(27,42,33,0.09)"}`,
                borderTop: `3px solid ${i === 1 ? "#C7A14A" : "rgba(27,42,33,0.10)"}`,
                borderRadius: "var(--radius-card)",
                padding: "28px 22px 24px",
                boxShadow: i === 1 ? "0 8px 32px rgba(30,77,56,0.16)" : "0 2px 8px rgba(27,42,33,0.05)",
                overflow: "hidden",
              }}
            >
              {/* Watermark */}
              <div aria-hidden style={{ position: "absolute", bottom: -14, right: 8, fontSize: 100, fontWeight: 500, fontFamily: "var(--font-newsreader), serif", color: i === 1 ? "#F1EEE2" : "#1B2A21", opacity: 0.05, lineHeight: 1, letterSpacing: "-0.04em", pointerEvents: "none", userSelect: "none" }}>
                {step.number}
              </div>

              {/* Step badge */}
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: i === 1 ? "rgba(199,161,74,0.18)" : "rgba(30,77,56,0.06)", border: `1px solid ${i === 1 ? "rgba(199,161,74,0.30)" : "rgba(30,77,56,0.14)"}`, borderRadius: 20, padding: "3px 10px", fontSize: 9, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", color: i === 1 ? "#E9C77B" : "#1E4D38", marginBottom: 18 }}>
                Step {step.number}
              </span>

              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: 9, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.10em", textTransform: "uppercase", color: i === 1 ? "rgba(201,217,206,0.70)" : "#6B7C72" }}>
                  {step.duration}
                </span>
                {"price" in step && (
                  <span style={{ fontSize: 9, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.08em", textTransform: "uppercase", color: i === 1 ? "#C7A14A" : "#B5862E" }}>
                    {(step as typeof step & { price: string }).price}
                  </span>
                )}
              </div>

              <h3 style={{ fontSize: "clamp(14px, 1.4vw, 17px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif", color: i === 1 ? "#F1EEE2" : "#1B2A21", margin: "0 0 10px", letterSpacing: "-0.01em", lineHeight: 1.2, position: "relative", zIndex: 1 }}>
                {step.title}
              </h3>

              <p style={{ fontSize: 12.5, lineHeight: 1.68, color: i === 1 ? "rgba(201,217,206,0.80)" : "#4A584E", margin: 0, position: "relative", zIndex: 1 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: 1fr 1fr !important; gap: 14px !important; }
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
