"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

type Stage = {
  number: string;
  title: string;
  price: string;
  duration: string;
  body: string;
  tag: string;
  includes: string[];
};

const STAGES: Stage[] = [
  {
    number: "01",
    title: "AI & Accreditation Readiness Audit",
    price: "$45,000",
    duration: "4–6 weeks",
    tag: "Where most institutions begin",
    body: "A line-item analysis of your AI readiness across faculty, operations, and accreditation risk — with a board-ready savings model your CFO can act on independently. The output stands alone as a deliverable regardless of what comes next.",
    includes: [
      "AI readiness baseline across faculty, staff, and operations",
      "Accreditation risk assessment — gaps mapped against your framework",
      "9-domain operational opportunity model with savings estimate",
      "Board-ready executive deck and CFO financial summary",
      "Pillar-specific implementation roadmap",
      "Grant language for Title III, HECAP, and state AI funds",
    ],
  },
  {
    number: "02",
    title: "90-Day Pillar Pilot",
    price: "Scoped per engagement",
    duration: "3 months",
    tag: "Validate before you commit",
    body: "One pillar — Fluency, OpEx, or Foundry — deployed at limited scope with a dedicated expert team. Delivers measurable outcomes in the time it would take a research subscription firm to complete two studies — and at a comparable annual cost.",
    includes: [
      "Expert team embedded on-site for the pilot period",
      "Pillar-specific delivery framework with defined milestones",
      "Outcome measurement and evidence collection",
      "Student, faculty, or staff capability uplift (depending on pillar)",
      "Pilot completion report with expansion recommendation",
      "All IP generated during the pilot transfers to your institution",
    ],
  },
  {
    number: "03",
    title: "Platform Launch",
    price: "Full program investment",
    duration: "Academic year",
    tag: "The full transformation",
    body: "Full deployment of your chosen pillars across the institution. Fixed scope, fixed fee, and all IP transfers to your institution on delivery. Includes Foundry Demo Day, faculty certification, and operational implementation.",
    includes: [
      "Full multi-pillar deployment with dedicated expert teams",
      "AI Fluency curriculum embedded in existing degree structures",
      "Operational Efficiency implementation with savings realized",
      "Foundry launch: student projects, Demo Day, employer recruitment",
      "All intellectual property transfers to your institution on delivery",
      "Annual program report and board presentation",
    ],
  },
  {
    number: "04",
    title: "Retainer Advisory",
    price: "Ongoing",
    duration: "Rolling engagement",
    tag: "For institutions that have launched",
    body: "Continued strategic support after Platform Launch — keeping your program current, connecting you to the Sophrosyne Consortium Network, and ensuring your accreditation narrative stays ahead of the curve.",
    includes: [
      "Quarterly board reporting and program performance review",
      "Annual curriculum and program refinement",
      "Access to the Sophrosyne Consortium Network",
      "Ongoing grant language and submission support",
      "Ad-hoc advisory for governance, policy, and technology decisions",
      "Priority access to Sophrosyne research and benchmarking data",
    ],
  },
];

