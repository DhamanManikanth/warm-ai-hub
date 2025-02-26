
import { MessageSquare, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FEC6A1]/20 via-[#E5DEFF]/20 to-[#D3E4FD]/20" />
      <div className="container mx-auto text-center z-10 animate-in">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#E5DEFF] text-primary mb-8 animate-float">
          <Sparkles className="w-4 h-4 mr-2" />
          <span>Join the coolest AI crew!</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight font-['Comfortaa']">
          Hey AI Lovers, Welcome to the<br />
          <span className="text-primary">Coolest AI WhatsApp Crew!</span>
        </h1>
        <p className="text-neutral-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-['Poppins']">
          Get the hottest AI updates, tools, and news—straight from our community to your phone. From mind-blowing tools to exciting breakthroughs, our WhatsApp group is where the AI party's at!
        </p>
        <a
          href="https://chat.whatsapp.com/CYP5apkKMNk9tEjdVZanwO"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary inline-flex items-center group text-lg font-['Poppins']"
        >
          Join the AI Adventure!
          <MessageSquare className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
