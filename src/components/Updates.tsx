
import { Calendar, Zap, Sparkles, Lightbulb } from "lucide-react";

const updates = [
  {
    date: "February 17, 2025",
    title: "xAI's Grok 3 Now Available For Free",
    description: "Announcing the move on X, xAI posted 'The world's smartest AI, Grok 3, now available for free (until our servers melt).' This surprise decision comes just a day after the official launch of Grok 3, a model claimed to be 10 times more capable than its predecessor.",
    icon: <Zap className="w-10 h-10 text-amber-500" />,
    color: "from-amber-400/20 to-orange-400/20"
  },
  {
    date: "February 12, 2025",
    title: "OpenAI's Major Roadmap Update",
    description: "Sam Altman announced a major roadmap update for OpenAI, revealing that GPT-4.5 (Orion) would be released soon, with GPT-5 following. This positions GPT-4.5 as OpenAI's final non-chain-of-thought model.",
    icon: <Sparkles className="w-10 h-10 text-purple-500" />,
    color: "from-purple-400/20 to-indigo-400/20"
  },
  {
    date: "February 1, 2025",
    title: "US-China AI Competition Intensifies",
    description: "Reports highlight the intensifying competition between the U.S. and China in AI, driven by China's launch of DeepSeek's R1 model. This has raised concerns among U.S. experts about maintaining competitive edge.",
    icon: <Lightbulb className="w-10 h-10 text-teal-500" />,
    color: "from-teal-400/20 to-cyan-400/20"
  },
];

const Updates = () => {
  return (
    <section className="section-padding colorful-section">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-800 font-medium mb-4">Latest News</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow">Latest AI Updates</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Stay informed with the latest developments in the world of artificial intelligence.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {updates.map((update, index) => (
            <article 
              key={index}
              className="glass-card card-shine hover-card rounded-xl p-6 animate-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`p-4 rounded-lg bg-gradient-to-br ${update.color} mb-4 inline-block`}>
                {update.icon}
              </div>
              <div className="flex items-center text-primary mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <time className="text-sm">{update.date}</time>
              </div>
              <h3 className="text-xl font-bold mb-2">{update.title}</h3>
              <p className="text-neutral-600">{update.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Updates;
