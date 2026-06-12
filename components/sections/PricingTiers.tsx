"use client";

import { motion } from "framer-motion";
import { PRICING_TIERS } from "@/lib/data";
import Button from "@/components/ui/Button";

const CTA_MAP: Record<string, string> = {
  "AI & OpEx Readiness Audit": "Book the Audit",
  "90-Day Pillar Pilot": "Start a Pilot",
  "OpEx Transformation Advisory": "Start Advisory",
  "Foundry & Platform Launch": "Start the Build",
  "Institutional Scale Retainer & Platform License": "Get Started",
};

function TierCard({
  tier,
  index,
}: {
  tier: (typeof PRICING_TIERS)[number];
  index: number;
}) {
  const ctaLabel = CTA_MAP[tier.name] ?? "Get Started";
  const isPine = tier.highlighted;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: "relative" }}
    >
      {tier.badge && (
        <div
          style={{
            position: "absolute",
            top: -14,
            left: "50%",
            transform: "translateX(-50%)",
            background: isPine ? "#C7A14A" : "rgba(199,161,74,0.12)",
            color: isPine ? "#21271F" : "#B5862E",
            border: isPine ? "none" : "1px solid rgba(181,134,46,0.30)",
            fontSize: 10,
            fontWeight: 700,
            fontFamily: "var(--font-libre-franklin), sans-serif",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "4px 14px",
            borderRadius: 20,
            whiteSpace: "nowrap",
            zIndex: 2,
          }}
        >
          {tier.badge}
        </div>
      )}

      <div
        style={{
          background: isPine ? "#1E4D38" : "#FFFFFF",
          border: isPine
            ? "1.5px solid rgba(30,77,56,0.40)"
            : "1px solid rgba(27,42,33,0.10)",
          borderRadius: "var(--radius-card)",
          boxShadow: isPine ? "var(--shadow-pine)" : "var(--shadow-card)",
          padding: "36px 28px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "border-color 200ms",
        }}
      >
        {/* Model label */}
        <p
          style={{
            fontSize: 10,
            fontWeight: 600,
            fontFamily: "var(--font-libre-franklin), sans-serif",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: isPine ? "#9FBFAD" : "#B5862E",
            margin: "0 0 20px",
          }}
        >
          {tier.model}
        </p>

        {/* Name */}
        <h3
          style={{
            fontSize: 17,
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: isPine ? "#F1EEE2" : "#1B2A21",
            margin: "0 0 20px",
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
          }}
        >
          {tier.name}
        </h3>

        {/* Price + duration */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap", marginBottom: 24 }}>
          <span
            style={{
              fontSize: "clamp(28px, 3.8vw, 44px)",
              fontWeight: 500,
              fontFamily: "var(--font-newsreader), serif",
              color: isPine ? "#C7A14A" : "#1E4D38",
              letterSpacing: "-0.015em",
              lineHeight: 1,
            }}
          >
            {tier.price}
          </span>
          <span
            style={{
              fontSize: 12,
              color: isPine ? "#9FBFAD" : "#6E7B71",
              fontFamily: "var(--font-libre-franklin), sans-serif",
            }}
          >
            {tier.suffix}
          </span>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: isPine ? "rgba(241,238,226,0.10)" : "rgba(27,42,33,0.05)",
              border: `1px solid ${isPine ? "rgba(241,238,226,0.15)" : "rgba(27,42,33,0.10)"}`,
              borderRadius: "var(--radius-sm, 4px)",
              padding: "3px 10px",
            }}
          >
            <span style={{
              fontSize: 10,
              color: isPine ? "rgba(241,238,226,0.55)" : "#6E7B71",
              fontWeight: 500,
              fontFamily: "var(--font-libre-franklin), sans-serif",
            }}>
              {tier.duration}
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.65,
            color: isPine ? "#9FBFAD" : "#4A584E",
            margin: "0 0 28px",
            flex: 1,
          }}
        >
          {tier.description}
        </p>

        {/* CTA */}
        <Button
          variant={isPine ? "secondary" : "primary"}
          size="md"
          href="/get-started"
          style={{
            width: "100%",
            justifyContent: "center",
            marginTop: "auto",
            ...(isPine
              ? { background: "rgba(244,240,230,0.10)", color: "#F1EEE2", border: "1px solid rgba(241,238,226,0.22)" }
              : {}),
          } as React.CSSProperties}
        >
          {ctaLabel}
        </Button>
      </div>
    </motion.div>
  );
}

export default function PricingTiers() {
  const oneTime = PRICING_TIERS.filter((t) => !t.suffix.includes("month"));
  const ongoing = PRICING_TIERS.filter((t) => t.suffix.includes("month"));

  const groups = [
    { label: "One-Time Engagements", sublabel: "Diagnose, pilot, or deploy — pick your entry point", tiers: oneTime, cols: 3 },
    { label: "Ongoing Partnership", sublabel: "Sustained advisory and platform, billed monthly", tiers: ongoing, cols: 2 },
  ];

  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#F4F0E6",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Two groups */}
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {groups.map((group, gi) => (
            <div key={group.label}>
              {/* Group label bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    background: "rgba(30,77,56,0.07)",
                    border: "1px solid rgba(30,77,56,0.16)",
                    borderRadius: 20,
                    padding: "5px 14px",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      fontFamily: "var(--font-libre-franklin), sans-serif",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#1E4D38",
                    }}
                  >
                    {group.label}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 13,
                    fontStyle: "italic",
                    fontFamily: "var(--font-newsreader), serif",
                    color: "#6E7B71",
                  }}
                >
                  {group.sublabel}
                </span>
              </div>

              {/* Tier grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${group.cols}, 1fr)`,
                  gap: 20,
                  alignItems: "stretch",
                }}
                className="pricing-group-grid"
              >
                {group.tiers.map((tier, ti) => (
                  <TierCard key={tier.name} tier={tier} index={gi * 2 + ti} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Single footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            textAlign: "center",
            fontSize: 13,
            color: "#6E7B71",
            margin: "48px 0 0",
          }}
        >
          Audit fee credited toward Platform Launch within 90 days. Title III,
          HECAP, and state AI-fund grant language available on request.
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .pricing-group-grid { grid-template-columns: 1fr !important; max-width: 500px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
