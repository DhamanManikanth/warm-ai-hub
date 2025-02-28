
import { Brain, Sparkles, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section className="section-padding colorful-section bg-gradient-to-br from-cyan-50 to-teal-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 inline-block p-4 rounded-full bg-gradient-to-br from-cyan-400/20 to-teal-400/20">
            <Brain className="w-12 h-12 text-teal-600 mx-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 glow">About Our Community</h2>
          <div className="space-y-6 text-neutral-600 glass-card rounded-xl p-8">
            <p>
              Welcome to our AI enthusiasts community! As someone deeply passionate about artificial intelligence, I created this space to connect with fellow AI enthusiasts and share the exciting developments in this rapidly evolving field.
            </p>
            <p>
              Our WhatsApp group has become a vibrant hub where we discuss the latest AI breakthroughs, share valuable resources, and help each other navigate the fascinating world of artificial intelligence. Whether you're a beginner or an expert, you'll find valuable insights and friendly discussions here.
            </p>
            <p>
              We believe in making AI accessible and understanding its impact on our daily lives. Join us in exploring the future of technology together!
            </p>
            
            <div className="flex justify-center space-x-12 pt-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400/20 to-indigo-400/20 flex items-center justify-center mx-auto mb-2">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <p className="font-medium text-purple-800">Daily Updates</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center mx-auto mb-2">
                  <Lightbulb className="w-8 h-8 text-teal-600" />
                </div>
                <p className="font-medium text-teal-800">Exclusive Insights</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-400/20 flex items-center justify-center mx-auto mb-2">
                  <Brain className="w-8 h-8 text-amber-600" />
                </div>
                <p className="font-medium text-amber-800">Community Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
