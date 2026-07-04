import type { Metadata } from "next";
import { Suspense } from "react";
import ContactSection from "./ContactSection";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Eyebrow from "@/components/ui/Eyebrow";
import DisplayHeading from "@/components/ui/DisplayHeading";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Get Started — Sophrosyne Systems",
  description:
    "Start your institution's AI transformation. Tell us about your university and we'll respond within one business day.",
};

const PROCESS_STEPS = [
  { number: "01", title: "Discovery Call", duration: "30 min", body: "A no-obligation conversation with a Sophrosyne strategist. We learn about your institution, your challenges, and your timeline." },
  { number: "02", title: "AI & Accreditation Readiness Audit", duration: "4–6 weeks", price: "$45K · Fixed fee", body: "We audit your accreditation gaps, AI curriculum readiness, and operational savings opportunities across all 9 domains, including stakeholder interviews across leadership, IT, and faculty. You receive a board-ready findings deck with a prioritized roadmap and grant-funding pathway. Not ready for the full program? Ask about our targeted 90-Day Pillar Pilot on your discovery call." },
  { number: "03", title: "Programme Launch", duration: "One Semester", body: "The AI Fluency Programme goes live: faculty certified, first cohort active, GitHub portfolios started. Operational efficiency work begins in parallel. The Foundry opens for its inaugural intake." },
  { number: "04", title: "Ongoing Engagement", duration: "6–12 Months", body: "Expert teams remain embedded, delivering each new AI course, advancing operational efficiency work, and mentoring Foundry cohorts. Students leave with GitHub portfolios that travel across every industry. Employment outcomes are tracked and reported." },
];

function GetStartedHero() {
  return (
    <section style={{ padding: "180px var(--pad-h) 80px", background: "#1E4D38" }}>
      <div className="gs-hero-grid" style={{ maxWidth: "var(--max-w)", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }}>
        <Reveal>
          <Eyebrow dark>Start your transformation</Eyebrow>
          <DisplayHeading as="h1" size="hero" dark accent="your institution." style={{ margin: "20px 0 22px", maxWidth: 680 }}>
            Tell us about
          </DisplayHeading>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "rgba(201,217,206,0.82)", maxWidth: 480, margin: 0 }}>
            We respond within one business day. Every engagement begins with a no-obligation 30-minute discovery call.
          </p>
        </Reveal>
        <Reveal delay={120} className="gs-hero-card" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(199,161,74,0.22)", borderRadius: 16, padding: "24px 28px", flexShrink: 0, minWidth: 240 }}>
          <p style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(199,161,74,0.75)", margin: "0 0 12px" }}>Prefer email?</p>
          <a href="mailto:lauretta@sophrosynesystems.org" style={{ fontSize: 13.5, fontWeight: 600, color: "#E9C77B", display: "block", marginBottom: 16 }}>lauretta@sophrosynesystems.org</a>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {["No obligation", "Reply within 1 business day", "Grant language on request"].map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "rgba(201,217,206,0.78)" }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#9FBFAD" }} />
                {t}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <style>{`@media (max-width: 860px) { .gs-hero-grid { grid-template-columns: 1fr !important; } .gs-hero-card { display: none !important; } }`}</style>
    </section>
  );
}

function ProcessSteps() {
  return (
    <Section bg="parchment">
      <SectionHeader eyebrow="What happens next" align="left" title="From first contact to" accent="go-live." size="h2" />
      <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginTop: 48 }}>
        {PROCESS_STEPS.map((step, i) => {
          const hi = i === 1;
          return (
            <Reveal key={i} delay={i * 80}>
              <div style={{ height: "100%", background: hi ? "#1E4D38" : "#FFFFFF", border: `1px solid ${hi ? "rgba(199,161,74,0.22)" : "rgba(27,42,33,0.10)"}`, borderRadius: 18, padding: "28px 24px", boxShadow: hi ? "0 24px 48px -28px rgba(30,77,56,0.5)" : "0 1px 2px rgba(27,42,33,0.04), 0 24px 48px -32px rgba(27,42,33,0.16)" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#C7A14A" }}>{step.number}</span>
                  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: hi ? "rgba(201,217,206,0.7)" : "#6B7C72" }}>{step.duration}</span>
                  {"price" in step && (
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: hi ? "#E9C77B" : "#B5862E" }}>
                      {(step as typeof step & { price: string }).price}
                    </span>
                  )}
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 600, color: hi ? "#F1EEE2" : "#16241B", margin: "0 0 10px", letterSpacing: "-0.015em", lineHeight: 1.2 }}>{step.title}</h3>
                <p style={{ fontSize: 12.5, lineHeight: 1.65, color: hi ? "rgba(201,217,206,0.82)" : "#4A584E", margin: 0 }}>{step.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
      <style>{`
        @media (max-width: 900px) { .process-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .process-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </Section>
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
