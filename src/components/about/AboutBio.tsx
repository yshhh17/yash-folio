import { motion } from "framer-motion";
import { fadeUp } from "./aboutVariants";

const highlights = [
  { label: "B.Tech CS", desc: "Pursuing computer science with a deep focus on systems and web." },
  { label: "Full-Stack", desc: "Building end-to-end products — from RESTful APIs to polished UIs." },
  { label: "AI-Driven", desc: "Integrating ML & LLM features into real-world applications." },
  { label: "Clean Code", desc: "Maintainable, documented, and performance-first engineering." },
];

const AboutBio = () => (
  <motion.div variants={fadeUp} className="space-y-5">
    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
      I'm a passionate B.Tech Computer Science student specialising in scalable
      full-stack development and AI-driven systems. I love turning ambitious
      ideas into reliable software — with performance and readability always in
      mind.
    </p>

    {/* Highlight chips */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {highlights.map(({ label, desc }) => (
        <motion.div
          key={label}
          whileHover={{ y: -3, scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="flex items-start gap-3 p-3 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:bg-card/70 transition-colors"
        >
          <span className="mt-0.5 w-2 h-2 rounded-full bg-primary shrink-0" />
          <div>
            <p className="text-xs font-semibold text-foreground">{label}</p>
            <p className="text-xs text-muted-foreground leading-snug mt-0.5">{desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default AboutBio;
