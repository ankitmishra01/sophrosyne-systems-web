"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, TrendingDown, Shield } from "lucide-react";

const AUDIENCES = [
  {
    role: "For Provosts",
    icon: GraduationCap,
    href: "/for/provost",
    metric: "6–12 mo",
    metricLabel: "embedded on-site",
    headline: "Faculty own everything. Sophrosyne never appears on a transcript.",
    body: "Our specialist works alongside your faculty for 6 to 12 months. Faculty own everything: the syllabi, the assessments, and every student credential. IP stays with your institution, in writing. We train faculty to lead the curriculum themselves. We step back after that.",
    link: "See how the programme works →",
  },
  {
    role: "For CFOs",
    icon: TrendingDown,
    href: "/for/cfo",
    metric: "$45K",
    metricLabel: "audit, credited in full",
    headline: "The audit pays for itself. Before the board votes.",
    body: "We identify savings across nine areas of your operations in two weeks. Those savings fund the full AI programme within 12 months. You have the business case before the board votes. The $45K audit fee applies in full to any engagement you choose.",
    link: "See the savings model →",
  },
  {
    role: "For CIOs",
    icon: Shield,
    href: "/for/cio",
    metric: "1 week",
    metricLabel: "to integrate",
    headline: "Canvas. Banner. Slate. One week to integrate. No lock-in.",
    body: "No multi-year contracts. No platform lock-in. All data stays in your own systems. After the two-week audit you leave with the full board report. The audit is the only commitment. Everything after is your choice.",
    link: "See the integration architecture →",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function BenefitsSection() {
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48, textAlign: "center" }}
        >
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              fontFamily: "var(--font-libre-franklin), sans-serif",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#B5862E",
              margin: "0 0 14px",
            }}
          >
            Who Benefits
          </p>
          <h2
            style={{
              fontSize: "clamp(18px, 2vw, 30px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#1B2A21",
              margin: 0,
              letterSpacing: "-0.012em",
              lineHeight: 1.2,
              whiteSpace: "nowrap",
            }}
            className="benefits-h2"
          >
            Provosts, CFOs, and CIOs each get a measurable outcome in one engagement.
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            alignItems: "stretch",
          }}
          className="benefits-grid"
        >
          {AUDIENCES.map((a) => {
            const IconComp = a.icon;
            return (
              <motion.div
                key={a.role}
                variants={card}
                style={{
                  position: "relative",
                  background: "#FFFFFF",
                  border: "1px solid rgba(27,42,33,0.10)",
                  borderRadius: "var(--radius-card)",
                  padding: "32px 28px 26px",
                  boxShadow: "var(--shadow-card)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                {/* Gold-to-pine top accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: "linear-gradient(90deg, #1E4D38 0%, #C7A14A 100%)",
                  }}
                />

                {/* Icon + metric row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: 20,
                  }}
                >
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
                      flexShrink: 0,
                    }}
                  >
                    <IconComp size={22} color="#1E4D38" strokeWidth={1.7} />
                  </div>

                  {/* Key metric */}
                  <div style={{ textAlign: "right" }}>
                    <p
                      style={{
                        fontSize: 22,
                        fontWeight: 500,
                        fontFamily: "var(--font-newsreader), serif",
                        color: "#1E4D38",
                        margin: 0,
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {a.metric}
                    </p>
                    <p
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        fontFamily: "var(--font-libre-franklin), sans-serif",
                        color: "#8A968C",
                        margin: "3px 0 0",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      {a.metricLabel}
                    </p>
                  </div>
                </div>

                {/* Role label */}
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#B5862E",
                    margin: "0 0 10px",
                  }}
                >
                  {a.role}
                </p>

                {/* Headline */}
                <h3
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    fontFamily: "var(--font-newsreader), serif",
                    color: "#1B2A21",
                    margin: "0 0 14px",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.25,
                  }}
                >
                  {a.headline}
                </h3>

                {/* Body */}
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.68,
                    color: "#4A584E",
                    margin: "0 0 24px",
                    flex: 1,
                  }}
                >
                  {a.body}
                </p>

                {/* Link */}
                <Link
                  href={a.href}
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                    color: "#1E4D38",
                    textDecoration: "none",
                    letterSpacing: "0.01em",
                    marginTop: "auto",
                  }}
                  className="benefit-link"
                >
                  {a.link}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        .benefits-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        .benefit-link:hover {
          text-decoration: underline;
        }
        @media (max-width: 860px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
          .benefits-h2 { white-space: normal !important; font-size: 22px !important; }
        }
      `}</style>
    </section>
  );
}
