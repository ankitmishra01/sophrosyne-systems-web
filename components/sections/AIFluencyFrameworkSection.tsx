"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CARDS = [
  {
    number: "01",
    title: "What it is",
    body: "A structured competency model mapping AI skills across knowledge domains: from prompt engineering and data literacy to AI governance and applied tool use. Designed for universities: preserves academic integrity while building real-world capability.",
  },
  {
    number: "02",
    title: "How it's delivered",
    body: "Subscription service. A senior AI advisor and curriculum specialist embed in your institution for the first academic year. Faculty are certified before the first student cohort begins. Modules integrate into existing degree structures, no new courses required.",
  },
  {
    number: "03",
    title: "What it produces",
    body: "Every student graduates with a documented, verified AI competency portfolio tracked on the Sophrosyne Platform. Skills are portable across industries. Evidence is formatted for accreditors. Employers know exactly what your graduates can do.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] } },
};

export default function AIFluencyFrameworkSection() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#1E4D38",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Texture */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(241,238,226,0.022) 0px, rgba(241,238,226,0.022) 1px, transparent 1px, transparent 20px)",
          pointerEvents: "none",
        }}
      />
      {/* Radial glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(199,161,74,0.10) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 52, maxWidth: 680 }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              fontFamily: "var(--font-libre-franklin), sans-serif",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#C7A14A",
              margin: "0 0 16px",
            }}
          >
            Proprietary IP · AI Fluency Standard™
          </p>
          <h2
            style={{
              fontSize: "clamp(26px, 3.2vw, 46px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: "#F1EEE2",
              margin: "0 0 18px",
              letterSpacing: "-0.018em",
              lineHeight: 1.08,
            }}
          >
            The AI Fluency Standard™{" "}
            <br />
            <em
              style={{
                fontStyle: "italic",
                color: "rgba(199,161,74,0.85)",
                fontSize: "0.88em",
              }}
            >
              the only structured AI curriculum built exclusively for universities.
            </em>
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.72,
              color: "rgba(201,217,206,0.80)",
              margin: 0,
            }}
          >
            No competitor has an equivalent. The Standard ships as a subscription, integrates into existing programmes, and produces accreditor-ready evidence on day one of each cohort.
          </p>
        </motion.div>

        {/* 3-column cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginBottom: 40,
          }}
          className="framework-grid"
        >
          {CARDS.map((card) => (
            <motion.div
              key={card.number}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              style={{
                position: "relative",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(199,161,74,0.18)",
                borderTop: "3px solid rgba(199,161,74,0.50)",
                borderRadius: "var(--radius-card)",
                padding: "30px 26px 26px",
                overflow: "hidden",
              }}
            >
              {/* Watermark number */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  bottom: -16,
                  right: 10,
                  fontSize: 110,
                  fontWeight: 500,
                  fontFamily: "var(--font-newsreader), serif",
                  color: "#F1EEE2",
                  opacity: 0.04,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {card.number}
              </div>

              {/* Badge */}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  background: "rgba(199,161,74,0.14)",
                  border: "1px solid rgba(199,161,74,0.28)",
                  borderRadius: 20,
                  padding: "3px 10px",
                  fontSize: 9,
                  fontWeight: 700,
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#E9C77B",
                  marginBottom: 20,
                }}
              >
                {card.number}
              </span>

              <h3
                style={{
                  fontSize: "clamp(15px, 1.5vw, 19px)",
                  fontWeight: 500,
                  fontFamily: "var(--font-newsreader), serif",
                  color: "#F1EEE2",
                  margin: "0 0 12px",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.70,
                  color: "rgba(201,217,206,0.82)",
                  margin: 0,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Foundry callout + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            borderTop: "1px solid rgba(199,161,74,0.14)",
            paddingTop: 28,
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontSize: 13.5,
              lineHeight: 1.65,
              color: "rgba(201,217,206,0.72)",
              fontFamily: "var(--font-libre-franklin), sans-serif",
              fontStyle: "italic",
              margin: 0,
              maxWidth: 520,
            }}
          >
            The Standard extends to the AI Foundry, where students apply fluency to build real products, validated by industry mentors.
          </p>
          <Link
            href="/solutions/curriculum"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              padding: "12px 24px",
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "var(--font-libre-franklin), sans-serif",
              letterSpacing: "0.04em",
              color: "#1E4D38",
              background: "#C7A14A",
              border: "1px solid transparent",
              borderRadius: "var(--radius-btn)",
              textDecoration: "none",
              transition: "background 180ms, opacity 180ms",
              flexShrink: 0,
            }}
          >
            Explore the Standard →
          </Link>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .framework-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 861px) and (max-width: 1100px) {
          .framework-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
