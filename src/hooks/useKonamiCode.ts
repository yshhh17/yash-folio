import { useEffect, useState, useCallback } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export const useKonamiCode = () => {
  const [triggered, setTriggered] = useState(false);
  const [inputSequence, setInputSequence] = useState<string[]>([]);

  const reset = useCallback(() => {
    setTriggered(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newSequence = [...inputSequence, event.code].slice(-KONAMI_CODE.length);
      setInputSequence(newSequence);

      if (newSequence.join(",") === KONAMI_CODE.join(",")) {
        setTriggered(true);
        setInputSequence([]);
        
        // Auto-reset after 5 seconds
        setTimeout(() => {
          setTriggered(false);
        }, 5000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inputSequence]);

  return { triggered, reset };
};
