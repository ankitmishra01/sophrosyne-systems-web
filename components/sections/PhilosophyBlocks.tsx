"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Globe } from "lucide-react";
import { PHILOSOPHY_BLOCKS } from "@/lib/data";

const ICONS = { BookOpen, Users, Globe } as const;

export default function PhilosophyBlocks() {
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
          style={{ marginBottom: 56 }}
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
            Our Philosophy
          </p>
          <h2
            style={{
              fontSize: "clamp(26px, 3.8vw, 48px)",
              fontWeight: 700,
              color: "#f8fafc",
              margin: 0,
              letterSpacing: "-0.025em",
              maxWidth: 560,
            }}
          >
            Three principles that shape every engagement.
          </h2>
        </motion.div>

        {/* Blocks */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
          className="philosophy-grid"
        >
          {PHILOSOPHY_BLOCKS.map((block, i) => {
            const IconComp = ICONS[block.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  padding: "36px 28px",
                  background: "rgba(248,250,252,0.02)",
                  border: "1px solid rgba(248,250,252,0.06)",
                  borderRadius: "var(--radius-card)",
                  transition: "border-color 220ms",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(16,185,129,0.22)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(248,250,252,0.06)";
                }}
              >
                {/* Number + icon row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    marginBottom: 24,
                  }}
                >
                  <span
                    style={{
                      fontSize: 40,
                      fontWeight: 800,
                      color: "rgba(16,185,129,0.2)",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {block.number}
                  </span>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "rgba(16,185,129,0.08)",
                      border: "1px solid rgba(16,185,129,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {IconComp && (
                      <IconComp size={18} color="#10b981" strokeWidth={1.8} />
                    )}
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#f8fafc",
                    margin: "0 0 14px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {block.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.72,
                    color: "rgba(248,250,252,0.52)",
                    margin: 0,
                  }}
                >
                  {block.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .philosophy-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .philosophy-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
