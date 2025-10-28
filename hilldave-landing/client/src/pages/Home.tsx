import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Credibility from "@/components/sections/Credibility";
import TheShift from "@/components/sections/TheShift";
import TheApproach from "@/components/sections/TheApproach";
import TheWork from "@/components/sections/TheWork";
import EngagementModel from "@/components/sections/EngagementModel";
import Considerations from "@/components/sections/Considerations";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <Hero />
        <Credibility />
        <TheShift />
        <TheApproach />
        <TheWork />
        <EngagementModel />
        <Considerations />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
