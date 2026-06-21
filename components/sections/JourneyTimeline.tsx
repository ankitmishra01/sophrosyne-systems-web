"use client";

import { motion } from "framer-motion";
import { JOURNEY_STEPS } from "@/lib/data";

const CARD_TOPS = ["#1E4D38", "#C7A14A", "#1B2A21"];

export default function JourneyTimeline() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#F4F0E6",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(27,42,33,0.07)",
      }}
    >
      {/* Subtle warm glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(199,161,74,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              fontFamily: "var(--font-libre-franklin), sans-serif",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#B5862E",
              margin: "0 0 16px",
            }}
          >
            How We Engage
          </p>
          <h2
            style={{
              fontSize: "clamp(30px, 4.0vw, 52px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21",
              margin: 0,
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
            }}
          >
            From audit to consortium —{" "}
            <em style={{ fontStyle: "italic", color: "#1E4D38" }}>in three phases.</em>
          </h2>
        </motion.div>

        {/* Phase cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="journey-grid"
        >
          {JOURNEY_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.65,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4, boxShadow: "0 6px 20px rgba(27,42,33,0.10)" }}
              style={{
                position: "relative",
                background: "#FFFFFF",
                border: "1px solid rgba(27,42,33,0.09)",
                borderTop: `3px solid ${CARD_TOPS[i]}`,
                borderRadius: "var(--radius-card)",
                padding: "40px 32px 36px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(27,42,33,0.06)",
                transition: "box-shadow 250ms, transform 250ms",
              }}
            >
              {/* Large watermark number */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: -16,
                  right: 16,
                  fontSize: 120,
                  fontWeight: 500,
                  fontFamily: "var(--font-newsreader), serif",
                  color: "#1B2A21",
                  opacity: 0.05,
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                  letterSpacing: "-0.04em",
                }}
              >
                {step.number}
              </div>

              {/* Phase badge + duration */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 24,
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: "rgba(30,77,56,0.07)",
                    border: "1px solid rgba(30,77,56,0.14)",
                    borderRadius: 20,
                    padding: "4px 12px",
                    fontSize: 10,
                    fontWeight: 700,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#1E4D38",
                  }}
                >
                  Phase {step.number}
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: "rgba(30,77,56,0.05)",
                    border: "1px solid rgba(30,77,56,0.10)",
                    borderRadius: "var(--radius-sm)",
                    padding: "4px 10px",
                    fontSize: 10,
                    fontWeight: 600,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#4A584E",
                  }}
                >
                  {step.duration}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "clamp(18px, 1.8vw, 22px)",
                  fontWeight: 500,
                  fontFamily: "var(--font-newsreader), serif",
                  color: "#1B2A21",
                  margin: "0 0 16px",
                  letterSpacing: "-0.012em",
                  lineHeight: 1.2,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {step.title}
              </h3>

              {/* Body */}
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.72,
                  color: "#4A584E",
                  margin: 0,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ textAlign: "center", marginTop: 44 }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#FFFFFF",
              border: "1px solid rgba(27,42,33,0.14)",
              borderRadius: 99,
              padding: "10px 22px",
              fontSize: 13,
              fontFamily: "var(--font-libre-franklin), sans-serif",
              color: "#1B2A21",
              letterSpacing: "0.01em",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1E4D38", flexShrink: 0 }} />
            The audit is the only commitment — everything after is opt-in.
          </span>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .journey-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
