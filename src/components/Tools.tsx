
import { Sparkles, Wand2, Bot, Brain } from "lucide-react";

const tools = [
  {
    name: "Claude 3.5",
    description: "Known for its safety-first approach and interpretability, Claude 3.5 excels in handling nuanced conversations and complex reasoning tasks.",
    link: "https://www.anthropic.com/claude",
    icon: <Bot className="w-8 h-8 text-indigo-500" />,
    color: "from-indigo-400/20 to-blue-400/20"
  },
  {
    name: "GPT-4.5 (Orion)",
    description: "OpenAI's latest model featuring enhanced writing, ideation, and creative capabilities, integrated with DALL-E 3 for seamless workflows.",
    link: "https://openai.com",
    icon: <Wand2 className="w-8 h-8 text-rose-500" />,
    color: "from-rose-400/20 to-pink-400/20"
  },
  {
    name: "DeepSeek R1",
    description: "An innovative AI model leveraging cost-effective chips to deliver competitive performance, making advanced AI more accessible globally.",
    link: "https://deepseek.com",
    icon: <Brain className="w-8 h-8 text-teal-500" />,
    color: "from-teal-400/20 to-emerald-400/20"
  },
];

const Tools = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-800 font-medium mb-4">
            <Sparkles className="w-4 h-4 inline-block mr-1" /> 
            Featured Tools
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow">AI Tools Spotlight</h2>
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
              target="_blank"
              rel="noopener noreferrer"
            >
              <article 
                className="glass-card hover-card rounded-xl p-6 h-full animate-in card-shine"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`p-3 rounded-lg bg-gradient-to-br ${tool.color} mb-4 inline-block`}>
                  {tool.icon}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <p className="text-neutral-600">{tool.description}</p>
                <div className="mt-4 inline-flex items-center text-purple-600 font-medium">
                  Learn more 
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
