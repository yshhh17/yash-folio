import { motion } from "framer-motion";

const skills = [
    { category: "Languages", items: [ "JavaScript", "TypeScript", "Python", "C++", "SQL", "Bash"] },
    { category: "Full Stack Engineering", items: ["React", "TailwindCSS", "Node.js", "Express.js", "FastAPI", "REST APIs"] },
    { category: "Databases & Caching", items: ["PostgreSQL", "SQLAlchemy ORM", "MongoDB", "Redis"] },
    { category: "Tools & Technologies", items: ["Docker", "Linux", "Git", "Nginx", "Vim", "NeoVim", "Gemini CLI", "VS Code", "Postman"] },
    { category: "Core CS", items: ["DSA", "System Design", "OS", "Computer Networks", "DBMS"] },
];

const Skills = () => {
    return (
        <div className="relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                    Technical Skills
                </h2>
                <motion.div
                    className="h-1 bg-primary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 64 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                />
            </motion.div>

            <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                    <motion.div
                        key={skillGroup.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                        whileHover={{ y: -3 }}
                        className="rounded-xl border border-border/70 bg-card/60 p-4 md:p-5"
                    >
                        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-3">
                            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                            {skillGroup.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill) => (
                                <motion.span
                                    key={skill}
                                    whileHover={{ y: -2, scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 250, damping: 18 }}
                                    className="px-3 py-1.5 bg-background border border-border rounded-full text-sm text-muted-foreground"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
