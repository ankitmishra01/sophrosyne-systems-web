"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SOLUTIONS } from "@/lib/data";

export default function SolutionsOverview() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#F4F0E6",
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
          style={{ marginBottom: 48, maxWidth: 640 }}
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
            The Sophrosyne Platform
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 50px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21",
              margin: "0 0 16px",
              letterSpacing: "-0.012em",
            }}
          >
            Four integrated solutions.{" "}
            <em style={{ fontStyle: "italic", color: "#1E4D38" }}>
              One ecosystem.
            </em>
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.68,
              color: "#4A584E",
              margin: 0,
            }}
          >
            Each solution stands on its own and compounds with the others — from
            the platform your campus deploys, to the curriculum that builds
            fluency, to the incubator where students invent what comes next.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}
          className="overview-grid"
        >
          {SOLUTIONS.map((sol, i) => (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: (i % 2) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={`/solutions/${sol.id}`}
                style={{
                  display: "block",
                  height: "100%",
                  textDecoration: "none",
                  background: "#FFFFFF",
                  border: "1px solid rgba(27,42,33,0.10)",
                  borderRadius: "var(--radius-card)",
                  padding: "28px 28px 24px",
                  boxShadow: "var(--shadow-card)",
                  transition:
                    "transform 220ms cubic-bezier(0.22,1,0.36,1), box-shadow 220ms, border-color 220ms",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-3px)";
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
                <p
                  style={{
                    fontSize: 12,
                    fontStyle: "italic",
                    fontFamily: "var(--font-newsreader), serif",
                    color: "#B5862E",
                    letterSpacing: "0.02em",
                    margin: "0 0 12px",
                  }}
                >
                  {sol.label}
                </p>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 500,
                    fontFamily: "var(--font-newsreader), serif",
                    color: "#1B2A21",
                    margin: "0 0 10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {sol.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "#4A584E",
                    margin: "0 0 20px",
                  }}
                >
                  {sol.tagline}
                </p>
                <span
                  style={{
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
                  Learn more
                  <ArrowRight size={14} strokeWidth={2.2} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .overview-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
