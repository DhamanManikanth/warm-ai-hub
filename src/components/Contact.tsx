
import { Mail, MessageSquare, Sparkles } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('subscribers')
        .insert([{ email }]);

      if (error) throw error;

      toast.success("Thank you for subscribing! We'll keep you updated.");
      setEmail("");
    } catch (error: any) {
      console.error('Error:', error);
      if (error.code === '23505') { // unique violation error code
        toast.error("This email is already subscribed!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section-padding colorful-section bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-800 font-medium mb-4">
            <Sparkles className="w-4 h-4 inline-block mr-1" /> 
            Join Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 glow">Join Our Community</h2>
          <p className="text-neutral-600 mb-8">
            Stay connected with fellow AI enthusiasts and never miss an update. Join our WhatsApp group for daily discussions and subscribe to our newsletter for the latest AI news.
          </p>
          
          <div className="glass-card rounded-xl p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="https://chat.whatsapp.com/CYP5apkKMNk9tEjdVZanwO"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary inline-flex items-center group"
              >
                Join WhatsApp Group
                <MessageSquare className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-4">Subscribe to Updates</h3>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={isLoading}
                    className="flex-1 px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="button-primary inline-flex items-center group disabled:opacity-50"
                  >
                    {isLoading ? "Subscribing..." : "Subscribe"}
                    <Mail className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 text-neutral-600">
            <a href="#" className="hover:text-purple-600 transition-colors">Twitter</a>
            <span>•</span>
            <a href="#" className="hover:text-purple-600 transition-colors">LinkedIn</a>
            <span>•</span>
            <a href="#" className="hover:text-purple-600 transition-colors">Discord</a>
            <span>•</span>
            <a href="#" className="hover:text-purple-600 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
