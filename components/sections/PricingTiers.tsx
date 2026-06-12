"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PRICING_TIERS } from "@/lib/data";
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
          boxShadow: isPine
            ? "var(--shadow-pine)"
            : "var(--shadow-card)",
          padding: "36px 28px",
          height: "100%",
          transition: "border-color 200ms",
        }}
      >
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

        <div style={{ marginBottom: 8 }}>
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
              color: isPine ? "#9FBFAD" : "#8A968C",
              marginLeft: 6,
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
              marginLeft: 10,
            }}
          >
            <span style={{ fontSize: 10, color: isPine ? "rgba(241,238,226,0.55)" : "#8A968C", fontWeight: 500, fontFamily: "var(--font-libre-franklin), sans-serif" }}>
              {tier.duration}
            </span>
          </div>
        </div>

        {/* Big Three anchor */}
        <p
          style={{
            fontSize: 9,
            fontWeight: 700,
            fontFamily: "var(--font-libre-franklin), sans-serif",
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            color: isPine ? "rgba(201,217,206,0.50)" : "#A9B3AC",
            margin: "0 0 6px",
          }}
        >
          McKinsey · Bain · BCG equivalent
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
            margin: "0 0 16px",
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontFamily: "var(--font-newsreader), serif",
              color: isPine ? "rgba(201,217,206,0.65)" : "#8A968C",
              textDecoration: "line-through",
              textDecorationColor: isPine
                ? "rgba(199,161,74,0.65)"
                : "rgba(181,134,46,0.65)",
              letterSpacing: "-0.01em",
            }}
          >
            {tier.mbbEquivalent}
          </span>
          <span
            style={{
              fontSize: 9.5,
              fontWeight: 700,
              fontFamily: "var(--font-libre-franklin), sans-serif",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: isPine ? "#21271F" : "#1E4D38",
              background: isPine ? "#C7A14A" : "rgba(30,77,56,0.08)",
              border: `1px solid ${
                isPine ? "transparent" : "rgba(30,77,56,0.18)"
              }`,
              borderRadius: 20,
              padding: "3px 10px",
            }}
          >
            {tier.savingsLabel}
          </span>
        </div>

        <p
          style={{
            fontSize: 11,
            color: isPine ? "rgba(199,161,74,0.80)" : "#B5862E",
            margin: "0 0 14px",
            fontFamily: "var(--font-libre-franklin), sans-serif",
            fontStyle: "italic",
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
              background: isPine ? "rgba(199,161,74,0.12)" : "rgba(30,77,56,0.06)",
              border: `1px solid ${isPine ? "rgba(199,161,74,0.28)" : "rgba(30,77,56,0.18)"}`,
              borderRadius: 20,
              padding: "3px 10px",
              marginBottom: 14,
            }}
          >
            <span
              style={{
                fontSize: 9,
                fontWeight: 700,
                fontFamily: "var(--font-libre-franklin), sans-serif",
                color: isPine ? "#C7A14A" : "#1E4D38",
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
            background: isPine ? "rgba(241,238,226,0.12)" : "rgba(27,42,33,0.08)",
            marginBottom: 20,
          }}
        />

        <p
          style={{
            fontSize: 13,
            lineHeight: 1.65,
            color: isPine ? "#9FBFAD" : "#4A584E",
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
                color: isPine ? "rgba(201,217,206,0.80)" : "#4A584E",
                lineHeight: 1.5,
              }}
            >
              <CheckCircle2
                size={14}
                color={isPine ? "#9FBFAD" : "#1E4D38"}
                strokeWidth={2}
                style={{ flexShrink: 0, marginTop: 1 }}
              />
              {f}
            </li>
          ))}
        </ul>

        <Button
          variant={isPine ? "secondary" : "primary"}
          size="md"
          href="/get-started"
          style={{
            width: "100%",
            justifyContent: "center",
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
          style={{ marginBottom: 56 }}
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
            Big-Three Transformation, Without the Big-Three Invoice
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
            Half the cost. All the software.{" "}
            <em style={{ fontStyle: "italic", color: "#1E4D38" }}>
              The IP stays yours.
            </em>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#4A584E",
              maxWidth: 580,
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            A McKinsey or Bain transformation runs into the millions and leaves
            you a slide deck. Sophrosyne delivers the diagnostic, the platform,
            and the curriculum for roughly half the cost — and your institution
            keeps 100% of the software and IP. Two tracks: prove savings with
            consulting first, or deploy the full platform from day one.
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
                    background: "rgba(30,77,56,0.07)",
                    border: "1px solid rgba(30,77,56,0.16)",
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
                    color: "#8A968C",
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
            color: "#8A968C",
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
