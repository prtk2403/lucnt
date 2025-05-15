import { Button } from "../ui/button";
import Link from "next/link";
export default function FinalCTASection() {
    return (
      <section id="final-cta" className="py-20 md:py-32 bg-gradient-to-br from-primary/30 via-background to-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-accent mb-6">
            Ready to Illuminate Your Social Presence?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Stop guessing, start strategizing. Let Lucnt.space AI be the guiding light for your
            platform-perfect content.
          </p>
          <Button className="bg-primary text-lg p-6 text-primary-foreground hover:bg-primary/90">
            <Link href="/signup">Claim Your Free Account Now</Link>
          </Button>
          
          <p className="mt-4 text-sm text-muted-foreground">Join thousands of users lighting up their social media.</p>
        </div>
      </section>
    );
  }
  