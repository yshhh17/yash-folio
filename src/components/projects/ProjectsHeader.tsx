import { motion } from "framer-motion";

const ProjectsHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-14"
  >
    <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Portfolio</p>
    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
      Featured Projects
    </h2>
    <div className="w-16 h-1 bg-primary rounded-full mb-5" />
    <p className="text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed">
      A selection of projects that showcase backend architecture, API design, and cloud
      infrastructure — built with performance and scalability in mind.
    </p>
  </motion.div>
);

export default ProjectsHeader;
