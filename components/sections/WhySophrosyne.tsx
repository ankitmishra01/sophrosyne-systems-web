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
              color: "rgba(248,250,252,0.52)",
              maxWidth: 560,
              margin: 0,
            }}
          >
            Three integrated pillars that turn a regional campus into a
            nationally connected AI innovation engine — backed by enterprise
            infrastructure, not slide decks.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="why-grid"
        >
          {WHY_ITEMS.map((item, i) => {
            const IconComp = ICONS[item.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Card
                  highlight={i === 1}
                  hoverable
                  style={{ padding: "32px 28px", height: "100%" }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    {IconComp && (
                      <IconComp
                        size={20}
                        color="#10b981"
                        strokeWidth={1.8}
                      />
                    )}
                  </div>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: "#f8fafc",
                      margin: "0 0 12px",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "rgba(248,250,252,0.55)",
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
          .why-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 640px) and (max-width: 900px) {
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
