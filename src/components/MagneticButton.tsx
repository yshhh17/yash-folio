import { ComponentPropsWithoutRef, ElementType, ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number; // 0–1 magnetic pull factor
  as?: ElementType;
}

type BaseProps = Omit<ComponentPropsWithoutRef<"a">, "children" | "className"> &
  Omit<ComponentPropsWithoutRef<"button">, "children" | "className">;

const MagneticButton = ({
  children,
  className = "",
  strength = 0.4,
  as: Tag = "a",
  ...rest
}: MagneticButtonProps & BaseProps) => {
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
        <Tag className={className} {...rest}>
          {children}
        </Tag>
      </motion.div>
    </div>
  );
};

export default MagneticButton;
