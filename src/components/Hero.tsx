
import { MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-transparent" />
      <div className="container mx-auto text-center z-10 animate-in">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-float">
          <MessageSquare className="w-4 h-4 mr-2" />
          <span>Join our thriving AI community</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Stay Ahead in the World of AI
        </h1>
        <p className="text-neutral-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Join our vibrant WhatsApp community where we share the latest AI updates, tools, and insights. Connect with fellow enthusiasts and stay informed.
        </p>
        <a
          href="https://chat.whatsapp.com/YOURGROUPINVITELINK"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary inline-flex items-center group"
        >
          Join Our WhatsApp Group
          <MessageSquare className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
