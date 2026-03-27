import ProjectsHeader from "./projects/ProjectsHeader";
import FeaturedProjectCard from "./projects/FeaturedProjectCard";
import ProjectCard from "./projects/ProjectCard";
import { projects } from "./projects/projectsData";
import { motion } from "framer-motion";

const Projects = () => {
  const [featured, ...rest] = projects;

  return (
    <motion.section
      id="projects"
      className="relative py-20 md:py-28 px-4 md:px-6 bg-card/30 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        aria-hidden
        className="absolute -top-20 right-0 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, -14, 0], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, 12, 0], opacity: [0.45, 0.3, 0.45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <ProjectsHeader />
        <FeaturedProjectCard project={featured} />
        <motion.div
          className="grid md:grid-cols-2 gap-6 md:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {rest.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
