import Navbar from "@/components/Navbar";
import { HeroSection, ProblemSolutionSection, HowItWorksSection, FeaturesSection, IlluminatedSpacesSection, SocialProofSection, PricingTeaserSection, FinalCTASection } from "@/components/sections";
import Footer from "@/components/Footer";
import Image from "next/image";
// Placeholder for icons or images for platforms


export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Subtle background pattern using abstract.svg or a new one */}
      <div
        className="absolute inset-0 z-[-1] opacity-[0.03]"
        style={{
          backgroundImage: "url(/abstract.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      />
      
      <Navbar />
      <div className="pt-20">
         {/* Adjust padding-top based on Navbar height */}
         <Image src="abstract.svg" alt="lucnt.space logo" width={20} height={20} className="mr-2 filter-green" />
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




