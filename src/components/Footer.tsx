import { useState } from "react";
import { Heart, Code, Coffee } from "lucide-react";

const Footer = () => {
  const [showSecret, setShowSecret] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSecretClick = () => {
    setShowSecret(true);
    setTimeout(() => setShowSecret(false), 3000);
  };

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand */}
          <div className="text-center md:text-left">
            <span className="text-foreground font-semibold">Your Name</span>
            <p className="text-sm text-muted-foreground mt-1">
              Backend Developer
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex gap-6">
            {["About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right: Fun tagline with easter egg */}
          <div className="text-center md:text-right">
            <p 
              className="text-sm text-muted-foreground flex items-center gap-1.5 cursor-pointer hover:text-foreground transition-colors"
              onClick={handleSecretClick}
            >
              Built with <Coffee size={14} className="text-primary" /> and <Code size={14} className="text-primary" />
            </p>
            {showSecret && (
              <p className="text-xs text-primary mt-2 animate-pulse">
                ...and lots of debugging at 3am 🌙
              </p>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
