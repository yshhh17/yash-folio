import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleProfileClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    if (newCount >= 5) {
      setShowEasterEgg(true);
      setTimeout(() => {
        setShowEasterEgg(false);
        setClickCount(0);
      }, 3000);
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <p className="text-lg md:text-xl text-primary font-medium mb-2">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Full Stack Developer <span className="text-primary">|</span> Backend Specialist
          </p>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
            Building robust, scalable backend systems and APIs. 
            Passionate about clean code, system design, and solving complex problems.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {["About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-6 py-3 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Profile Picture */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div 
            className="relative w-64 h-64 md:w-80 md:h-80 cursor-pointer group"
            onClick={handleProfileClick}
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-full h-full rounded-full bg-card border-4 border-border overflow-hidden transition-all duration-300 group-hover:border-primary group-hover:shadow-xl shadow-2xl">
              {/* Placeholder for profile picture */}
              <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-secondary/50">
                <span className="text-8xl"><img src="/Profile.jpg" alt="Profile" className="w-full h-full object-cover" /></span>
              </div>
            </div>
            {showEasterEgg && (
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm whitespace-nowrap animate-bounce z-10">
                You found a secret! 🎉
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;
