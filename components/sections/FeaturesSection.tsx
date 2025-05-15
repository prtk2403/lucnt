import { CheckCircle, Zap, BarChart2, Users, Target, Edit3, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

export default function FeaturesSection() {
    const features = [
      {
        icon: <Zap className="size-8 text-primary" />,
        title: "Platform-Adaptive AI™",
        description: "Our core intelligence. Lucnt doesn't just write; it adapts, ensuring your message shines brightly and appropriately in every unique social environment.",
        keywords: "platform-adaptive AI, content tailoring, social media AI"
      },
      {
        icon: <Edit3 className="size-8 text-primary" />,
        title: "AI Content Generation & Ideation",
        description: "Spark creativity with AI-driven topic suggestions, headline generation, and full post/thread creation. Overcome writer's block and fill your content calendar.",
        keywords: "AI content creation, tweet generator, thread generator, content ideas"
      },
      {
        icon: <Target className="size-8 text-primary" />,
        title: "Clarity-Driven Optimization",
        description: "Beyond generation, our AI refines your content for maximum clarity, engagement, and platform-specific best practices (e.g., hashtags, tone, length).",
        keywords: "content optimization, social media strategy, engagement boost"
      },
      {
        icon: <Users className="size-8 text-primary" />,
        title: "Unified Content Hub",
        description: "Manage all your social media 'spaces' from one intuitive dashboard. Plan, create, and schedule content without the platform-switching headache.",
        keywords: "social media dashboard, content management system, unified platform"
      },
      {
        icon: <BarChart2 className="size-8 text-primary" />,
        title: "Insightful Analytics (Coming Soon)",
        description: "Illuminate your performance. Understand what's working in each space with clear, actionable analytics to continuously refine your strategy.",
        keywords: "social media analytics, performance tracking, content insights"
      },
      {
        icon: <CheckCircle className="size-8 text-primary" />,
        title: "Seamless Scheduling",
        description: "Plan your content in advance and let Lucnt handle the posting, ensuring consistent presence across all your illuminated spaces.",
        keywords: "social media scheduling, content automation, post scheduling"
      }
    ];
  
    return (
      <section id="features" className="bg-gradient-to-br from-primary/30 via-background to-backgroundpy-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-accent text-center mb-12">
            Features That Illuminate Your Path
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border flex flex-col">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="ml-3 text-xl font-semibold font-accent">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm flex-grow">{feature.description}</p>
                <p className="text-xs text-muted-foreground/50 mt-3">Keywords: {feature.keywords}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  