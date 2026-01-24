import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
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
      <Experience />
      <Projects />
      <section id="about" className="py-20 md:py-24 px-4 md:px-6 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-5xl mx-auto relative z-10 grid md:grid-cols-2 gap-8 lg:gap-12">
          <About />
          <Skills />
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
