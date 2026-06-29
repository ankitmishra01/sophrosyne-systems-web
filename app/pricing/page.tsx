import type { Metadata } from "next";
import PricingHeroSection from "@/components/sections/PricingHeroSection";
import MarketContextSection from "@/components/sections/MarketContextSection";
import EngagementStepper from "@/components/sections/EngagementStepper";
import ComparisonTable from "@/components/sections/ComparisonTable";
import RoiCalculator from "@/components/sections/RoiCalculator";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Pricing — Sophrosyne Systems",
  description:
    "Fixed-fee consulting engagements with transparent pricing. Audit, advisory, and full program deployment. Your institution keeps 100% of the IP.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHeroSection />
      <MarketContextSection />
      <EngagementStepper />
      <ComparisonTable />
      <div id="roi"><RoiCalculator /></div>
      <CallToAction />
    </>
  );
}
