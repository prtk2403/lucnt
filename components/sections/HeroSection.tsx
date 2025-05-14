import Link from "next/link";
import { ShimmerButton } from "../magicui/shimmer-button";

export default function HeroSection() {
    return (
      <section id="hero" className="py-20 md:py-32 text-center relative overflow-hidden">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold font-accent leading-tight mb-6">
            Illuminate Your Social Strategy.
            <br />
            <span className="text-[#21e916]">Conquer Every Platform</span> with AI.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Lucnt.space is your AI-powered content co-pilot, bringing clarity and precision to your social media.
            Craft perfectly adapted content for each unique platform, effortlessly.
          </p>
          <ShimmerButton
            shimmerColor="#21e916"
            background="oklch(var(--primary))" // Use Tailwind primary color
            className="px-8 py-4 text-lg font-semibold"
          >
            <Link href="/signup">Start Illuminating for Free</Link>
          </ShimmerButton>
          <p className="mt-4 text-sm text-muted-foreground">No credit card required. Unlock your content's true potential.</p>
        </div>
        {/* Optional: Add a subtle visual element here, maybe related to light or space */}
      </section>
    );
  }