import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Twitter, FileText, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Experience", "Projects", "About", "Contact"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6"
    >
      <nav
        className={`w-full max-w-5xl transition-all duration-500 rounded-full border border-white/10 ${isScrolled
          ? "bg-black/40 backdrop-blur-md py-3 px-6 shadow-2xl"
          : "bg-background/20 backdrop-blur-sm py-4 px-8"
          }`}
      >
        <div className="flex items-center justify-between w-full">
          <a
            href="#hero"
            className="text-muted-foreground hover:text-foreground transition-colors"
            title="Home"
          >
            <Home size={24} />
          </a>

          <div className="hidden md:flex items-center justify-center flex-1 gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/yshhh17" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={20} />
            </a>
            <a href="https://drive.google.com/file/d/1WFAF3wj-kfusVLsP2EtmrEo_axiv8WQ4/preview" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <FileText size={20} />
            </a>
            <a href="https://twitter.com/yshhh17" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://www.linkedin.com/in/yshhh17" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={20} />
            </a>
          </div>

          <button
            className="md:hidden p-2 text-foreground hover:bg-primary/10 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-20 left-4 right-4 md:hidden bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
