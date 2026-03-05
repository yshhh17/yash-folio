import { motion } from "framer-motion";
import { containerVariants, scaleIn } from "./aboutVariants";

const stats = [
  { value: "150+", label: "Problems Solved" },
  { value: "10+", label: "Projects Built" },
  { value: "3+", label: "Years Coding" },
  { value: "∞", label: "Cups of Coffee" },
];

const AboutStats = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="grid grid-cols-4 gap-2 md:gap-3"
  >
    {stats.map(({ value, label }) => (
      <motion.div
        key={label}
        variants={scaleIn}
        whileHover={{ y: -4, scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col items-center justify-center p-3 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:bg-card/70 transition-colors text-center"
      >
        <span className="text-lg md:text-2xl font-bold text-primary leading-none">
          {value}
        </span>
        <span className="text-[10px] md:text-xs text-muted-foreground mt-1 leading-tight">
          {label}
        </span>
      </motion.div>
    ))}
  </motion.div>
);

export default AboutStats;
