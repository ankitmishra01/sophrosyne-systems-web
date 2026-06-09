"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Network } from "lucide-react";
import { WHY_ITEMS } from "@/lib/data";
import Card from "@/components/ui/Card";

const ICONS = { GraduationCap, Code2, Network } as const;

export default function WhySophrosyne() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#0f172a",
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
            The Venture-Backed Campus
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 700,
              color: "#f8fafc",
              margin: "0 0 16px",
              letterSpacing: "-0.025em",
              maxWidth: 700,
            }}
          >
            Why Sophrosyne?
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.65,
              color: "rgba(248,250,252,0.62)",
              maxWidth: 560,
              margin: 0,
            }}
          >
            Three integrated pillars that turn a regional campus into a
            nationally connected AI innovation engine — backed by enterprise
            infrastructure, not slide decks.
          </p>
        </motion.div>

        {/* Cards — asymmetric: hero card left (Studio & Pulse), two supporting cards stacked right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gridTemplateRows: "auto auto",
            gap: 20,
          }}
          className="why-grid"
        >
          {/* Hero card — Sophrosyne Studio & Pulse (index 1) spans both rows on the left */}
          {(() => {
            const item = WHY_ITEMS[1];
            const IconComp = ICONS[item.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={1}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ gridColumn: 1, gridRow: "1 / 3" }}
              >
                <Card highlight hoverable style={{ padding: "48px 40px", height: "100%" }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "var(--radius-card)",
                      background: "rgba(16,185,129,0.12)",
                      border: "1px solid rgba(16,185,129,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 28,
                    }}
                  >
                    {IconComp && <IconComp size={22} color="#10b981" strokeWidth={1.7} />}
                  </div>
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#f8fafc",
                      margin: "0 0 16px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.72,
                      color: "rgba(248,250,252,0.62)",
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </Card>
              </motion.div>
            );
          })()}

          {/* Supporting cards stacked vertically on the right — index 0 and 2 */}
          {[0, 2].map((idx, pos) => {
            const item = WHY_ITEMS[idx];
            const IconComp = ICONS[item.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.65,
                  delay: pos === 0 ? 0 : 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ gridColumn: 2, gridRow: pos + 1 }}
              >
                <Card hoverable style={{ padding: "28px 26px", height: "100%" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "var(--radius-card)",
                      background: "rgba(16,185,129,0.08)",
                      border: "1px solid rgba(16,185,129,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 18,
                    }}
                  >
                    {IconComp && <IconComp size={18} color="#10b981" strokeWidth={1.8} />}
                  </div>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#f8fafc",
                      margin: "0 0 10px",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.68,
                      color: "rgba(248,250,252,0.62)",
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
          .why-grid > * {
            grid-column: 1 !important;
            grid-row: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
