import Hero from "@/components/sections/Hero";
import ShowreelSection from "@/components/sections/ShowreelSection";
import TrustBar from "@/components/sections/TrustBar";
import BenefitsSection from "@/components/sections/BenefitsSection";
import WhySophrosyne from "@/components/sections/WhySophrosyne";
import AIFluencyFrameworkSection from "@/components/sections/AIFluencyFrameworkSection";
import PlatformSection from "@/components/sections/PlatformSection";
import AIMaturitySection from "@/components/sections/AIMaturitySection";
import JourneyTimeline from "@/components/sections/JourneyTimeline";
import AccreditorStrip from "@/components/sections/AccreditorStrip";
import FoundingCohort from "@/components/sections/FoundingCohort";
import CallToAction from "@/components/sections/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BenefitsSection />
      <AccreditorStrip background="#ECF1EC" />
      <ShowreelSection />
      <WhySophrosyne />
      <AIFluencyFrameworkSection />
      <PlatformSection />
      <AIMaturitySection />
      <JourneyTimeline />
      <FoundingCohort />
      <CallToAction />
    </>
  );
}
