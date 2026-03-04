import HeroBackground from "./hero/HeroBackground";
import HeroTextContent from "./hero/HeroTextContent";
import ProfileCard from "./hero/ProfileCard";
import ScrollIndicator from "./hero/ScrollIndicator";

const Hero = () => (
  <section
    id="hero"
    className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-32 md:pt-0 relative overflow-hidden bg-card"
  >
    <HeroBackground />

    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
      <HeroTextContent />
      <ProfileCard />
    </div>

    <ScrollIndicator />
  </section>
);

export default Hero;
