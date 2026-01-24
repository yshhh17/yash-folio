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
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-20 md:pt-0 relative overflow-hidden bg-card">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <p className="text-lg md:text-2xl text-primary font-medium mb-2 md:mb-3 tracking-wide">
            👋 Hi, I'm
          </p>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            Yash
          </h1>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 leading-tight text-foreground">
            Full Stack Developer
          </h2>
          <p className="text-muted-foreground text-base md:text-xl max-w-lg mx-auto md:mx-0 mb-8 md:mb-10 leading-relaxed">
            Building robust, scalable backend systems and APIs.
            Passionate about clean code, system design, and solving complex problems.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 md:gap-4">
            {/* View Projects Button */}
            <a
              href="#projects"
              className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-semibold text-sm md:text-base overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 text-center"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            {/* Download Resume Button */}
            <a
              href="/yash_res.pdf"
              download
              className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg font-semibold text-sm md:text-base overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/50 hover:scale-105 border border-gray-600 text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-5 md:h-5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span className="whitespace-nowrap">Download Resume</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="group relative px-6 md:px-8 py-3 md:py-4 bg-transparent text-foreground rounded-lg font-semibold text-sm md:text-base border-2 border-border transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/20 hover:scale-105 text-center"
            >
              <span className="relative z-10">Get In Touch</span>
            </a>
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
            className="relative w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 cursor-pointer group"
            onClick={handleProfileClick}
          >
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-full h-full rounded-3xl bg-card border-4 border-border overflow-hidden transition-all duration-300 group-hover:border-primary group-hover:shadow-xl shadow-2xl">
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
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;
