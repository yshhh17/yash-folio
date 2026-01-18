import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["About", "Projects", "Contact"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-foreground font-bold text-lg hover:text-primary transition-colors">
          YN<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-center hover:bg-primary/90 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
