import { motion } from "framer-motion";
import { fadeUp } from "./aboutVariants";

/** Section heading with animated gradient underline. */
const AboutHeader = () => (
  <motion.div variants={fadeUp} className="mb-10">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">
      Get to know me
    </p>
    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
      About{" "}
      <span className="relative inline-block">
        Me
        <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-primary via-primary/60 to-transparent" />
      </span>
    </h2>
    <p className="text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">
      A quick snapshot of who I am, what drives me, and where I'm headed.
    </p>
  </motion.div>
);

export default AboutHeader;
