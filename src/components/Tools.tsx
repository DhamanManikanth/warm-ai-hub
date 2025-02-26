
import { Sparkles } from "lucide-react";

const tools = [
  {
    name: "Claude 3.5",
    description: "Known for its safety-first approach and interpretability, Claude 3.5 excels in handling nuanced conversations and complex reasoning tasks.",
    link: "https://www.anthropic.com/claude",
  },
  {
    name: "GPT-4.5 (Orion)",
    description: "OpenAI's latest model featuring enhanced writing, ideation, and creative capabilities, integrated with DALL-E 3 for seamless workflows.",
    link: "https://openai.com",
  },
  {
    name: "DeepSeek R1",
    description: "An innovative AI model leveraging cost-effective chips to deliver competitive performance, making advanced AI more accessible globally.",
    link: "https://deepseek.com",
  },
];

const Tools = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Tools Spotlight</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Discover powerful AI tools that can enhance your productivity and creativity.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.link}
              className="block group"
            >
              <article 
                className="glass-card hover-card rounded-xl p-6 h-full animate-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <p className="text-neutral-600">{tool.description}</p>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
