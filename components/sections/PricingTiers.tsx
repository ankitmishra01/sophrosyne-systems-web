"use client";

import { motion } from "framer-motion";
import { PRICING_TIERS } from "@/lib/data";
import Button from "@/components/ui/Button";

const CTA_MAP: Record<string, string> = {
  "AI & OpEx Readiness Audit": "Book the Audit",
  "90-Day Pillar Pilot": "Start a Pilot",
  "Foundry & Platform Launch": "Start the Build",
  "OpEx Transformation Advisory": "Start Advisory",
  "Institutional Scale Retainer & Platform License": "Get Started",
};

function EngagementRow({
  tier,
  index,
}: {
  tier: (typeof PRICING_TIERS)[number];
  index: number;
}) {
  const ctaLabel = CTA_MAP[tier.name] ?? "Get Started";
  const durationLine = [tier.suffix, tier.duration].filter(Boolean).join(" · ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="engagement-row"
      style={{
        display: "flex",
        gap: 48,
        padding: "36px 0",
        borderTop: "1px solid rgba(27,42,33,0.10)",
      }}
    >
      {/* Left: model label, name, description */}
      <div style={{ flex: "1 1 0", minWidth: 0 }}>
        <p
          style={{
            fontSize: 10,
            fontWeight: 700,
            fontFamily: "var(--font-libre-franklin), sans-serif",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#B5862E",
            margin: "0 0 10px",
          }}
        >
          {tier.model}
        </p>
        <h3
          style={{
            fontSize: 22,
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: "#1B2A21",
            margin: "0 0 14px",
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
          }}
        >
          {tier.name}
        </h3>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.7,
            color: "#4A584E",
            margin: 0,
          }}
        >
          {tier.description}
        </p>
      </div>

      {/* Right: price, duration, CTA */}
      <div
        className="engagement-row-aside"
        style={{
          flex: "0 0 220px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 6,
        }}
      >
        <p
          style={{
            fontSize: 34,
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: "#1E4D38",
            letterSpacing: "-0.02em",
            margin: 0,
            lineHeight: 1,
          }}
        >
          {tier.price}
        </p>
        <p
          style={{
            fontSize: 12,
            color: "#6E7B71",
            fontFamily: "var(--font-libre-franklin), sans-serif",
            margin: 0,
          }}
        >
          {durationLine}
        </p>
        <div style={{ marginTop: 12 }}>
          <Button variant="primary" size="sm" href="/get-started">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default function PricingTiers() {
  const oneTime = PRICING_TIERS.filter((t) => !t.suffix.includes("month"));
  const ongoing = PRICING_TIERS.filter((t) => t.suffix.includes("month"));

  const groups = [
    { label: "One-Time Engagements", tiers: oneTime, offset: 0 },
    { label: "Ongoing Partnership", tiers: ongoing, offset: oneTime.length },
  ];

  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#F4F0E6",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          {groups.map((group) => (
            <div key={group.label}>
              {/* Group heading — plain text, no pill */}
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: "var(--font-libre-franklin), sans-serif",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#6E7B71",
                  margin: "0 0 0",
                }}
              >
                {group.label}
              </p>

              {/* Engagement rows */}
              {group.tiers.map((tier, i) => (
                <EngagementRow
                  key={tier.name}
                  tier={tier}
                  index={group.offset + i}
                />
              ))}

              {/* Closing rule */}
              <div
                style={{ borderBottom: "1px solid rgba(27,42,33,0.10)" }}
              />
            </div>
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: 13,
            color: "#6E7B71",
            margin: "48px 0 0",
            fontFamily: "var(--font-libre-franklin), sans-serif",
          }}
        >
          Audit fee credited toward Platform Launch within 90 days. Title III,
          HECAP, and state AI-fund grant language available on request.
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .engagement-row {
            flex-direction: column !important;
            gap: 20px !important;
          }
          .engagement-row-aside {
            align-items: flex-start !important;
            flex: unset !important;
          }
        }
      `}</style>
    </section>
  );
}
