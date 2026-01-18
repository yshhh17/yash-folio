import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <div className="text-center max-w-3xl mx-auto">
        {/* Profile Picture */}
        <div 
          className="relative w-32 h-32 mx-auto mb-8 cursor-pointer group"
          onClick={handleProfileClick}
        >
          <div className="w-full h-full rounded-full bg-card border-2 border-border overflow-hidden transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20">
            {/* Placeholder for profile picture */}
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <span className="text-4xl">👨‍💻</span>
            </div>
          </div>
          {showEasterEgg && (
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm whitespace-nowrap animate-bounce">
              You found a secret! 🎉
            </div>
          )}
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
          Your Name
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Full Stack Developer <span className="text-primary">|</span> Backend Specialist
        </p>

        {/* Description */}
        <p className="text-muted-foreground max-w-xl mx-auto mb-12">
          Building robust, scalable backend systems and APIs. 
          Passionate about clean code, system design, and solving complex problems.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-6 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
