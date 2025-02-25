
import { Brain } from "lucide-react";

const About = () => {
  return (
    <section className="section-padding bg-neutral-200/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <Brain className="w-12 h-12 text-primary mx-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Community</h2>
          <div className="space-y-6 text-neutral-600">
            <p>
              Welcome to our AI enthusiasts community! As someone deeply passionate about artificial intelligence, I created this space to connect with fellow AI enthusiasts and share the exciting developments in this rapidly evolving field.
            </p>
            <p>
              Our WhatsApp group has become a vibrant hub where we discuss the latest AI breakthroughs, share valuable resources, and help each other navigate the fascinating world of artificial intelligence. Whether you're a beginner or an expert, you'll find valuable insights and friendly discussions here.
            </p>
            <p>
              We believe in making AI accessible and understanding its impact on our daily lives. Join us in exploring the future of technology together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
