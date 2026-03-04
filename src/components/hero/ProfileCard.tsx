import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

/** Right column: 3-D tilt profile photo card with glow ring and floating badge. */
const ProfileCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });

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

  const handleCardLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
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

        {/* Floating badge */}
        <motion.div
          className="absolute -top-4 -right-4 z-20 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-primary/40"
          style={{ translateZ: 40 }}
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          Open to Work ✦
        </motion.div>

        <div className="relative w-full h-full rounded-3xl bg-card border-2 border-primary/30 overflow-hidden shadow-2xl">
          {/* Spotlight glare */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-10"
            style={{ background: glareBackground }}
          />
          <img src="/Profile.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard;
