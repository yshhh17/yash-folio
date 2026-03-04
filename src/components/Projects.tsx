import ProjectsHeader from "./projects/ProjectsHeader";
import FeaturedProjectCard from "./projects/FeaturedProjectCard";
import ProjectCard from "./projects/ProjectCard";
import { projects } from "./projects/projectsData";

const Projects = () => {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-20 md:py-28 px-4 md:px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <ProjectsHeader />
        <FeaturedProjectCard project={featured} />
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {rest.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
