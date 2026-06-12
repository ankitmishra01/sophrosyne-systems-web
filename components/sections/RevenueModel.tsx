"use client";

import { motion } from "framer-motion";
import { Shield, Code2, TrendingUp } from "lucide-react";

const PILLARS = [
  {
    Icon: Code2,
    title: "Engineering Output, Not Licensing",
    body: "You pay for the work we ship — infrastructure provisioning, curriculum deployment, and platform integration. There are no per-user fees, no renewal traps, and no vendor lock-in.",
  },
  {
    Icon: Shield,
    title: "100% IP and Data Ownership",
    body: "Every model, dataset, and application built on Sophrosyne Studio belongs to your institution. We hold zero licence rights over student or faculty-generated work.",
  },
  {
    Icon: TrendingUp,
    title: "Predictable, Venture-Ready Budgeting",
    body: "Two engagement tracks — consulting-first or full-stack — each with clean line items for your CFO. Start with an OpEx audit to identify savings, then decide how far to go. No lock-in at any stage.",
  },
];

export default function RevenueModel() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h) 0",
        background: "#F4F0E6",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{
            background: "#FFFFFF",
            border: "1.5px solid rgba(27,42,33,0.10)",
            borderRadius: 16,
            padding: "48px 56px",
            marginBottom: 64,
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: 56,
              alignItems: "center",
            }}
            className="revenue-grid"
          >
            <div>
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
                Our Revenue Model
              </p>
              <h2
                style={{
                  fontSize: "clamp(24px, 3.2vw, 40px)",
                  fontWeight: 500,
                  fontFamily: "var(--font-newsreader), serif",
                  color: "#1B2A21",
                  margin: "0 0 20px",
                  letterSpacing: "-0.012em",
                  lineHeight: 1.1,
                }}
              >
                Software-enabled services.{" "}
                <em style={{ fontStyle: "italic", color: "#8A968C" }}>
                  Not a SaaS subscription.
                </em>
              </h2>
            </div>

            <div>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.72,
                  color: "#4A584E",
                  margin: "0 0 20px",
                }}
              >
                We combine ecosystem engineering with proprietary
                infrastructure. We deploy our secure developer sandbox
                campus-wide, meaning your students and faculty build on a
                standardised cloud foundation.
              </p>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.72,
                  color: "#4A584E",
                  margin: 0,
                }}
              >
                The university owns{" "}
                <span
                  style={{
                    color: "#1E4D38",
                    fontWeight: 600,
                  }}
                >
                  100% of every product generated
                </span>{" "}
                — powered by a predictable software license and a dedicated
                strategy retainer.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: 1,
              background: "rgba(27,42,33,0.08)",
              margin: "40px 0",
            }}
          />

          {/* Pillars */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
            }}
            className="pillars-grid"
          >
            {PILLARS.map((p, i) => (
              <div key={i}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: "rgba(30,77,56,0.07)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                  }}
                >
                  <p.Icon size={17} color="#1E4D38" strokeWidth={1.8} />
                </div>
                <h3
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    color: "#1B2A21",
                    margin: "0 0 8px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.65,
                    color: "#5A6B60",
                    margin: 0,
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .revenue-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .pillars-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}
