
import { Calendar } from "lucide-react";

const updates = [
  {
    date: "February 17, 2025",
    title: "xAI's Grok 3 Now Available For Free",
    description: "Announcing the move on X, xAI posted 'The world's smartest AI, Grok 3, now available for free (until our servers melt).' This surprise decision comes just a day after the official launch of Grok 3, a model claimed to be 10 times more capable than its predecessor.",
  },
  {
    date: "February 12, 2025",
    title: "OpenAI's Major Roadmap Update",
    description: "Sam Altman announced a major roadmap update for OpenAI, revealing that GPT-4.5 (Orion) would be released soon, with GPT-5 following. This positions GPT-4.5 as OpenAI's final non-chain-of-thought model.",
  },
  {
    date: "February 1, 2025",
    title: "US-China AI Competition Intensifies",
    description: "Reports highlight the intensifying competition between the U.S. and China in AI, driven by China's launch of DeepSeek's R1 model. This has raised concerns among U.S. experts about maintaining competitive edge.",
  },
];

const Updates = () => {
  return (
    <section className="section-padding bg-neutral-200/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest AI Updates</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Stay informed with the latest developments in the world of artificial intelligence.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {updates.map((update, index) => (
            <article 
              key={index}
              className="glass-card hover-card rounded-xl p-6 animate-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
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
