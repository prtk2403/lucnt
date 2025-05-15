import { Zap, BarChart2, Target, Edit3 } from "lucide-react";
export default function ProblemSolutionSection() {
    return (
      <section id="why-lucnt" className=" bg-gradient-to-bl from-primary/30 via-background to-backgroundpy-16 md:py-24 bg-secondary/20 ">
        <div className="container mx-auto px-6 flex flex-col items-center gap-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-accent mb-4">Tired of Content Chaos?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Managing multiple social platforms with different rules and audiences is exhausting. Generic content simply doesn&apos;t work. <span className="font-bold text-[#21e916]">lucnt.space</span> delivers the clarity you need.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold font-accent mb-3 text-[#21e916]">The Challenge: Dark, Fragmented Socials</h3>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Struggling to create unique content for X, LinkedIn, Instagram, etc.?</li>
                <li>Wasting hours tailoring posts for different character limits and tones?</li>
                <li>Unsure if your content truly resonates on each platform?</li>
                <li>Feeling overwhelmed by the ever-changing social media landscape?</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold font-accent mb-3 text-primary">The lucnt Solution: AI-Powered Clarity</h3>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li><Zap className="inline-block mr-2 text-primary" size={20} /> AI that understands the nuances of each social `&ldquo;space.`&ldquo;</li>
                <li><Edit3 className="inline-block mr-2 text-primary" size={20} /> Effortlessly generate platform-perfect posts, threads, and ideas.</li>
                <li><Target className="inline-block mr-2 text-primary" size={20} /> Achieve clarity and consistency across your entire social presence.</li>
                <li><BarChart2 className="inline-block mr-2 text-primary" size={20} /> Save time and amplify your impact with intelligent automation.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }