import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

const PlatformIcons = {
    X: Twitter,
    LinkedIn: Linkedin,
    Instagram: Instagram,
    Facebook: Facebook,
    // Add more as needed
  };
export default function IlluminatedSpacesSection() {
    const platforms = [
      { name: "X (Twitter)", description: "Craft viral threads and punchy tweets that capture attention in the fast-paced X environment. Our AI understands the art of brevity and impact.", icon: PlatformIcons.X, keywords: "X content strategy, Twitter AI, thread generator AI" },
      { name: "LinkedIn", description: "Polish professional posts, articles, and company updates. Lucnt helps you build authority and engage your network with insightful, industry-relevant content.", icon: PlatformIcons.LinkedIn, keywords: "LinkedIn content AI, professional networking, thought leadership" },
      { name: "Instagram", description: "Generate captivating captions, story ideas, and hashtag strategies that make your visuals pop. Connect with your audience through compelling narratives.", icon: PlatformIcons.Instagram, keywords: "Instagram content generator, visual storytelling, hashtag AI" },
      { name: "Facebook", description: "Create diverse content from engaging community posts to informative updates, optimized for Facebook's unique algorithm and audience interactions.", icon: PlatformIcons.Facebook, keywords: "Facebook content AI, community engagement, Facebook marketing" },
    ];
  
    return (
      <section id="platforms" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-accent text-center mb-4">
            Explore Your Illuminated Spaces
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Each social platform is a unique environment. Lucnt.space provides the specialized AI to make your content native and effective in every space.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform) => {
              const IconComponent = platform.icon;
              return (
                <div key={platform.name} className="bg-card p-6 rounded-lg shadow-lg border border-border">
                  <div className="flex items-center mb-3">
                    <IconComponent className="size-7 text-[#21e916] mr-3" />
                    <h3 className="text-2xl font-semibold font-accent">{platform.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{platform.description}</p>
                  <p className="text-xs text-muted-foreground/50">Keywords: {platform.keywords}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }