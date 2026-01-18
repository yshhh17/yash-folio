import { ExternalLink, Github } from "lucide-react";

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
    title: "Project One",
    description: "A scalable REST API built with Node.js and PostgreSQL, handling thousands of requests per second.",
    image: "/placeholder.svg",
    techStack: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Microservices architecture for an e-commerce platform with real-time inventory management.",
    image: "/placeholder.svg",
    techStack: ["Python", "FastAPI", "MongoDB", "Kubernetes"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Authentication service with OAuth2, JWT tokens, and role-based access control.",
    image: "/placeholder.svg",
    techStack: ["TypeScript", "NestJS", "MySQL", "AWS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Project Four",
    description: "Real-time data processing pipeline for analytics dashboard with WebSocket support.",
    image: "/placeholder.svg",
    techStack: ["Go", "Kafka", "ClickHouse", "Grafana"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "Project Five",
    description: "CI/CD automation tool that reduced deployment time by 60% across multiple environments.",
    image: "/placeholder.svg",
    techStack: ["Python", "Docker", "Jenkins", "Terraform"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "Project Six",
    description: "GraphQL API gateway aggregating multiple microservices into a unified interface.",
    image: "/placeholder.svg",
    techStack: ["Node.js", "GraphQL", "Redis", "Docker"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Projects
        </h2>
        <div className="w-16 h-1 bg-primary mb-4 rounded-full" />
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Here are some of my recent projects. Each one showcases different aspects 
          of backend development, from API design to cloud infrastructure.
        </p>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="aspect-video bg-secondary overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-secondary text-muted-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
