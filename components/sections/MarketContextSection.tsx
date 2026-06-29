"use client";

import { motion } from "framer-motion";

const TYPES = [
  {
    label: "Research & Advisory Firms",
    signal: "Reports, not results.",
    body: "Subscription-based firms charge $85K–$150K per year for access to benchmarking data and analyst reports. They tell you what the market looks like. They don't change anything inside your institution.",
    verdict: "Data without execution",
    verdictTone: "neutral" as const,
  },
  {
    label: "Enterprise Consulting Groups",
    signal: "Transformation, but not for you.",
    body: "Large management consultancies serve the top 100 research universities at $500K–$3M minimums, 12–24 month timelines, and staffing models built around junior analysts. For most institutions, they simply don't engage.",
    verdict: "Out of reach for most",
    verdictTone: "neutral" as const,
  },
  {
    label: "Sophrosyne",
    signal: "Implementation at boutique speed.",
    body: "Senior experts embedded inside your institution. Audit in 4 to 6 weeks. Pilot in 90 days. Fixed fees at every stage, starting at $45K, with all IP transferring to your institution on delivery.",
    verdict: "Built for this",
    verdictTone: "good" as const,
    highlight: true,
  },
];

const toneColor: Record<string, string> = {
  good: "#1E4D38",
  neutral: "#4A584E",
};

export default function MarketContextSection() {
  return (
    <section
      style={{
        padding: "72px var(--pad-h) 56px",
        background: "#F4F0E6",
        borderTop: "1px solid rgba(27,42,33,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(30,77,56,0.04) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: 560, marginBottom: 44 }}
        >
          <p style={{ fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.18em", textTransform: "uppercase", color: "#B5862E", margin: "0 0 14px" }}>
            The Market
          </p>
          <h2 style={{ fontSize: "clamp(26px, 3.2vw, 42px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif", color: "#1B2A21", margin: "0 0 12px", letterSpacing: "-0.013em", lineHeight: 1.1 }}>
            Three types of firm. One decision.
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#4A584E", margin: 0 }}>
            When a university shortlists consultants for an AI transformation, they typically encounter the same market. Understanding where you are on that map changes the conversation.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }} className="market-context-grid">
          {TYPES.map((type, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: type.highlight ? "#1E4D38" : "#FFFFFF",
                border: type.highlight ? "1px solid rgba(199,161,74,0.22)" : "1px solid rgba(27,42,33,0.10)",
                borderTop: type.highlight ? "3px solid #C7A14A" : "3px solid rgba(27,42,33,0.08)",
                borderRadius: "var(--radius-card)",
                padding: "28px 26px",
                boxShadow: type.highlight ? "0 8px 32px rgba(30,77,56,0.18)" : "0 2px 8px rgba(27,42,33,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {type.highlight && (
                <div aria-hidden style={{ position: "absolute", bottom: -16, right: 10, fontSize: 100, fontWeight: 500, fontFamily: "var(--font-newsreader), serif", color: "#F1EEE2", opacity: 0.05, lineHeight: 1, letterSpacing: "-0.04em", pointerEvents: "none" }}>
                  S
                </div>
              )}

              <p style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", color: type.highlight ? "rgba(199,161,74,0.85)" : "#B5862E", margin: 0 }}>
                {type.label}
              </p>

              <p style={{ fontSize: "clamp(16px, 1.6vw, 19px)", fontWeight: 500, fontFamily: "var(--font-newsreader), serif", color: type.highlight ? "#F1EEE2" : "#1B2A21", margin: 0, letterSpacing: "-0.01em", lineHeight: 1.2, position: "relative", zIndex: 1 }}>
                {type.signal}
              </p>

              <p style={{ fontSize: 13.5, lineHeight: 1.7, color: type.highlight ? "rgba(201,217,206,0.84)" : "#4A584E", margin: 0, position: "relative", zIndex: 1 }}>
                {type.body}
              </p>

              <div style={{ marginTop: 8, paddingTop: 16, borderTop: `1px solid ${type.highlight ? "rgba(255,255,255,0.10)" : "rgba(27,42,33,0.08)"}` }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 600, fontFamily: "var(--font-libre-franklin), sans-serif", letterSpacing: "0.06em", color: type.highlight ? "#E9C77B" : toneColor[type.verdictTone] }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: type.highlight ? "#C7A14A" : toneColor[type.verdictTone], flexShrink: 0 }} />
                  {type.verdict}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .market-context-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </section>
  );
}
