import Navbar from "@/components/Navbar";
import { HeroSection, ProblemSolutionSection, HowItWorksSection, FeaturesSection, IlluminatedSpacesSection, SocialProofSection, PricingTeaserSection, FinalCTASection } from "@/components/sections";
import Footer from "@/components/Footer";
// Placeholder for icons or images for platforms


export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">  
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <FeaturesSection />
        <IlluminatedSpacesSection />
        <SocialProofSection />
        <PricingTeaserSection />
        <FinalCTASection />
        <Footer />
      </div>
    </main>
  );
}

