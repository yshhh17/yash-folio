import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
          About Me
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full" />
      </motion.div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
          My Journey
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg">
          I'm a passionate B.Tech Computer Science student with a strong focus on full-stack development.
          I specialize in building scalable web applications and AI-driven systems.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
          With expertise in modern technologies, I deliver
          end-to-end solutions that are not just functional, but also maintainable
          and performant. I believe in writing clean, well-documented code that
          stands the test of time.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
          I'm also passionate about competitive programming and problem-solving.
          I regularly practice on platforms like{" "}
          <a href="https://leetcode.com/u/yshhh/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
            LeetCode
          </a>{" "}
          where I've solved 150+ problems with a rating of 1656, and{" "}
          <a href="https://codeforces.com/profile/q_" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
            Codeforces
          </a>{" "}
          where I hold a Pupil rank. These challenges help me sharpen my algorithmic thinking
          and data structures knowledge.
        </p>

        {/* Resume Link */}
        <div className="mt-8">
          <a
            href="https://drive.google.com/file/d/1WFAF3wj-kfusVLsP2EtmrEo_axiv8WQ4/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 md:px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-semibold text-sm md:text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            View Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
