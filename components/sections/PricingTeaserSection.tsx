import Link from "next/link";
import { Button } from "../ui/button";

export default function PricingTeaserSection() {
    return (
      <section id="pricing" className="py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-accent mb-4">
            Clear Pricing for Clear Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Choose a plan that fits your needs and start illuminating your social media presence today.
            No hidden fees, just transparent value.
          </p>
          <Button variant="outline" size="lg" className="font-semibold text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/pricing">View Pricing Plans</Link>
          </Button>
        </div>
      </section>
    );
  }