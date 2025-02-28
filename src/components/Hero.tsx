
import { MessageSquare, Sparkles, Lightbulb, Brain } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center section-padding relative overflow-hidden colorful-section">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 via-[#EC4899]/20 to-[#06B6D4]/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-400/20 rounded-full blur-xl" style={{ animationDelay: "2s", animation: "float 8s ease-in-out infinite" }}></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-pink-400/20 rounded-full blur-xl" style={{ animationDelay: "1s", animation: "float 7s ease-in-out infinite" }}></div>
      
      <div className="container mx-auto text-center z-10 animate-in">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-400/30 to-indigo-400/30 text-primary mb-8 animate-float backdrop-blur-sm">
          <Sparkles className="w-4 h-4 mr-2 text-purple-600" />
          <span className="font-medium text-purple-800">Join the coolest AI crew!</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight font-['Comfortaa']">
          <span className="block mb-2">AI Wakeup-Call</span>
          <span className="rainbow-text">Welcome to the Coolest AI WhatsApp Crew!</span>
        </h1>
        
        <p className="text-neutral-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-['Poppins'] bg-white/50 backdrop-blur-sm p-4 rounded-lg">
          Get the hottest AI updates, tools, and news—straight from our community to your phone. From mind-blowing tools to exciting breakthroughs, our WhatsApp group is where the AI party's at!
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://chat.whatsapp.com/CYP5apkKMNk9tEjdVZanwO"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary inline-flex items-center group text-lg font-['Poppins']"
          >
            Join the AI Adventure!
            <MessageSquare className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          
          <button className="px-6 py-3 rounded-full font-medium bg-white text-purple-700 border-2 border-purple-400 hover:border-purple-500 transition-all duration-300 inline-flex items-center">
            <Brain className="mr-2 w-5 h-5 text-purple-500" />
            Learn More
          </button>
        </div>
        
        <div className="mt-12 flex justify-center items-center">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
            <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center">
              <Lightbulb className="w-24 h-24 text-purple-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
