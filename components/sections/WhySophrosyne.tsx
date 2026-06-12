"use client";

import { motion } from "framer-motion";
import { GraduationCap, TrendingDown, Rocket } from "lucide-react";
import { WHY_ITEMS } from "@/lib/data";
import Card from "@/components/ui/Card";

const ICONS = { GraduationCap, TrendingDown, Rocket } as const;

export default function WhySophrosyne() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#F4F0E6",
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
              fontFamily: "var(--font-libre-franklin), sans-serif",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#B5862E",
              margin: "0 0 14px",
            }}
          >
            Three Pillars of Transformation
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21",
              margin: "0 0 16px",
              letterSpacing: "-0.012em",
              maxWidth: 700,
            }}
          >
            Built for Small and Mid-Sized Universities.
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.68,
              color: "#4A584E",
              maxWidth: 560,
              margin: 0,
            }}
          >
            Three integrated pillars that help small and mid-sized universities reduce costs sustainably, develop genuinely AI-fluent graduates, and build entrepreneurial ecosystems that anchor their communities in the AI era.
          </p>
        </motion.div>

        {/* Cards — asymmetric: hero card left, two supporting cards stacked right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gridTemplateRows: "auto auto",
            gap: 20,
          }}
          className="why-grid"
        >
          {/* Hero card — spans both rows on the left (index 1) */}
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
                      background: "rgba(241,238,226,0.15)",
                      border: "1px solid rgba(241,238,226,0.22)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 28,
                    }}
                  >
                    {IconComp && <IconComp size={22} color="#9FBFAD" strokeWidth={1.7} />}
                  </div>
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 500,
                      fontFamily: "var(--font-newsreader), serif",
                      color: "#F1EEE2",
                      margin: "0 0 16px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.72,
                      color: "#9FBFAD",
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
                      background: "rgba(30,77,56,0.07)",
                      border: "1px solid rgba(30,77,56,0.14)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 18,
                    }}
                  >
                    {IconComp && <IconComp size={18} color="#1E4D38" strokeWidth={1.8} />}
                  </div>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 500,
                      fontFamily: "var(--font-newsreader), serif",
                      color: "#1B2A21",
                      margin: "0 0 10px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.68,
                      color: "#4A584E",
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
