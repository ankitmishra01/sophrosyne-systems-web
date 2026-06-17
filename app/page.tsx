import Hero from "@/components/sections/Hero";
import ShowreelSection from "@/components/sections/ShowreelSection";
import TrustBar from "@/components/sections/TrustBar";
import WhySophrosyne from "@/components/sections/WhySophrosyne";
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
      <AccreditorStrip background="#ECF1EC" />
      <ShowreelSection />
      <WhySophrosyne />
      <AIMaturitySection />
      <JourneyTimeline />
      <FoundingCohort />
      <CallToAction />
    </>
  );
}
