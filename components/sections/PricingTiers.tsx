"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const TRACKS = [
  {
    eyebrow: "Platform License",
    name: "AI Fluency Software",
    description:
      "License the Sophrosyne platform to measure, build, and report on AI fluency across your institution. Includes the Studio environment, fluency dashboard, curriculum modules, and ongoing updates. Pricing is scoped to your enrollment and deployment needs.",
    details: [
      "Sophrosyne Studio & fluency dashboard",
      "Curriculum modules and faculty tools",
      "Institutional reporting and benchmarking",
      "Priced by enrollment and scope",
    ],
    cta: "Book a call to discuss licensing",
  },
  {
    eyebrow: "Consulting Engagement",
    name: "Custom Transformation",
    description:
      "A scoped engagement to audit, pilot, or deploy AI transformation across your institution — designed around your budget, timeline, and strategic priorities. From a diagnostic readiness audit to a full-platform deployment, every engagement is built to your context.",
    details: [
      "AI & OpEx readiness diagnostic",
      "Pillar pilots with fixed scope and IP",
      "Full foundry and platform deployment",
      "Retainer advisory and ongoing strategy",
    ],
    cta: "Book a call to discuss your engagement",
  },
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
        <div style={{ borderTop: "1px solid rgba(27,42,33,0.10)", marginBottom: 0 }} />

        <div className="pricing-tracks">
          {TRACKS.map((track, i) => (
            <motion.div
              key={track.eyebrow}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="pricing-track"
              style={{ padding: "48px 0" }}
            >
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#B5862E",
                  margin: "0 0 14px",
                }}
              >
                {track.eyebrow}
              </p>

              <h3
                style={{
                  fontSize: 26,
                  fontWeight: 500,
                  fontFamily: "var(--font-newsreader), serif",
                  color: "#1B2A21",
                  margin: "0 0 20px",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                }}
              >
                {track.name}
              </h3>

              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.72,
                  color: "#4A584E",
                  margin: "0 0 28px",
                  maxWidth: 460,
                }}
              >
                {track.description}
              </p>

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
                {track.details.map((item) => (
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
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "#1E4D38",
                        flexShrink: 0,
                        marginTop: 6,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <Button variant="primary" size="md" href="/get-started">
                {track.cta}
              </Button>
            </motion.div>
          ))}
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
          All engagements include full IP transfer to your institution. Title III, HECAP, and
          state AI-fund grant language available on request.
        </motion.p>
      </div>

      <style>{`
        .pricing-tracks {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        .pricing-track:first-child {
          border-right: 1px solid rgba(27,42,33,0.10);
          padding-right: 56px;
        }
        .pricing-track:last-child {
          padding-left: 56px;
        }
        @media (max-width: 720px) {
          .pricing-tracks { grid-template-columns: 1fr !important; }
          .pricing-track:first-child {
            border-right: none !important;
            border-bottom: 1px solid rgba(27,42,33,0.10);
            padding-right: 0 !important;
          }
          .pricing-track:last-child { padding-left: 0 !important; }
        }
      `}</style>
    </section>
  );
}
