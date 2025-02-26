
import { Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success state
    // In future, this would connect to backend
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <section className="section-padding bg-neutral-200/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-neutral-600 mb-8">
            Stay connected with fellow AI enthusiasts and never miss an update. Join our WhatsApp group for daily discussions and subscribe to our newsletter for the latest AI news.
          </p>
          
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
                  className="flex-1 px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="button-primary inline-flex items-center group"
                >
                  Subscribe
                  <Mail className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              {isSubscribed && (
                <p className="text-green-600">Thank you for subscribing! We'll keep you updated.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
