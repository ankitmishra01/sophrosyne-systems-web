"use client";

import { motion } from "framer-motion";
import { JOURNEY_STEPS } from "@/lib/data";

export default function JourneyTimeline() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#ECF1EC",
        borderTop: "1px solid rgba(27,42,33,0.07)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
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
              fontSize: 11,
              fontWeight: 600,
              fontFamily: "var(--font-libre-franklin), sans-serif",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#B5862E",
              margin: "0 0 14px",
            }}
          >
            How We Engage
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21",
              margin: 0,
              letterSpacing: "-0.012em",
            }}
          >
            From audit to consortium —{" "}
            <em style={{ fontStyle: "italic", color: "#5A6B60" }}>in three phases.</em>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            position: "relative",
          }}
          className="timeline-grid"
        >
          {/* Connector line */}
          <div
            style={{
              position: "absolute",
              top: 36,
              left: "calc(16.66% + 20px)",
              right: "calc(16.66% + 20px)",
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(30,77,56,0.25) 20%, rgba(199,161,74,0.40) 50%, rgba(30,77,56,0.25) 80%, transparent)",
              zIndex: 0,
              pointerEvents: "none",
            }}
            className="timeline-connector"
          />

          {JOURNEY_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.65,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                padding: "0 24px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Step number circle */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "#FFFFFF",
                  border: "1.5px solid rgba(27,42,33,0.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 400,
                    fontFamily: "var(--font-newsreader), serif",
                    color: "#1E4D38",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.number}
                </span>
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "rgba(30,77,56,0.07)",
                  border: "1px solid rgba(30,77,56,0.14)",
                  borderRadius: "var(--radius-sm)",
                  padding: "3px 10px",
                  marginBottom: 14,
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    color: "#1E4D38",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {step.duration}
                </span>
              </div>

              <h3
                style={{
                  fontSize: 19,
                  fontWeight: 500,
                  fontFamily: "var(--font-newsreader), serif",
                  color: "#1B2A21",
                  margin: "0 0 12px",
                  letterSpacing: "-0.01em",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "#4A584E",
                  margin: 0,
                }}
              >
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .timeline-connector { display: none !important; }
        }
      `}</style>
    </section>
  );
}
