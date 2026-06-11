"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PRICING_TIERS } from "@/lib/data";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const CTA_MAP: Record<string, string> = {
  "AI & OpEx Readiness Audit": "Book the Audit",
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
            background: tier.highlighted ? "#10b981" : "rgba(16,185,129,0.15)",
            color: tier.highlighted ? "#0a0f1a" : "#10b981",
            border: tier.highlighted ? "none" : "1px solid rgba(16,185,129,0.3)",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "4px 14px",
            borderRadius: 20,
            whiteSpace: "nowrap",
            zIndex: 2,
            boxShadow: tier.highlighted ? "0 0 20px rgba(16,185,129,0.4)" : "none",
          }}
        >
          {tier.badge}
        </div>
      )}

      <Card
        highlight={tier.highlighted}
        style={{
          padding: "36px 28px",
          height: "100%",
          ...(tier.highlighted
            ? { boxShadow: "0 0 0 1px rgba(16,185,129,0.15), 0 32px 80px rgba(0,0,0,0.4)" }
            : {}),
        }}
      >
        <p
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: tier.highlighted ? "#10b981" : "rgba(248,250,252,0.38)",
            margin: "0 0 20px",
          }}
        >
          {tier.model}
        </p>

        <h3
          style={{
            fontSize: 17,
            fontWeight: 700,
            color: "#f8fafc",
            margin: "0 0 20px",
            letterSpacing: "-0.02em",
            lineHeight: 1.3,
          }}
        >
          {tier.name}
        </h3>

        <div style={{ marginBottom: 8 }}>
          <span
            style={{
              fontSize: "clamp(28px, 3.8vw, 44px)",
              fontWeight: 700,
              color: tier.highlighted ? "#10b981" : "#f4f5f8",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              fontFamily: "var(--font-geist-mono), monospace",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {tier.price}
          </span>
          <span
            style={{
              fontSize: 12,
              color: "rgba(244,245,248,0.35)",
              marginLeft: 6,
              fontFamily: "var(--font-geist-sans), sans-serif",
            }}
          >
            {tier.suffix}
          </span>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "var(--radius-sm, 4px)",
              padding: "3px 10px",
              marginLeft: 10,
            }}
          >
            <span style={{ fontSize: 10, color: "rgba(244,245,248,0.42)", fontWeight: 500 }}>
              {tier.duration}
            </span>
          </div>
        </div>

        <p
          style={{
            fontSize: 11,
            color: "rgba(16,185,129,0.7)",
            margin: "0 0 14px",
            fontFamily: "var(--font-geist-mono), monospace",
          }}
        >
          {tier.perStudentNote}
        </p>

        {tier.grantEligible && (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.22)",
              borderRadius: 20,
              padding: "3px 10px",
              marginBottom: 14,
            }}
          >
            <span
              style={{
                fontSize: 9,
                fontWeight: 700,
                color: "#10b981",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Title III / HECAP Eligible
            </span>
          </div>
        )}

        <div
          style={{
            height: 1,
            background: tier.highlighted ? "rgba(16,185,129,0.15)" : "rgba(248,250,252,0.06)",
            marginBottom: 20,
          }}
        />

        <p
          style={{
            fontSize: 13,
            lineHeight: 1.65,
            color: "rgba(248,250,252,0.52)",
            margin: "0 0 24px",
          }}
        >
          {tier.description}
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 28px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {tier.features.map((f, fi) => (
            <li
              key={fi}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 9,
                fontSize: 13,
                color: "rgba(248,250,252,0.65)",
                lineHeight: 1.5,
              }}
            >
              <CheckCircle2
                size={14}
                color="#10b981"
                strokeWidth={2}
                style={{ flexShrink: 0, marginTop: 1 }}
              />
              {f}
            </li>
          ))}
        </ul>

        <Button
          variant={tier.highlighted ? "primary" : "secondary"}
          size="md"
          href="/get-started"
          style={{ width: "100%", justifyContent: "center" } as React.CSSProperties}
        >
          {ctaLabel}
        </Button>
      </Card>
    </motion.div>
  );
}

export default function PricingTiers() {
  const consultingTiers = PRICING_TIERS.filter((t) => t.group === "consulting");
  const techTiers = PRICING_TIERS.filter((t) => t.group === "technology");

  const groups = [
    { label: "Consulting", sublabel: "Identify savings before you commit to technology", tiers: consultingTiers },
    { label: "Technology Platform", sublabel: "Full campus deployment with embedded advisory", tiers: techTiers },
  ];

  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#0a0f1a",
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
            Pricing for Institutions Under Pressure
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 700,
              color: "#f8fafc",
              margin: "0 0 16px",
              letterSpacing: "-0.025em",
            }}
          >
            Four ways to engage.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(248,250,252,0.5)",
              maxWidth: 560,
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Two tracks: start with consulting to identify and prove savings, or
            deploy the full platform from day one. No lock-in at any stage.
          </p>
        </motion.div>

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
                    background: "rgba(16,185,129,0.08)",
                    border: "1px solid rgba(16,185,129,0.2)",
                    borderRadius: 20,
                    padding: "5px 14px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#10b981",
                    }}
                  >
                    {group.label}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 13,
                    color: "rgba(248,250,252,0.35)",
                    fontStyle: "italic",
                  }}
                >
                  {group.sublabel}
                </span>
              </div>

              {/* Tier grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 20,
                  alignItems: "start",
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

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            textAlign: "center",
            fontSize: 13,
            color: "rgba(248,250,252,0.28)",
            margin: "48px 0 0",
          }}
        >
          Audit fee credited toward Platform Launch within 90 days. Split-pay available on all tiers.
          Title III, HECAP, and SNAP grant language available on request.
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
