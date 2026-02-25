import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring, type Variants } from "framer-motion";
import ParticleField from "./ParticleField";
import TypewriterText from "./TypewriterText";
import MagneticButton from "./MagneticButton";

const ROLES = [
  "Full Stack Developer",
  "Backend Engineer",
  "Systems Designer",
  "Problem Solver",
];

/** Stagger container — children animate in sequence */
const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const Hero = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3-D tilt for the profile card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  // Spotlight glare derived at the top level (satisfies rules of hooks)
  const glareBackground = useTransform(
    [mouseX, mouseY],
    ([mx, my]: number[]) =>
      `radial-gradient(ellipse 60% 60% at ${(mx + 0.5) * 100}% ${(my + 0.5) * 100}%, rgba(255,255,255,0.10) 0%, transparent 70%)`
  );

  const handleCardMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleCardLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-32 md:pt-0 relative overflow-hidden bg-card"
    >
      {/* Animated particles + grid background */}
      <ParticleField />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* ── Left: Text content ─────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center md:text-left order-2 md:order-1"
        >
          <motion.p variants={fadeUp} className="text-lg md:text-2xl text-primary font-medium mb-2 md:mb-3 tracking-wide">
            👋 Hi, I'm
          </motion.p>

          {/* Name with letter-by-letter reveal */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-2 leading-tight"
            variants={fadeUp}
          >
            {"Yash".split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.45, ease: "easeOut" }}
                whileHover={{
                  y: -6,
                  color: "hsl(217, 91%, 70%)",
                  transition: { duration: 0.15 },
                }}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Typewriter role text */}
          <motion.h2
            variants={fadeUp}
            className="text-xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-tight text-foreground/90 min-h-[2.5rem]"
          >
            <TypewriterText words={ROLES} typingSpeed={55} pauseDuration={1800} />
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-base md:text-xl max-w-lg mx-auto md:mx-0 mb-8 md:mb-10 leading-relaxed"
          >
            Building robust, scalable backend systems and APIs.
            Passionate about clean code, system design, and solving complex problems.
          </motion.p>

          {/* CTA buttons with magnetic pull */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 md:gap-4"
          >
            <MagneticButton
              href="#projects"
              as="a"
              strength={0.35}
              className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-semibold text-sm md:text-base overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 text-center block"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </MagneticButton>

            <MagneticButton
              href="https://drive.google.com/file/d/1krmIszJeEvJMp7uM-pYOMWMF3YmYnCm-/view"
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              strength={0.35}
              className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg font-semibold text-sm md:text-base overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/50 hover:scale-105 border border-gray-600 text-center block"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span className="whitespace-nowrap">Download Resume</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </MagneticButton>

            <MagneticButton
              href="#contact"
              as="a"
              strength={0.35}
              className="group relative px-6 md:px-8 py-3 md:py-4 bg-transparent text-foreground rounded-lg font-semibold text-sm md:text-base border-2 border-border transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/20 hover:scale-105 text-center block"
            >
              <span className="relative z-10">Get In Touch</span>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* ── Right: 3-D tilt profile card ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
          style={{ perspective: 1000 }}
        >
          <motion.div
            ref={cardRef}
            onMouseMove={handleCardMove}
            onMouseLeave={handleCardLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 cursor-none"
          >
            {/* Animated glow ring */}
            <motion.div
              className="absolute -inset-3 rounded-3xl"
              animate={{
                boxShadow: [
                  "0 0 20px 4px hsl(217,91%,60%/0.15)",
                  "0 0 40px 8px hsl(217,91%,60%/0.35)",
                  "0 0 20px 4px hsl(217,91%,60%/0.15)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating badge — depth layer */}
            <motion.div
              className="absolute -top-4 -right-4 z-20 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-primary/40"
              style={{ translateZ: 40 }}
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Open to Work ✦
            </motion.div>

            <div className="relative w-full h-full rounded-3xl bg-card border-2 border-primary/30 overflow-hidden shadow-2xl">
              {/* Spotlight glare that moves with tilt */}
              <motion.div
                className="absolute inset-0 pointer-events-none z-10"
                style={{ background: glareBackground }}
              />
              <img src="/Profile.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        href="#about"
        className="hidden md:flex flex-col items-center gap-1 absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors group"
      >
        <span className="text-xs tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
