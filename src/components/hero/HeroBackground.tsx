import ParticleField from "../ParticleField";

/** Decorative background layer: particle field + ambient glow blobs. */
const HeroBackground = () => (
  <>
    <ParticleField />
    <div
      className="absolute top-1/4 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"
    />
    <div
      className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse-slow pointer-events-none"
      style={{ animationDelay: "2s" }}
    />
  </>
);

export default HeroBackground;
