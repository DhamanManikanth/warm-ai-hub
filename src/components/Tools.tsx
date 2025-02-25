
import { Sparkles } from "lucide-react";

const tools = [
  {
    name: "AIWriter Pro",
    description: "Advanced AI writing assistant that helps create engaging content with a human touch.",
    link: "#",
  },
  {
    name: "Neural Canvas",
    description: "Create stunning artwork using state-of-the-art AI image generation technology.",
    link: "#",
  },
  {
    name: "VoiceGenius",
    description: "Transform text to natural-sounding speech in multiple languages and voices.",
    link: "#",
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
