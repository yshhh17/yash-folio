import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

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
    techStack: ["FastAPI", "React", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/yshhh17/GeoDermal_Assistant",
    liveUrl: "https://geo-dermal-assistant.vercel.app/",
  },
  {
    id: 2,
    title: "GiveHub",
    description: "Developed a full-stack donation platform integrating PayPal REST APIs with webhook-based payment verification and email verification. Implemented JWT authentication, Redis-based OTP flow, and 8+ REST endpoints. Containerized services using Docker and configured rate limiting with automated transactional emails via SMTP.",
    image: "/Givehub.png",
    techStack: ["React (Redux)", "Redis", "PayPal(WebHook)"],
    githubUrl: "https://github.com/yshhh17/GiveHub",
    liveUrl: "https://give-hub-inky.vercel.app/",
  },
  {
    id: 3,
    title: "Bucketlst.io",
    description: "Developing an AI-based authenticity detection system for images, text, and video with explainable confidence scores. Implementing backend orchestration in Node.js/Express with batched inference and Redis-backed caching for real-time efficiency. Designing MongoDB schemas and REST APIs for moderation workflows, enabling streaming classifications and audit logging.",
    image: "/bucketlst.png",
    techStack: ["MERN stack", "Hugging Face"],
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
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="aspect-video bg-secondary overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      className="text-muted-foreground hover:text-primary transition-colors p-1 hover:bg-primary/10 rounded-full"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="text-muted-foreground hover:text-primary transition-colors p-1 hover:bg-primary/10 rounded-full"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 line-clamp-3 text-base flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium"
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
