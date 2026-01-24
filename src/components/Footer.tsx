import { useState } from "react";
import { Heart, Code, Coffee } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const [showSecret, setShowSecret] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSecretClick = () => {
    setShowSecret(true);
    setTimeout(() => setShowSecret(false), 3000);
  };

  return (
    <footer className="py-12 px-6 border-t border-border bg-background/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand */}
          <div className="text-center md:text-left">
            <span className="text-foreground font-semibold text-lg">Yash Tiwari</span>
            <p className="text-sm text-muted-foreground mt-1">
              Full Stack Developer
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
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
              className="text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-1.5 cursor-pointer hover:text-foreground transition-colors"
              onClick={handleSecretClick}
            >
              Built with <Coffee size={14} className="text-primary" /> and <Code size={14} className="text-primary" />
            </p>
            {showSecret && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-primary mt-2"
              >
                ...and lots of debugging at 3am 🌙
              </motion.p>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Yash Tiwari. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