export default function EngagementStepper() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#F4F0E6",
        borderTop: "1px solid rgba(27,42,33,0.07)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 52 }}>
          <p style={{ fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.18em", textTransform: "uppercase", color: "#B5862E", margin: "0 0 14px" }}>
            The Engagement Path
          </p>
          <h2 style={{ fontSize: "clamp(22px, 2.8vw, 38px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif", color: "#1B2A21", margin: "0 0 12px", letterSpacing: "-0.012em", lineHeight: 1.1 }}>
            Start with the audit.{" "}
            <em style={{ fontStyle: "italic", color: "#1E4D38" }}>Build from there.</em>
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A584E", maxWidth: 520, margin: 0 }}>
            Most institutions begin with the Audit — a fixed-fee, standalone deliverable with no obligation to continue. Each subsequent stage builds on the last.
          </p>
        </div>

        {/* Stepper layout */}
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 28, alignItems: "start" }} className="stepper-grid">

          {/* Left — stage list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }} className="stepper-nav">
            {STAGES.map((s, i) => {
              const isActive = i === active;
              const isPast = i < active;
              return (
                <button
                  key={s.number}
                  onClick={() => setActive(i)}
                  style={{
                    background: isActive ? "#1E4D38" : "rgba(255,255,255,0.55)",
                    border: isActive ? "1px solid transparent" : "1px solid rgba(27,42,33,0.10)",
                    borderRadius: 12,
                    padding: "16px 18px",
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    transition: "all 200ms cubic-bezier(0.22,1,0.36,1)",
                    boxShadow: isActive ? "0 4px 20px rgba(30,77,56,0.22)" : "none",
                  }}
                >
                  {/* Step circle */}
                  <div style={{
                    width: 34, height: 34, borderRadius: "50%", flexShrink: 0,
                    background: isActive ? "rgba(255,255,255,0.14)" : isPast ? "rgba(30,77,56,0.08)" : "rgba(27,42,33,0.05)",
                    border: isActive ? "1.5px solid rgba(255,255,255,0.28)" : isPast ? "1.5px solid rgba(30,77,56,0.28)" : "1.5px solid rgba(27,42,33,0.14)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {isPast && !isActive ? (
                      <span style={{ fontSize: 13, color: "#1E4D38" }}>✓</span>
                    ) : (
                      <span style={{ fontSize: 12, fontWeight: 500, fontFamily: "var(--font-newsreader), serif", color: isActive ? "#F1EEE2" : "#4A584E" }}>
                        {s.number}
                      </span>
                    )}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", color: isActive ? "#F1EEE2" : "#1B2A21", margin: "0 0 2px", letterSpacing: "0.01em", lineHeight: 1.3 }}>
                      {s.title}
                    </p>
                    <p style={{ fontSize: 10, color: isActive ? "rgba(241,238,226,0.85)" : "#3D5A49", margin: 0, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.04em" }}>
                      {s.duration}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right — detail panel */}
          <div style={{ position: "sticky", top: 88 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(27,42,33,0.10)",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "var(--shadow-card-lg)",
                }}
              >
                {/* Detail header */}
                <div style={{ padding: "28px 32px 24px", borderBottom: "1px solid rgba(27,42,33,0.07)" }}>
                  {/* Tag */}
                  <span style={{ fontSize: 10, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.10em", textTransform: "uppercase", color: "#1E4D38", background: "rgba(30,77,56,0.07)", border: "1px solid rgba(30,77,56,0.14)", borderRadius: 4, padding: "3px 9px", display: "inline-block", marginBottom: 16 }}>
                    {stage.tag}
                  </span>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
                    <h3 style={{ fontSize: "clamp(20px, 2vw, 28px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif", color: "#1B2A21", margin: 0, letterSpacing: "-0.012em", lineHeight: 1.15, flex: 1 }}>
                      {stage.title}
                    </h3>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <p style={{ fontSize: 20, fontWeight: 500, fontFamily: "var(--font-newsreader), serif", color: "#1E4D38", margin: "0 0 2px", letterSpacing: "-0.01em" }}>{stage.price}</p>
                      <p style={{ fontSize: 10, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", color: "#4A584E", letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>{stage.duration}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "#4A584E", margin: "16px 0 0" }}>{stage.body}</p>
                </div>

                {/* Includes */}
                <div style={{ padding: "24px 32px 28px" }}>
                  <p style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", color: "#B5862E", margin: "0 0 16px" }}>
                    What's Included
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px" }} className="includes-grid">
                    {stage.includes.map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#1E4D38", flexShrink: 0, marginTop: 6 }} />
                        <span style={{ fontSize: 13, color: "#4A584E", lineHeight: 1.55, fontFamily: "var(--font-libre-franklin), sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA footer */}
                <div style={{ borderTop: "1px solid rgba(27,42,33,0.07)", padding: "20px 32px", background: "rgba(30,77,56,0.025)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                  <div>
                    <p style={{ fontSize: 13, color: "#4A584E", fontFamily: "var(--font-libre-franklin), sans-serif", fontStyle: "italic", margin: "0 0 4px" }}>
                      All IP transfers to your institution on delivery.
                    </p>
                    <p style={{ fontSize: 11.5, color: "#4A584E", fontFamily: "var(--font-libre-franklin), sans-serif", margin: 0 }}>
                      Pricing scales with enrollment — institutions under 2,000 students start at $28K.
                    </p>
                  </div>
                  <Button variant="primary" size="sm" href="/get-started">
                    Discuss this stage →
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .stepper-grid { grid-template-columns: 1fr !important; }
          .stepper-nav { flex-direction: row !important; overflow-x: auto; padding-bottom: 4px; }
          .stepper-nav button { min-width: 180px; }
          .includes-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
