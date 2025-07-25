import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  color: string;
  left: number;
  delay: number;
}

const ConfettiEffect = ({ active }: { active: boolean }) => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (active) {
      const pieces: ConfettiPiece[] = [];
      const colors = ['#F472B6', '#A855F7', '#60A5FA', '#FDE047', '#FB7185'];
      
      for (let i = 0; i < 50; i++) {
        pieces.push({
          id: i,
          color: colors[Math.floor(Math.random() * colors.length)],
          left: Math.random() * 100,
          delay: Math.random() * 3,
        });
      }
      setConfetti(pieces);
      
      // Clear confetti after animation
      setTimeout(() => setConfetti([]), 4000);
    }
  }, [active]);

  if (!active || confetti.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="confetti absolute w-3 h-3 opacity-80"
          style={{
            backgroundColor: piece.color,
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiEffect;