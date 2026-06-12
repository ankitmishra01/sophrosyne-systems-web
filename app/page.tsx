import Hero from "@/components/sections/Hero";
import ShowreelSection from "@/components/sections/ShowreelSection";
import TrustBar from "@/components/sections/TrustBar";
import WhySophrosyne from "@/components/sections/WhySophrosyne";
import OpExSection from "@/components/sections/OpExSection";
import FluencyTracker from "@/components/sections/FluencyTracker";
import JourneyTimeline from "@/components/sections/JourneyTimeline";
import SolutionsOverview from "@/components/sections/SolutionsOverview";
import AccreditorStrip from "@/components/sections/AccreditorStrip";
import FoundingCohort from "@/components/sections/FoundingCohort";
import ComparisonTable from "@/components/sections/ComparisonTable";
import CallToAction from "@/components/sections/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AccreditorStrip background="#ECF1EC" />
      <ShowreelSection />
      <WhySophrosyne />
      <OpExSection />
      <FluencyTracker />
      <JourneyTimeline />
      <FoundingCohort />
      <SolutionsOverview />
      <ComparisonTable />
      <CallToAction />
    </>
  );
}
