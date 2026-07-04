import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import AccreditorStrip from "@/components/sections/AccreditorStrip";
import WhySophrosyne from "@/components/sections/WhySophrosyne";
import BenefitsSection from "@/components/sections/BenefitsSection";
import AIMaturitySection from "@/components/sections/AIMaturitySection";
import FoundingCohort from "@/components/sections/FoundingCohort";
import CallToAction from "@/components/sections/CallToAction";

// Lean overview homepage: hero → proof → the two routers (three pillars → Solutions,
// by-role cards → /for/*) → maturity arc → founding cohort → CTA. Deep content
// (the Fluency Tracker, the AI Fluency Standard, the platform, engagement phases)
// lives on its sub-pages, which these sections link into rather than duplicate.
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AccreditorStrip background="#ECF1EC" />
      <WhySophrosyne />
      <BenefitsSection />
      <AIMaturitySection />
      <FoundingCohort />
      <CallToAction />
    </>
  );
}
