import { useEffect, useState } from "react";

interface KonamiOverlayProps {
  isActive: boolean;
}

const KonamiOverlay = ({ isActive }: KonamiOverlayProps) => {
  const [confetti, setConfetti] = useState<{ id: number; left: number; delay: number; color: string }[]>([]);

  useEffect(() => {
    if (isActive) {
      const colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b"];
      const newConfetti = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
      setConfetti(newConfetti);
    } else {
      setConfetti([]);
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-3 h-3 animate-fall"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            borderRadius: Math.random() > 0.5 ? "50%" : "0",
          }}
        />
      ))}

      {/* Message */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-card/95 backdrop-blur-sm border border-primary px-8 py-6 rounded-2xl shadow-2xl shadow-primary/20 animate-scale-in">
          <p className="text-2xl font-bold text-foreground text-center mb-2">
            🎮 KONAMI CODE ACTIVATED! 🎮
          </p>
          <p className="text-muted-foreground text-center">
            You discovered the secret! You're a true gamer.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(720deg);
            opacity: 0;
          }
        }
        
        @keyframes scale-in {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-fall {
          animation: fall 3s ease-in-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default KonamiOverlay;
