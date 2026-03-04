import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "./types";
import { cardVariants } from "./projectsData";
import GitHubChip from "./GitHubChip";

interface FeaturedProjectCardProps {
  project: Project;
}

const FeaturedProjectCard = ({ project }: FeaturedProjectCardProps) => (
  <motion.div
    custom={0}
    variants={cardVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="group relative mb-8 rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/5 overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500"
  >
    {/* Hover glow overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

    <div className="grid md:grid-cols-2 min-h-[340px]">
      {/* Image */}
      <div className="relative overflow-hidden bg-secondary/40 md:rounded-l-2xl min-h-[220px] md:min-h-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-primary/40">
            ✦ Featured
          </span>
        </div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          style={{ minHeight: "220px" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card/60 to-transparent md:hidden" />
      </div>

      {/* Content */}
      <div className="p-7 md:p-10 flex flex-col justify-between relative z-10">
        <div>
          <div className="flex items-start justify-between gap-4 mb-4">
            <span className="text-5xl font-black text-primary/10 select-none leading-none">01</span>
            <div className="flex gap-2">
              <GitHubChip url={project.githubUrl} />
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-1.5 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5"
              >
                <ExternalLink size={15} />
                <span className="hidden sm:inline">Live</span>
              </a>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-6">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default FeaturedProjectCard;
