import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorFollower = () => {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Tight spring for the inner dot — nearly instant
  const dotX = useSpring(mouseX, { damping: 50, stiffness: 1500, mass: 0.1 });
  const dotY = useSpring(mouseY, { damping: 50, stiffness: 1500, mass: 0.1 });

  // Lazy spring for the outer ring — follows with a delay
  const ringX = useSpring(mouseX, { damping: 22, stiffness: 200, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 22, stiffness: 200, mass: 0.5 });

  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onEnterInteractive = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-expand], input, textarea, select")) {
        setHovered(true);
      }
    };
    const onLeaveInteractive = () => setHovered(false);

    const onMousedown = () => setClicking(true);
    const onMouseup = () => setClicking(false);

    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onEnterInteractive);
    window.addEventListener("mouseout", onLeaveInteractive);
    window.addEventListener("mousedown", onMousedown);
    window.addEventListener("mouseup", onMouseup);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onEnterInteractive);
      window.removeEventListener("mouseout", onLeaveInteractive);
      window.removeEventListener("mousedown", onMousedown);
      window.removeEventListener("mouseup", onMouseup);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [mouseX, mouseY]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Inner glowing dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: hidden ? 0 : 1,
        }}
        animate={{
          width: clicking ? 8 : hovered ? 20 : 12,
          height: clicking ? 8 : hovered ? 20 : 12,
          backgroundColor: hovered ? "hsl(217, 91%, 60%)" : "hsl(217, 91%, 75%)",
          boxShadow: hovered
            ? "0 0 20px 6px hsl(217, 91%, 60% / 0.6)"
            : clicking
            ? "0 0 8px 2px hsl(217, 91%, 60% / 0.8)"
            : "0 0 10px 3px hsl(217, 91%, 60% / 0.4)",
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer lagging ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: hidden ? 0 : 1,
        }}
        animate={{
          width: hovered ? 56 : clicking ? 24 : 38,
          height: hovered ? 56 : clicking ? 24 : 38,
          borderColor: hovered ? "hsl(217, 91%, 60% / 0.8)" : "hsl(217, 91%, 60% / 0.35)",
          borderWidth: hovered ? 2 : 1.5,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default CursorFollower;
