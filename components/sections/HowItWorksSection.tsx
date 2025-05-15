import { Users, Target, Zap, CheckCircle } from "lucide-react";
export default function HowItWorksSection() {
  const steps = [
    {
      title: "Link Your Worlds",
      description: "Securely connect your social platforms—X, LinkedIn, Instagram, Threads, Mastodon, and more—in just a few clicks.",
      icon: <Users className="size-10 text-[#21e916] mb-3" />
    },
    {
      title: "Define Your Voice",
      description: "Tell Lucnt who you are. Set your brand tone, goals, and audience. Lucnt aligns every post with your unique identity.",
      icon: <Target className="size-10 text-[#21e916] mb-3" />
    },
    {
      title: "Let the AI Craft Your Content",
      description: "Our proprietary Platform-Adaptive AI™ transforms your themes into platform-optimized content—intelligent, engaging, and tailored for each space.",
      icon: <Zap className="size-10 text-[#21e916] mb-3" />
    },
    {
      title: "Publish with Precision",
      description: "Easily review, tweak, and schedule content. Lucnt ensures every post hits the right audience at the perfect time.",
      icon: <CheckCircle className="size-10 text-[#21e916] mb-3" />
    }
  ];

  return (
    <section id="how-it-works" className=" bg-gradient-to-tr from-primary/30 via-background to-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-accent text-center mb-12">
          Step Into the Light: How lucnt Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border">
              <div className="flex justify-center items-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold font-accent mb-2 text-center">{index + 1}. {step.title}</h3>
              <p className="text-muted-foreground text-sm text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
