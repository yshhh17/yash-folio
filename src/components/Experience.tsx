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
    role: "AI Research Intern",
    company: "BSNL India",
    period: "May 2025 - July 2025",
    description: "Developed an AI-driven telecom optimization system processing 50,000+ geospatial points, improving coverage accuracy by 18%; responsible for integrating pretrained models into the backend. Reduced system response time and optimized backend performance using SQL and NoSQL databases for training and collecting model responses.",
    skills: ["SQL", "NoSQL", "AI", "Backend Development"],
  },
  {
    id: 2,
    role: "Full Stack Developer Intern",
    company: "Bucketlst.io",
    period: "Nov 2025 – Jan 2026",
    description: "Worked on a travel bucket-list platform enabling users to create, share, and track experiences. Built NestJS APIs for authentication and bucket list features. Developed Next.js frontend and used Supabase + Google Cloud for DB, storage, and deployment.",
    skills: ["NestJS", "Next.js", "Supabase", "Google Cloud"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 md:py-24 px-4 md:px-6 bg-secondary/30 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute -top-20 -left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        animate={{ x: [0, 10, 0], y: [0, -10, 0], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <motion.div
            className="h-1 bg-primary rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />
        </motion.div>

        <div className="relative space-y-0">
          <motion.div
            aria-hidden
            className="absolute left-0 top-0 bottom-0 w-[2px] bg-border"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 6 }}
              className={`relative pl-6 md:pl-8 border-l-2 border-border ${index !== experiences.length - 1 ? 'pb-12' : ''}`}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"
                whileHover={{ scale: 1.2, boxShadow: "0 0 0 6px hsl(var(--primary) / 0.15)" }}
              />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg md:text-xl font-bold text-foreground">{exp.role}</h3>
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
                  <motion.span
                    key={skill}
                    className="px-2 py-1 bg-background border border-border rounded text-xs text-muted-foreground"
                    whileHover={{ y: -2, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  >
                    {skill}
                  </motion.span>
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
