import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    period: "2023 - Present",
    description: "Leading the development of a cloud-native SaaS platform. Architected the microservices infrastructure using Node.js and Kubernetes, reducing system latency by 40%.",
    skills: ["React", "Node.js", "Kubernetes", "AWS"],
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "DataStream Solutions",
    period: "2021 - 2023",
    description: "Developed high-performance APIs for real-time data processing. Implemented a custom caching layer with Redis that handled 50k+ daily active users.",
    skills: ["Python", "Django", "PostgreSQL", "Redis"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-border last:border-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                <span className="text-sm text-muted-foreground font-medium bg-secondary px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Briefcase size={16} />
                <span className="font-medium">{exp.company}</span>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-background border border-border rounded text-xs text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
