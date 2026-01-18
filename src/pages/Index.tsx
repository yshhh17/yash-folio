import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import KonamiOverlay from "@/components/KonamiOverlay";
import { useKonamiCode } from "@/hooks/useKonamiCode";

const Index = () => {
  const { triggered } = useKonamiCode();

  return (
    <div className="min-h-screen bg-background">
      <KonamiOverlay isActive={triggered} />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
