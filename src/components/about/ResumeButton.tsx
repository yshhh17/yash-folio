import { motion } from "framer-motion";
import { fadeUp } from "./aboutVariants";

const RESUME_URL =
  "https://drive.google.com/file/d/1krmIszJeEvJMp7uM-pYOMWMF3YmYnCm-/view";

const ResumeButton = () => (
  <motion.div variants={fadeUp}>
    <motion.a
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/30 transition-all"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
      Download Resume
      <motion.span
        animate={{ x: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        className="text-primary-foreground/70"
      >
        →
      </motion.span>
    </motion.a>
  </motion.div>
);

export default ResumeButton;
