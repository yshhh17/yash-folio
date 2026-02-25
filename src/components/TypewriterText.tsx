import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterTextProps {
  words: string[];
  className?: string;
  typingSpeed?: number;   // ms per char
  pauseDuration?: number; // ms to hold full word
}

const TypewriterText = ({
  words,
  className = "",
  typingSpeed = 60,
  pauseDuration = 2000,
}: TypewriterTextProps) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "erasing">("typing");

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (phase === "typing") {
      if (displayed.length < currentWord.length) {
        const t = setTimeout(
          () => setDisplayed(currentWord.slice(0, displayed.length + 1)),
          typingSpeed
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("pause"), pauseDuration);
        return () => clearTimeout(t);
      }
    }

    if (phase === "pause") {
      const t = setTimeout(() => setPhase("erasing"), 200);
      return () => clearTimeout(t);
    }

    if (phase === "erasing") {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          typingSpeed / 2
        );
        return () => clearTimeout(t);
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }
  }, [displayed, phase, wordIndex, words, typingSpeed, pauseDuration]);

  return (
    <span className={className}>
      <span>{displayed}</span>
      {/* blinking caret */}
      <motion.span
        aria-hidden
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle rounded-sm"
      />
    </span>
  );
};

export default TypewriterText;
