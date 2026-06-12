import type { Metadata } from "next";
import PricingTiers from "@/components/sections/PricingTiers";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Pricing — Sophrosyne Systems",
  description:
    "Fixed-fee engagements with transparent pricing. Audit, advisory, and platform — your institution keeps 100% of the IP and software.",
};

function PricingHero() {
  return (
    <section
      style={{
        padding: "140px var(--pad-h) 80px",
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
          Engagement Fees
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 68px)",
            fontWeight: 500,
            fontFamily: "var(--font-newsreader), serif",
            color: "#1B2A21",
            margin: "0 0 24px",
            letterSpacing: "-0.015em",
            maxWidth: 720,
            lineHeight: 1.06,
          }}
        >
          Predictable fees. Defined scope.{" "}
          <em style={{ fontStyle: "italic", color: "#1E4D38" }}>
            Your institution keeps everything.
          </em>
        </h1>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.72,
            color: "#4A584E",
            maxWidth: 580,
            margin: 0,
          }}
        >
          Half the cost of a Big Three engagement — with a fixed fee, a defined
          scope, and 100% of the IP and software staying with your institution.
          Two tracks: a consulting track to prove ROI first, and a platform
          track when you are ready to deploy at scale.
        </p>
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingTiers />
      <CallToAction />
    </>
  );
}
