import { useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number; // 0–1 magnetic pull factor
  as?: "a" | "button";
  href?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

const MagneticButton = ({
  children,
  className = "",
  strength = 0.4,
  as: Tag = "a",
  ...rest
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 12, stiffness: 200, mass: 0.5 });
  const springY = useSpring(y, { damping: 12, stiffness: 200, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (e.clientX - centerX) * strength;
    const dy = (e.clientY - centerY) * strength;
    x.set(dx);
    y.set(dy);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.div style={{ x: springX, y: springY }}>
        {/* @ts-ignore dynamic tag */}
        <Tag className={className} {...rest}>
          {children}
        </Tag>
      </motion.div>
    </div>
  );
};

export default MagneticButton;
