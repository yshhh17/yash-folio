import { ExternalLink, Github, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "GeoDermal Assistant",
    description: "Built a travel wellness platform covering 30+ cities using FastAPI and React; implemented secure authentication, rate limiting (10 req/hr), and real-time user session management. Integrated Groq LLM with 3 real-time APIs for 6-factor health risk assessment; designed optimized and indexed PostgreSQL schemas for efficient query performance.",
    image: "/geodermal.png",
    techStack: ["FastAPI", "React", "PostgreSQL", "Docker", "Groq LLM", "Nominatim API"],
    githubUrl: "https://github.com/yshhh17/GeoDermal_Assistant",
    liveUrl: "https://geo-dermal-assistant.vercel.app/",
  },
  {
    id: 2,
    title: "GiveHub",
    description: "Developed a full-stack donation platform integrating PayPal REST APIs with webhook-based payment verification and email verification. Implemented JWT authentication, Redis-based OTP flow, and 8+ REST endpoints. Containerized services using Docker and configured rate limiting with automated transactional emails via SMTP.",
    image: "/Givehub.png",
    techStack: ["React (Redux)", "Redis", "PayPal(WebHook), FastAPI", "Docker"],
    githubUrl: "https://github.com/yshhh17/GiveHub",
    liveUrl: "https://give-hub-inky.vercel.app/",
  },
  {
    id: 3,
    title: "Bucketlst.io",
    description: "Bucketlst.io is an AI-driven travel planning platform that helps users create personalized itineraries and discover destinations based on their interests and budget. I contributed to building scalable features that power itinerary generation and user experience.",
    image: "/bucketlst.png",
    techStack: ["Next.js", "Google Cloud", "Supabase", "TypeScript", "PostgreSQL"],
    githubUrl: "",
    liveUrl: "https://bucketlst.io/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-24 px-4 md:px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <div className="w-16 h-1 bg-primary mb-4 rounded-full" />
          <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
            Here are some of my recent projects. Each one showcases different aspects
            of backend development, from API design to cloud infrastructure.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-card via-card to-primary/5 rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
\              <div className="aspect-video bg-gradient-to-br from-secondary to-secondary/50 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors p-1 hover:bg-primary/10 rounded-full"
                        title="View Code"
                      >
                        <Github size={20} />
                      </a>
                    ) : (
                      <div className="relative group/tooltip">
                        <div className="text-muted-foreground/50 p-1 cursor-not-allowed">
                          <Lock size={20} />
                        </div>
                        <div className="absolute bottom-full right-0 mb-2 w-48 bg-popover text-popover-foreground text-xs px-3 py-2 rounded-lg shadow-lg border border-border opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                          <div className="font-semibold mb-1">🔒 Private Repository</div>
                          <div className="text-muted-foreground">This repository is confidential and maintained by the owner.</div>
                          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border" />
                        </div>
                      </div>
                    )}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors p-1 hover:bg-primary/10 rounded-full"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 text-base flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gradient-to-r from-secondary to-secondary/70 text-secondary-foreground rounded-lg text-sm font-medium border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
