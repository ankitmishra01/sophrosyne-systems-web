"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STAGES = [
  {
    id: "explore",
    label: "Explore",
    desc: "Identifying which AI tools and workflows are relevant to your institution — workshops, vendor evaluations, departmental pilots with no institutional commitment.",
    badge: null,
  },
  {
    id: "deploy",
    label: "Deploy",
    desc: "Running AI tools in isolated pilots. One department, one use case, no integration. Most universities are stuck here — not because they lack ambition, but because no one built the internal capacity to go further.",
    badge: "Most institutions",
    badgeColor: "#B0726A",
    badgeBg: "rgba(176,114,106,0.10)",
    badgeBorder: "rgba(176,114,106,0.22)",
  },
  {
    id: "automate",
    label: "Automate",
    desc: "AI moves from pilot to embedded — automating repeatable administrative tasks, reducing manual workflows, and freeing faculty and staff for higher-value work.",
    badge: null,
  },
  {
    id: "integrate",
    label: "Integrate",
    desc: "AI fluency is built into curriculum, hiring frameworks, and accreditation reporting. The institution starts to speak the language of employers who need AI-ready graduates.",
    badge: null,
  },
  {
    id: "reshape",
    label: "Reshape",
    desc: "The institution itself is reshaped: graduates carry verifiable AI credentials, operations run leaner, and the campus has become a destination for students who know it will prepare them — not just credential them.",
    badge: "Where leaders are",
    badgeColor: "#1E4D38",
    badgeBg: "rgba(30,77,56,0.10)",
    badgeBorder: "rgba(30,77,56,0.24)",
  },
];

export default function AIMaturitySection() {
  const [active, setActive] = useState("deploy");
  const activeStage = STAGES.find((s) => s.id === active)!;
  const activeIdx = STAGES.findIndex((s) => s.id === active);

  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#ECF1EC",
        borderTop: "2px solid rgba(199,161,74,0.18)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 56px" }}
        >
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
            AI Integration Maturity
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 2.8vw, 38px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21",
              margin: "0 0 16px",
              letterSpacing: "-0.012em",
              lineHeight: 1.1,
            }}
          >
            Where is your institution on the AI maturity arc?
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.68,
              color: "#4A584E",
              margin: 0,
            }}
          >
            Employers — including Zapier, which now hires on a four-tier AI-fluency rubric — expect graduates at <em style={{ fontStyle: "italic" }}>Adoptive</em> (B1) or above. Most universities are producing graduates at <em style={{ fontStyle: "italic" }}>Explore</em>. The Sophrosyne suite is designed to move your institution up this arc, at the pace your governance allows.
          </p>
        </motion.div>

        {/* Maturity arc stepper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              maxWidth: 680,
              margin: "0 auto 32px",
            }}
            className="maturity-track"
          >
            {/* Background line */}
            <div
              style={{
                position: "absolute",
                top: 44,
                left: "10%",
                right: "10%",
                height: 1,
                background: "rgba(27,42,33,0.12)",
                zIndex: 0,
              }}
            />
            {/* Fill line */}
            <div
              style={{
                position: "absolute",
                top: 44,
                left: "10%",
                width: `${(activeIdx / (STAGES.length - 1)) * 80}%`,
                height: 1,
                background: "linear-gradient(90deg, #1E4D38, rgba(30,77,56,0.35))",
                zIndex: 0,
                transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)",
              }}
            />

            {STAGES.map((stage, i) => {
              const isActive = stage.id === active;
              const isPast = i < activeIdx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActive(stage.id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                    position: "relative",
                    zIndex: 1,
                    flex: 1,
                  }}
                >
                  {/* Badge slot */}
                  <span style={{ height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {stage.badge && (
                      <span
                        style={{
                          fontSize: 9,
                          fontWeight: 700,
                          fontFamily: "var(--font-libre-franklin), sans-serif",
                          letterSpacing: "0.07em",
                          textTransform: "uppercase",
                          color: stage.badgeColor,
                          background: stage.badgeBg,
                          border: `1px solid ${stage.badgeBorder}`,
                          borderRadius: 4,
                          padding: "2px 6px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {stage.badge}
                      </span>
                    )}
                  </span>

                  {/* Circle */}
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: isActive ? "#1E4D38" : isPast ? "rgba(30,77,56,0.14)" : "#FAFDF9",
                      border: isActive
                        ? "2px solid #1E4D38"
                        : isPast
                        ? "1.5px solid rgba(30,77,56,0.30)"
                        : "1.5px solid rgba(27,42,33,0.16)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 300ms cubic-bezier(0.22,1,0.36,1)",
                      boxShadow: isActive ? "0 0 0 5px rgba(30,77,56,0.10)" : "none",
                    }}
                  >
                    {isActive && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F4F0E6" }} />}
                    {isPast && <span style={{ fontSize: 10, color: "#1E4D38", lineHeight: 1 }}>✓</span>}
                  </div>

                  {/* Label */}
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? "#1B2A21" : "#4A584E",
                      fontFamily: "var(--font-libre-franklin), sans-serif",
                      letterSpacing: "0.02em",
                      transition: "color 200ms",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {stage.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
              style={{
                maxWidth: 520,
                margin: "0 auto",
                textAlign: "center",
                background: "#FFFFFF",
                border: "1px solid rgba(27,42,33,0.10)",
                borderRadius: "var(--radius-card)",
                padding: "20px 28px",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.68,
                  color: "#4A584E",
                  margin: 0,
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                }}
              >
                {activeStage.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 560px) {
          .maturity-track button span:last-child { font-size: 9px !important; }
        }
      `}</style>
    </section>
  );
}
