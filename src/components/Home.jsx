import AboutSection from "./About";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import MissionSection from "./MissionSection";
import Navbar from "./Navbar";
import TeamSection from "./TeamSection";
import WhyChooseUsSection from "./WhyChooseUs";
import ImpactSection from "./ImpactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ImpactSection />
      <TeamSection />
      <WhyChooseUsSection />
      
      
    </main>
  )
}
