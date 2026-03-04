import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "./types";
import { cardVariants } from "./projectsData";
import GitHubChip from "./GitHubChip";

interface ProjectCardProps {
  project: Project;
  index: number; // 0-based index among non-featured cards
}

const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.div
    custom={index + 1}
    variants={cardVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="group relative flex flex-col rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/5 overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    {/* Image strip */}
    <div className="relative overflow-hidden bg-secondary/40" style={{ height: "200px" }}>
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
      />
      {/* Index badge */}
      <div className="absolute top-3 left-3 z-20">
        <span className="bg-background/80 backdrop-blur-sm text-foreground/70 text-xs font-bold px-2.5 py-1 rounded-full border border-border/60">
          0{index + 2}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 md:p-7 flex flex-col flex-grow relative z-10">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
          {project.title}
        </h3>
        <div className="flex gap-2 shrink-0">
          <GitHubChip url={project.githubUrl} />
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors px-2.5 py-1.5 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5"
            title="Live Demo"
          >
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      <p className="text-muted-foreground text-sm md:text-base leading-relaxed flex-grow mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
