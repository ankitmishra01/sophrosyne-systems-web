import type { Metadata } from "next";
import RevenueModel from "@/components/sections/RevenueModel";
import PricingTiers from "@/components/sections/PricingTiers";
import Accordion from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing — Sophrosyne Systems",
  description:
    "Transparent pricing for the Sophrosyne ecosystem. AI Readiness Audit, Foundry & Platform Launch, and Institutional Scale Retainer. No licensing traps, 100% IP ownership.",
};

function PricingHero() {
  return (
    <section
      style={{
        padding: "140px var(--pad-h) 0",
        background:
          "radial-gradient(ellipse 50% 60% at 15% 50%, rgba(16,185,129,0.055) 0%, transparent 65%) #0a0f1a",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#10b981",
            margin: "0 0 18px",
          }}
        >
          Financial Transparency
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 68px)",
            fontWeight: 700,
            color: "#f8fafc",
            margin: "0 0 20px",
            letterSpacing: "-0.03em",
            maxWidth: 720,
            lineHeight: 1.04,
          }}
        >
          Predictable budgets. Complete IP ownership. No surprises.
        </h1>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.68,
            color: "rgba(248,250,252,0.55)",
            maxWidth: 560,
            margin: 0,
          }}
        >
          Sophrosyne's engagement models are structured around three pillars of
          value: operational cost reduction, AI fluency programme deployment,
          and entrepreneurial ecosystem development. Every tier is designed so
          your CFO can forecast accurately and your leadership can present
          verified outcomes to your board, accreditors, and employer partners.
        </p>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section
      style={{
        padding: "var(--section-py) var(--pad-h)",
        background: "#0a0f1a",
        borderTop: "1px solid rgba(248,250,252,0.04)",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
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
          Common Questions
        </p>
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 40px)",
            fontWeight: 700,
            color: "#f8fafc",
            margin: "0 0 40px",
            letterSpacing: "-0.025em",
          }}
        >
          Frequently asked questions.
        </h2>
        <Accordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <RevenueModel />
      <PricingTiers />
      <FaqSection />
    </>
  );
}
