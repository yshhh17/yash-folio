import { motion } from "framer-motion";
import { Trophy, Code, Award, Users } from "lucide-react";

interface Achievement {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    highlight: string;
}

const achievements: Achievement[] = [
    {
        id: 1,
        icon: <Code className="w-8 h-8" />,
        title: "Competitive Programming",
        description: "Solved 150+ DSA problems across multiple platforms",
        highlight: "LeetCode(1456) • Codeforces(912)",
    },
    {
        id: 2,
        icon: <Trophy className="w-8 h-8" />,
        title: "Amazon ML Challenge 2025",
        description: "National-level machine learning competition",
        highlight: "Ranked 84th • 78% accuracy",
    },
    {
        id: 3,
        icon: <Award className="w-8 h-8" />,
        title: "Adobe Hackathon 2025",
        description: "Advanced to Round 2 among top teams",
        highlight: "Top 1000+ teams",
    },
    {
        id: 4,
        icon: <Users className="w-8 h-8" />,
        title: "Leadership & Community",
        description: "Executive Member, Start-up Cell",
        highlight: "HackerRank Certified",
    },
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-20 md:py-24 px-4 md:px-6 bg-secondary/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                        Achievements & Certifications
                    </h2>
                    <div className="w-16 h-1 bg-primary mb-4 rounded-full" />
                    <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
                        Recognition for technical excellence, problem-solving abilities, and community contributions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-card rounded-xl border border-border p-5 md:p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    {achievement.icon}
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-3 text-base">
                                        {achievement.description}
                                    </p>
                                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium">
                                        {achievement.highlight}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
