"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PRICING_TIERS } from "@/lib/data";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function PricingTiers() {
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
            Transparent Pricing
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
            Three ways to engage.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(248,250,252,0.5)",
              maxWidth: 520,
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            No opaque contracts. No licensing traps. Every engagement model is
            designed around predictable budgeting and total IP ownership.
          </p>
        </motion.div>

        {/* Tiers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            alignItems: "start",
          }}
          className="pricing-grid"
        >
          {PRICING_TIERS.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.65,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ position: "relative" }}
            >
              {/* Featured badge */}
              {tier.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#10b981",
                    color: "#0a0f1a",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "4px 14px",
                    borderRadius: 20,
                    whiteSpace: "nowrap",
                    zIndex: 2,
                    boxShadow: "0 0 20px rgba(16,185,129,0.4)",
                  }}
                >
                  {tier.badge}
                </div>
              )}

              <Card
                highlight={tier.highlighted}
                style={{
                  padding: "36px 28px",
                  ...(tier.highlighted
                    ? { boxShadow: "0 0 0 1px rgba(16,185,129,0.15), 0 32px 80px rgba(0,0,0,0.4)" }
                    : {}),
                }}
              >
                {/* Model label */}
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: tier.highlighted
                      ? "#10b981"
                      : "rgba(248,250,252,0.38)",
                    margin: "0 0 20px",
                  }}
                >
                  {tier.model}
                </p>

                {/* Tier name */}
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

                {/* Price */}
                <div style={{ marginBottom: 20 }}>
                  <span
                    style={{
                      fontSize: "clamp(32px, 4vw, 46px)",
                      fontWeight: 800,
                      color: tier.highlighted ? "#10b981" : "#f8fafc",
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                    }}
                  >
                    {tier.price}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      color: "rgba(248,250,252,0.38)",
                      marginLeft: 6,
                    }}
                  >
                    {tier.suffix}
                  </span>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      background: "rgba(248,250,252,0.04)",
                      border: "1px solid rgba(248,250,252,0.07)",
                      borderRadius: 20,
                      padding: "3px 10px",
                      marginLeft: 10,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        color: "rgba(248,250,252,0.45)",
                        fontWeight: 500,
                      }}
                    >
                      {tier.duration}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: 1,
                    background: tier.highlighted
                      ? "rgba(16,185,129,0.15)"
                      : "rgba(248,250,252,0.06)",
                    marginBottom: 20,
                  }}
                />

                {/* Description */}
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

                {/* Features */}
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
                  href="/about"
                  style={{ width: "100%", justifyContent: "center" } as React.CSSProperties}
                >
                  {i === 0 ? "Book the Audit" : i === 1 ? "Start the Build" : "Get Started"}
                </Button>
              </Card>
            </motion.div>
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
            margin: "40px 0 0",
          }}
        >
          All engagements begin with the AI Readiness & Ecosystem Audit. Custom
          scopes available for multi-campus deployments.
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 500px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
