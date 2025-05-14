import { CheckCircle, Zap, BarChart2, Users, Target, Edit3, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
export default function HowItWorksSection() {
  const steps = [
    {
      title: "Connect Your Spaces",
      description: "Securely link your social media accounts – X, LinkedIn, Instagram, and more.",
      icon: <Users className="size-10 text-[#21e916] mb-3" />
    },
    {
      title: "Define Your Brilliance",
      description: "Tell Lucnt about your brand, goals, and target audience. Set your core themes.",
      icon: <Target className="size-10 text-[#21e916] mb-3" />
    },
    {
      title: "Illuminate & Create",
      description: "Our Platform-Adaptive AI™ generates and refines content tailored for each unique space.",
      icon: <Zap className="size-10 text-[#21e916] mb-3" />
    },
    {
      title: "Publish with Precision",
      description: "Review, schedule, and post your perfectly crafted content with confidence.",
      icon: <CheckCircle className="size-10 text-[#21e916] mb-3" />
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-accent text-center mb-12">
          Step Into the Light: How Lucnt Works
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
