import { useState } from "react";
import { Mail, Copy, Check, Linkedin, Github, Twitter } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/yourusername" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/yourusername" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/yourusername" },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "your.email@example.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Get In Touch
        </h2>
        <div className="w-16 h-1 bg-primary mb-8 rounded-full mx-auto" />
        
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities 
          to be part of your vision. Let's build something great together.
        </p>

        {/* Email */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-card rounded-xl border border-border">
            <Mail className="text-primary" size={20} />
            <span className="text-foreground">{email}</span>
            <button
              onClick={copyEmail}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              title="Copy email"
            >
              {copied ? (
                <Check size={18} className="text-green-500" />
              ) : (
                <Copy size={18} className="text-muted-foreground hover:text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-card rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
              title={social.name}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
