import { useMemo } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;     // % from left
  y: number;     // % from top
  size: number;  // px
  duration: number;
  delay: number;
  drift: number; // horizontal drift amount px
}

const NUM_PARTICLES = 48;

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const ParticleField = () => {
  const particles: Particle[] = useMemo(() => {
    const rand = seededRandom(42);
    return Array.from({ length: NUM_PARTICLES }, (_, i) => ({
      id: i,
      x: rand() * 100,
      y: rand() * 100,
      size: rand() * 3 + 1,          // 1px – 4px
      duration: rand() * 12 + 8,     // 8s – 20s
      delay: -(rand() * 15),         // negative so they're already in motion
      drift: (rand() - 0.5) * 60,   // -30px to +30px
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(217, 91%, 60%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(217, 91%, 60%) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial vignette to fade grid at edges */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, hsl(var(--background)) 100%)",
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -120, 0],
            x: [0, p.drift, 0],
            opacity: [0, p.size > 2.5 ? 0.7 : 0.4, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleField;
