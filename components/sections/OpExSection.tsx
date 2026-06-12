"use client";

import { motion } from "framer-motion";
import {
  FileCheck,
  Users,
  BookOpen,
  Presentation,
  ShoppingCart,
  Leaf,
  BarChart2,
  Map,
  Zap,
} from "lucide-react";
import { OPEX_AREAS } from "@/lib/data";

const ICONS = {
  FileCheck,
  Users,
  BookOpen,
  Presentation,
  ShoppingCart,
  Leaf,
  BarChart2,
  Map,
  Zap,
} as const;

const SCORECARD_STATS = [
  { value: "9", label: "Operational Domains" },
  { value: "Real-Time", label: "Monitoring & Alerts" },
  { value: "Predictive", label: "Analytics & Forecasting" },
];

export default function OpExSection() {
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              fontFamily: "var(--font-libre-franklin), sans-serif",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#B5862E",
              margin: "0 0 16px",
            }}
          >
            <em style={{ fontStyle: "italic", fontFamily: "var(--font-newsreader), serif" }}>Pillar I</em>
            {" "}— Operational Sustainability
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21",
              margin: "0 0 16px",
              letterSpacing: "-0.012em",
              maxWidth: 620,
              lineHeight: 1.1,
            }}
          >
            Reduce what costs. Preserve what matters.
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.65,
              color: "#4A584E",
              maxWidth: 560,
              margin: 0,
            }}
          >
            Sophrosyne builds an adaptive infrastructure that identifies savings
            across every operational domain. A real-time snapshot scorecard with
            predictive analytics shows your CFO exactly where costs can be
            reduced — without cutting what makes your institution human.
          </p>
        </motion.div>

        {/* 9-area grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "rgba(27,42,33,0.08)",
            border: "1px solid rgba(27,42,33,0.10)",
            borderRadius: "var(--radius-card)",
            overflow: "hidden",
            marginBottom: 24,
          }}
          className="opex-grid"
        >
          {OPEX_AREAS.map((area) => {
            const IconComp = ICONS[area.icon as keyof typeof ICONS];
            return (
              <div
                key={area.title}
                style={{
                  background: "#FFFFFF",
                  padding: "24px 26px",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(30,77,56,0.07)",
                    border: "1px solid rgba(30,77,56,0.14)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 14,
                    flexShrink: 0,
                  }}
                >
                  <IconComp size={18} color="#1E4D38" strokeWidth={1.8} />
                </div>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#1B2A21",
                    margin: "0 0 6px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {area.title}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    lineHeight: 1.55,
                    color: "#5A6B60",
                    margin: 0,
                  }}
                >
                  {area.body}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Scorecard stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
          className="scorecard-strip"
        >
          {SCORECARD_STATS.map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(27,42,33,0.10)",
                borderRadius: "var(--radius-card)",
                padding: "14px 28px",
                textAlign: "center",
                flex: 1,
                minWidth: 160,
                boxShadow: "var(--shadow-card)",
              }}
            >
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                  fontFamily: "var(--font-newsreader), serif",
                  color: "#1B2A21",
                  margin: "0 0 4px",
                  letterSpacing: "-0.012em",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: 11,
                  color: "#B5862E",
                  margin: 0,
                  fontWeight: 600,
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .opex-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .opex-grid { grid-template-columns: 1fr !important; }
          .scorecard-strip > * { min-width: 140px !important; }
        }
      `}</style>
    </section>
  );
}
