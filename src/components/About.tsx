const skills = [
  { category: "Languages", items: ["Node.js", "Python", "TypeScript", "Go"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"] },
  { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
  { category: "Frameworks", items: ["Express", "FastAPI", "NestJS", "Django"] },
];

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Lines of Code", value: "100K+" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          About Me
        </h2>
        <div className="w-16 h-1 bg-primary mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate full-stack developer with a strong focus on backend development. 
              I specialize in building scalable APIs, microservices, and database architectures 
              that power modern web applications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With expertise in cloud infrastructure and DevOps practices, I deliver 
              end-to-end solutions that are not just functional, but also maintainable 
              and performant. I believe in writing clean, well-documented code that 
              stands the test of time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm border border-border hover:border-primary hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
