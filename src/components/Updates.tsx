
import { Calendar } from "lucide-react";

const updates = [
  {
    date: "March 15, 2024",
    title: "GPT-4 Turbo: The Next Evolution in AI",
    description: "Explore the latest capabilities of GPT-4 Turbo and how it's revolutionizing AI applications across industries.",
  },
  {
    date: "March 14, 2024",
    title: "Breakthrough in AI Image Generation",
    description: "New advancements in image generation models are pushing the boundaries of creative AI applications.",
  },
  {
    date: "March 13, 2024",
    title: "AI Ethics Guidelines Updated",
    description: "Major tech companies collaborate on new ethical guidelines for AI development and deployment.",
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
