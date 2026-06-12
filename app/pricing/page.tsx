import type { Metadata } from "next";
import RevenueModel from "@/components/sections/RevenueModel";
import PricingTiers from "@/components/sections/PricingTiers";
import EnrollmentBands from "@/components/sections/EnrollmentBands";
import SavingsGuarantee from "@/components/sections/SavingsGuarantee";
import GrantFunding from "@/components/sections/GrantFunding";
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
          "radial-gradient(ellipse 80% 60% at 15% 50%, #ECF1EC 0%, #F4F0E6 60%)",
      }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            fontFamily: "var(--font-libre-franklin), sans-serif",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#B5862E",
            margin: "0 0 18px",
          }}
        >
          Financial Transparency
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 68px)",
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: "#1B2A21",
            margin: "0 0 20px",
            letterSpacing: "-0.015em",
            maxWidth: 720,
            lineHeight: 1.06,
          }}
        >
          Predictable budgets. Complete IP ownership. No surprises.
        </h1>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.72,
            color: "#4A584E",
            maxWidth: 560,
            margin: 0,
          }}
        >
          Sophrosyne operates on two tracks: a consulting track — audit and
          operational advisory — for institutions that need to prove ROI before
          committing to technology; and a technology platform track for
          institutions ready to deploy. Both tracks are structured around
          predictable budgeting, total IP ownership, and verified outcomes for
          your board, accreditors, and employer partners.
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
        background: "#F4F0E6",
        borderTop: "1px solid rgba(27,42,33,0.07)",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
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
          Common Questions
        </p>
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 40px)",
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: "#1B2A21",
            margin: "0 0 40px",
            letterSpacing: "-0.012em",
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
      <EnrollmentBands />
      <SavingsGuarantee />
      <GrantFunding />
      <FaqSection />
    </>
  );
}
