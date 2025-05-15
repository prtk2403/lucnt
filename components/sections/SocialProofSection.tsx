import Image from "next/image";
export default function SocialProofSection() {
    // Placeholder - replace with real testimonials
    return (
      <section id="social-proof" className="bg-gradient-to-bl from-primary/30 via-background to-backgroundpy-16py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-accent text-center mb-12">
            Trusted by Creators & Brands Who Shine
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card p-6 rounded-lg shadow-md border border-border">
                <p className="text-muted-foreground mb-4">"Lucnt.space transformed how we approach social media. The platform-adaptive AI is a game-changer for our content's reach and engagement!"</p>
                <div className="flex items-center">
                  <Image src={"https://avatar.iran.liara.run/public"} alt="User avatar" width={40} height={40} className="rounded-full mr-3" />
                  <div>
                    <p className="font-semibold">User {i}</p>
                    <p className="text-sm text-muted-foreground">Marketing Manager, Tech Startup</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  