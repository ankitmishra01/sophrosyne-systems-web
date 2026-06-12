"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, TrendingDown, Rocket, ArrowRight } from "lucide-react";
import { WHY_ITEMS } from "@/lib/data";

const ICONS = { GraduationCap, TrendingDown, Rocket } as const;

// Pillar order + per-pillar links (maps onto WHY_ITEMS by index)
const PILLARS = [
  { idx: 1, numeral: "I", tag: "Operational Cost", href: "/solutions/pulse" },
  { idx: 0, numeral: "II", tag: "AI Fluency", href: "/solutions/curriculum" },
  {
    idx: 2,
    numeral: "III",
    tag: "Entrepreneurial Ecosystem",
    href: "/solutions/foundry",
  },
] as const;

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
          style={{ marginBottom: 56, maxWidth: 680 }}
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
            }}
          >
            Built for Small and Mid-Sized Universities.
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.68,
              color: "#4A584E",
              margin: 0,
            }}
          >
            Three integrated pillars that help small and mid-sized universities
            reduce costs sustainably, develop genuinely AI-fluent graduates, and
            build entrepreneurial ecosystems that anchor their communities in
            the AI era.
          </p>
        </motion.div>

        {/* Pillar cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="pillar-grid"
        >
          {PILLARS.map((p, pos) => {
            const item = WHY_ITEMS[p.idx];
            const IconComp = ICONS[item.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={p.tag}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: pos * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={p.href}
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    textDecoration: "none",
                    background: "#FFFFFF",
                    border: "1px solid rgba(27,42,33,0.10)",
                    borderRadius: "var(--radius-card)",
                    padding: "32px 28px 26px",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-card)",
                    transition:
                      "transform 220ms cubic-bezier(0.22,1,0.36,1), box-shadow 220ms, border-color 220ms",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "var(--shadow-card-lg)";
                    el.style.borderColor = "rgba(30,77,56,0.28)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "none";
                    el.style.boxShadow = "var(--shadow-card)";
                    el.style.borderColor = "rgba(27,42,33,0.10)";
                  }}
                >
                  {/* Top accent rule */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background:
                        "linear-gradient(90deg, #1E4D38 0%, #C7A14A 100%)",
                    }}
                  />

                  {/* Faint serif numeral */}
                  <span
                    style={{
                      position: "absolute",
                      top: 14,
                      right: 22,
                      fontSize: 60,
                      lineHeight: 1,
                      fontFamily: "var(--font-newsreader), serif",
                      fontStyle: "italic",
                      color: "rgba(199,161,74,0.16)",
                      pointerEvents: "none",
                    }}
                  >
                    {p.numeral}
                  </span>

                  {/* Icon chip */}
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: "var(--radius-card)",
                      background: "rgba(30,77,56,0.07)",
                      border: "1px solid rgba(30,77,56,0.16)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 22,
                    }}
                  >
                    {IconComp && (
                      <IconComp size={22} color="#1E4D38" strokeWidth={1.7} />
                    )}
                  </div>

                  {/* Pillar tag */}
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      fontFamily: "var(--font-libre-franklin), sans-serif",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#B5862E",
                      margin: "0 0 8px",
                    }}
                  >
                    Pillar {p.numeral} · {p.tag}
                  </p>

                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 500,
                      fontFamily: "var(--font-newsreader), serif",
                      color: "#1B2A21",
                      margin: "0 0 12px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14.5,
                      lineHeight: 1.68,
                      color: "#4A584E",
                      margin: "0 0 24px",
                    }}
                  >
                    {item.body}
                  </p>

                  {/* Explore link */}
                  <span
                    style={{
                      marginTop: "auto",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13,
                      fontWeight: 600,
                      fontFamily: "var(--font-libre-franklin), sans-serif",
                      color: "#1E4D38",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Explore
                    <ArrowRight size={14} strokeWidth={2.2} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pillar-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
