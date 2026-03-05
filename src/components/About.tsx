import { motion } from "framer-motion";
import { containerVariants } from "./about/aboutVariants";
import AboutHeader from "./about/AboutHeader";
import AboutBio from "./about/AboutBio";
import AboutStats from "./about/AboutStats";
import CPPlatforms from "./about/CPPlatforms";
import ResumeButton from "./about/ResumeButton";

const About = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    className="relative z-10 flex flex-col gap-7"
  >
    <AboutHeader />
    <AboutStats />
    <AboutBio />
    <CPPlatforms />
    <ResumeButton />
  </motion.div>
);

export default About;
