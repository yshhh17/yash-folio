import { motion } from "framer-motion";

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
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              My Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              I'm a passionate full-stack developer with a strong focus on backend development. 
              I specialize in building scalable APIs, microservices, and database architectures 
              that power modern web applications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              With expertise in cloud infrastructure and DevOps practices, I deliver 
              end-to-end solutions that are not just functional, but also maintainable 
              and performant. I believe in writing clean, well-documented code that 
              stands the test of time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Technical Skills
            </h3>
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {skillGroup.category}
                </h4>
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
