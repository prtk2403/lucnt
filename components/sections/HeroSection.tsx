import Link from "next/link";
import { Button } from "../ui/button";
import { ShimmerButton } from "../magicui/shimmer-button";

export default function HeroSection() {
    return (
      <section id="hero" className=" bg-gradient-to-tl from-primary/30 via-background to-background py-20 md:py-32 text-center relative overflow-hidden">
      
        <div className="container mx-auto px-6 flex flex-col items-center" >
          <ShimmerButton className="mb-5 text-sm rounded-full p-2 pl-4 pr-4">
            Coming Soon
          </ShimmerButton>
          <h1 className="text-5xl md:text-7xl font-bold font-accent leading-tight mb-6">
          Smarter Social Media starts here.
            <br />
            <span className="text-[#21e916]">Write once. Optimize everywhere.</span> 
            <br />
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          lucnt.space brings AI-driven clarity to your social media presence across platforms—so you can focus on strategy, not stress.
          </p>
          <div className=" flex justify-center gap-4">

          <Button className="bg-primary text-lg p-6 text-primary-foreground hover:bg-primary/90">

            <Link href="/signup">Get Started for Free </Link>
          </Button>
          <Button className="bg-[#1a1a1a] text-lg p-6 text-gray-50 hover:bg-[#1a1a1a]/90">

            <Link href="#demo">Explore Features</Link>
          </Button>
          
          </div>
          <p className="mt-4 text-sm text-muted-foreground">No credit card required . Unlock your content&apos;s true potential. *</p>
        </div>
        {/* Optional: Add a subtle visual element here, maybe related to light or space */}
      </section>
    );
  }