import Hero from "@/components/sections/Hero";
import ShowreelSection from "@/components/sections/ShowreelSection";
import TrustBar from "@/components/sections/TrustBar";
import WhySophrosyne from "@/components/sections/WhySophrosyne";
import FluencyTracker from "@/components/sections/FluencyTracker";
import JourneyTimeline from "@/components/sections/JourneyTimeline";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ShowreelSection />
      <WhySophrosyne />
      <FluencyTracker />
      <JourneyTimeline />
    </>
  );
}
