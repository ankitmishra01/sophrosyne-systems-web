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
        background: "#0a0f1a",
        borderTop: "1px solid rgba(248,250,252,0.04)",
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
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#10b981",
              margin: "0 0 16px",
            }}
          >
            Pillar One — Operational Sustainability
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 700,
              color: "#f8fafc",
              margin: "0 0 16px",
              letterSpacing: "-0.028em",
              maxWidth: 620,
              lineHeight: 1.06,
            }}
          >
            Reduce what costs. Preserve what matters.
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.65,
              color: "rgba(248,250,252,0.55)",
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
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
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
                  background: "#0a0f1a",
                  padding: "24px 26px",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(16,185,129,0.08)",
                    border: "1px solid rgba(16,185,129,0.14)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 14,
                    flexShrink: 0,
                  }}
                >
                  <IconComp size={18} color="#10b981" strokeWidth={1.8} />
                </div>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#f4f5f8",
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
                    color: "rgba(244,245,248,0.52)",
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
                background: "rgba(16,185,129,0.06)",
                border: "1px solid rgba(16,185,129,0.15)",
                borderRadius: "var(--radius-card)",
                padding: "14px 28px",
                textAlign: "center",
                flex: 1,
                minWidth: 160,
              }}
            >
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#f4f5f8",
                  margin: "0 0 4px",
                  letterSpacing: "-0.03em",
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: 11,
                  color: "#10b981",
                  margin: 0,
                  fontWeight: 500,
                  letterSpacing: "0.04em",
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
