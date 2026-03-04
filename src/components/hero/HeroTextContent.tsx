import { motion } from "framer-motion";
import TypewriterText from "../TypewriterText";
import MagneticButton from "../MagneticButton";
import { staggerContainer, fadeUp } from "./heroVariants";

const ROLES = [
  "Full Stack Developer",
  "Backend Engineer",
  "Systems Designer",
  "Problem Solver",
];

/** Left column: greeting, animated name, typewriter role, bio and CTA buttons. */
const HeroTextContent = () => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    animate="show"
    className="text-center md:text-left order-2 md:order-1"
  >
    <motion.p
      variants={fadeUp}
      className="text-lg md:text-2xl text-primary font-medium mb-2 md:mb-3 tracking-wide"
    >
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
          whileHover={{ y: -6, color: "hsl(217, 91%, 70%)", transition: { duration: 0.15 } }}
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

    {/* CTA buttons */}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
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
);

export default HeroTextContent;
