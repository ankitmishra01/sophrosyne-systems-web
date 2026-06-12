"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const SOFTWARE_TIERS = [
  { band: "Under 5,000 students",    price: "$18,000", unit: "/ year" },
  { band: "5,000 – 10,000 students", price: "$32,000", unit: "/ year" },
  { band: "10,000+ students",        price: "Let's talk", unit: "" },
];

const CONSULTING_INCLUDES =
  "From a readiness audit to a full platform build — every engagement is scoped to your institution's specific context.";

const SOFTWARE_DETAILS = [
  "Sophrosyne Studio & fluency dashboard",
  "Curriculum modules and faculty tools",
  "Institutional reporting and benchmarking",
  "Annual licence includes all platform updates",
];

const CONSULTING_DETAILS = [
  "AI & OpEx readiness diagnostic",
  "Pillar pilots with fixed scope and IP",
  "Full foundry and platform deployment",
  "Retainer advisory and ongoing strategy",
];

export default function PricingTiers() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#F4F0E6",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Top rule */}
        <div style={{ borderTop: "1px solid rgba(27,42,33,0.10)" }} />

        <div
          className="pricing-tracks"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
            alignItems: "start",
          }}
        >
          {/* ── Software track ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            className="pricing-track pricing-track--software"
            style={{ padding: "56px 0", paddingRight: 56 }}
          >
            {/* Tinted card panel */}
            <div
              style={{
                background: "rgba(30,77,56,0.04)",
                border: "1px solid rgba(30,77,56,0.09)",
                borderRadius: 12,
                padding: "40px 36px",
              }}
            >
              {/* Eyebrow */}
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#B5862E",
                  margin: "0 0 14px",
                }}
              >
                Platform License
              </p>

              {/* Track name */}
              <h3
                style={{
                  fontSize: 28,
                  fontWeight: 500,
                  fontFamily: "var(--font-newsreader), serif",
                  color: "#1B2A21",
                  margin: "0 0 18px",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                }}
              >
                AI Fluency Software
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.72,
                  color: "#4A584E",
                  margin: "0 0 28px",
                }}
              >
                License the Sophrosyne platform to measure, build, and report on
                AI fluency across your institution. Includes the Studio
                environment, fluency dashboard, curriculum modules, and ongoing
                updates.
              </p>

              {/* Pricing ledger */}
              <div
                style={{
                  borderTop: "1px solid rgba(27,42,33,0.10)",
                  borderBottom: "1px solid rgba(27,42,33,0.10)",
                  margin: "0 0 28px",
                }}
              >
                {SOFTWARE_TIERS.map((tier, i) => (
                  <div
                    key={tier.band}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      gap: 16,
                      padding: "12px 0",
                      borderTop: i > 0 ? "1px solid rgba(27,42,33,0.07)" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 12,
                        color: "#6E7B71",
                        fontFamily: "var(--font-libre-franklin), sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      {tier.band}
                    </span>
                    <span style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                      <span
                        style={{
                          fontSize: 18,
                          fontWeight: 500,
                          fontFamily: "var(--font-newsreader), serif",
                          color: "#1E4D38",
                          letterSpacing: "-0.01em",
                          lineHeight: 1,
                        }}
                      >
                        {tier.price}
                      </span>
                      {tier.unit && (
                        <span
                          style={{
                            fontSize: 11,
                            color: "#6E7B71",
                            fontFamily: "var(--font-libre-franklin), sans-serif",
                          }}
                        >
                          {tier.unit}
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              {/* Details */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {SOFTWARE_DETAILS.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 10,
                      fontSize: 14,
                      color: "#4A584E",
                      fontFamily: "var(--font-libre-franklin), sans-serif",
                    }}
                  >
                    <span
                      style={{
                        color: "#B5862E",
                        fontWeight: 700,
                        flexShrink: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Button variant="primary" size="md" href="/get-started">
                Book a call to discuss licensing
              </Button>
            </div>
          </motion.div>

          {/* ── Consulting track ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="pricing-track pricing-track--consulting"
            style={{ padding: "56px 0", paddingLeft: 56 }}
          >
            {/* Gold accent line */}
            <div
              style={{
                width: 32,
                height: 2,
                background: "#B5862E",
                marginBottom: 18,
              }}
            />

            {/* Eyebrow */}
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                fontFamily: "var(--font-libre-franklin), sans-serif",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#B5862E",
                margin: "0 0 14px",
              }}
            >
              Consulting Engagement
            </p>

            {/* Track name */}
            <h3
              style={{
                fontSize: 28,
                fontWeight: 500,
                fontFamily: "var(--font-newsreader), serif",
                color: "#1B2A21",
                margin: "0 0 18px",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
            >
              Custom Transformation
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.72,
                color: "#4A584E",
                margin: "0 0 24px",
              }}
            >
              A scoped engagement to audit, pilot, or deploy AI transformation
              across your institution — designed around your budget, timeline,
              and strategic priorities.
            </p>

            {/* Includes summary */}
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.65,
                color: "#6E7B71",
                fontStyle: "italic",
                fontFamily: "var(--font-newsreader), serif",
                margin: "0 0 24px",
                paddingLeft: 14,
                borderLeft: "2px solid rgba(181,134,46,0.35)",
              }}
            >
              {CONSULTING_INCLUDES}
            </p>

            {/* Details */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 36px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {CONSULTING_DETAILS.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 10,
                    fontSize: 14,
                    color: "#4A584E",
                    fontFamily: "var(--font-libre-franklin), sans-serif",
                  }}
                >
                  <span
                    style={{
                      color: "#B5862E",
                      fontWeight: 700,
                      flexShrink: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Button variant="primary" size="md" href="/get-started">
              Book a call to discuss your engagement
            </Button>
          </motion.div>
        </div>

        {/* Bottom rule */}
        <div style={{ borderTop: "1px solid rgba(27,42,33,0.10)" }} />

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: 13,
            color: "#6E7B71",
            margin: "32px 0 0",
            fontFamily: "var(--font-libre-franklin), sans-serif",
          }}
        >
          All engagements include full IP transfer to your institution. Title III,
          HECAP, and state AI-fund grant language available on request.
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .pricing-tracks { grid-template-columns: 1fr !important; }
          .pricing-track--software {
            padding-right: 0 !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(27,42,33,0.10);
          }
          .pricing-track--consulting { padding-left: 0 !important; }
        }
      `}</style>
    </section>
  );
}
