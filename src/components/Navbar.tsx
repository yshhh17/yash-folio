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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6"
    >
      <nav
        className={`relative w-full max-w-5xl transition-all duration-500 rounded-full border overflow-hidden ${isScrolled
            ? "bg-black/40 backdrop-blur-md py-3 px-6 shadow-2xl border-white/20 shadow-primary/10"
            : "bg-background/20 backdrop-blur-sm py-4 px-8 border-white/10"
          }`}
      >
        {/* Animated shimmer background */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"
            style={{
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s infinite'
            }}
          />
        </div>

        {/* Animated glow effect when scrolled */}
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 blur-xl"
          />
        )}

        <div className="relative flex items-center justify-between w-full">
          {/* Home Icon with hover animation */}
          <motion.a
            href="#hero"
            className="text-muted-foreground hover:text-foreground transition-colors relative group"
            title="Home"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home size={24} />
            <motion.div
              className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100"
              initial={false}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Desktop Nav Items with stagger animation */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground transition-all text-sm font-medium relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary via-primary/80 to-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 -z-10"
                  initial={false}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Social Icons with hover animations */}
          <div className="hidden md:flex items-center gap-4">
            {[
              { href: "https://github.com/yshhh17", Icon: Github },
              { href: "https://drive.google.com/file/d/1WFAF3wj-kfusVLsP2EtmrEo_axiv8WQ4/preview", Icon: FileText },
              { href: "https://twitter.com/yshhh17", Icon: Twitter },
              { href: "https://www.linkedin.com/in/yshhh17", Icon: Linkedin }
            ].map(({ href, Icon }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors relative group"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={20} />
                <motion.div
                  className="absolute -inset-2 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 -z-10"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button with rotation animation */}
          <motion.button
            className="md:hidden p-2 text-foreground hover:bg-primary/10 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-20 left-4 right-4 md:hidden bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium text-center relative group"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 -z-10"
                    initial={false}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Navbar;
