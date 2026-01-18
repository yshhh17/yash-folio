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
    title: "Geodermal Assistant",
    description: "AI-powered environmental analysis for travelers. Get personalized skin and hair care recommendations based on your destination's climate, air quality, and water conditions.",
    image: "/geodermal.png",
    techStack: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    githubUrl: "https://github.com/yshhh17/GeoDermal_Assistant",
    liveUrl: "https://geo-dermal-assistant.vercel.app/",
  },
  {
    id: 2,
    title: "GiveHub",
    description: "A modern, full-stack crowdfunding and donation platform designed to connect donors with causes. It features secure authentication, real-time donation processing via PayPal, and a transparent dashboard for tracking contributions.",
    image: "/GiveHub.png",
    techStack: ["Python", "FastAPI", "MongoDB", "Kubernetes"],
    githubUrl: "https://github.com/yshhh17/GiveHub",
    liveUrl: "https://give-hub-inky.vercel.app/",
  },
  {
    id: 3,
    title: "VeriFact",
    description: "Robust authentication service supporting OAuth2, JWT tokens, and fine-grained role-based access control (RBAC). Designed for high availability and security compliance.",
    image: "/placeholder.svg",
    techStack: ["TypeScript", "NestJS", "MySQL", "AWS"],
    githubUrl: "https://github.com/yshhh17/VeriFact",
    liveUrl: "https://github.com/yshhh17/VeriFact",
  },
  {
    id: 4,
    title: "Bucketlst",
    description: "BucketList AI is a Next.js 14 application for AI-powered solo travel planning with TypeScript, Tailwind CSS, and Supabase integration.",
    image: "/bucketlst.png",
    techStack: ["Python", "Docker", "Jenkins", "Terraform"],
    githubUrl: "#",
    liveUrl: "https://bucketlst.io/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <div className="w-16 h-1 bg-primary mb-4 rounded-full" />
          <p className="text-muted-foreground max-w-2xl text-lg">
            Here are some of my recent projects. Each one showcases different aspects 
            of backend development, from API design to cloud infrastructure.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
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
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
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
