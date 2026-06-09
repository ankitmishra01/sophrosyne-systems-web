"use client";

import { motion } from "framer-motion";
import { JOURNEY_STEPS } from "@/lib/data";

export default function JourneyTimeline() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#0a0f1a",
        borderTop: "1px solid rgba(248,250,252,0.04)",
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
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#10b981",
              margin: "0 0 14px",
            }}
          >
            How We Engage
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "#f8fafc",
              margin: 0,
              letterSpacing: "-0.025em",
            }}
          >
            From audit to consortium —{" "}
            <span style={{ color: "rgba(248,250,252,0.45)" }}>in three phases.</span>
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
                "linear-gradient(90deg, transparent, rgba(16,185,129,0.3) 20%, rgba(16,185,129,0.3) 80%, transparent)",
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
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "rgba(16,185,129,0.08)",
                  border: "1.5px solid rgba(16,185,129,0.28)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#10b981",
                    letterSpacing: "-0.03em",
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
                  background: "rgba(16,185,129,0.08)",
                  border: "1px solid rgba(16,185,129,0.15)",
                  borderRadius: 20,
                  padding: "3px 10px",
                  marginBottom: 14,
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: "#10b981",
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
                  fontWeight: 700,
                  color: "#f8fafc",
                  margin: "0 0 12px",
                  letterSpacing: "-0.02em",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "rgba(248,250,252,0.52)",
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
