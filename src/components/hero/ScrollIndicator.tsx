import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

/** Animated scroll-down indicator anchored to the bottom of the hero section. */
const ScrollIndicator = () => (
  <motion.a
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.8, duration: 0.6 }}
    href="#about"
    className="hidden md:flex flex-col items-center gap-1 absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors group"
  >
    <span className="text-xs tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
      Scroll
    </span>
    <motion.div
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
    >
      <ChevronDown size={28} />
    </motion.div>
  </motion.a>
);

export default ScrollIndicator;
