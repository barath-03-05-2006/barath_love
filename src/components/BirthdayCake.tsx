import { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';
import birthdayCakeImg from '@/assets/birthday-cake.jpg';
import memoryImg from '@/assets/memory-1.jpg';

const BirthdayCake = () => {
  const [candles, setCandles] = useState([
    { id: 1, lit: true },
    { id: 2, lit: true },
    { id: 3, lit: true },
    { id: 4, lit: true },
    { id: 5, lit: true },
  ]);

  const [isBlown, setIsBlown] = useState(false);

  const blowCandles = () => {
    setCandles(candles.map(candle => ({ ...candle, lit: false })));
    setIsBlown(true);
    
    // Relight candles after 3 seconds
    setTimeout(() => {
      setCandles(candles.map(candle => ({ ...candle, lit: true })));
      setIsBlown(false);
    }, 3000);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Cake Image */}
      <div className="relative float">
        <img 
          src={isBlown ? memoryImg : birthdayCakeImg} 
          alt={isBlown ? "Beautiful Memory" : "Birthday Cake"}
          className="w-80 h-80 object-cover rounded-2xl shadow-magical"
        />
        
       
        
        {/* Sparkles around cake */}
        <div className="absolute -top-4 -left-4 w-3 h-3 bg-birthday-yellow rounded-full sparkle"></div>
        <div className="absolute -top-2 -right-6 w-2 h-2 bg-birthday-pink rounded-full sparkle" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-12 -left-8 w-4 h-4 bg-birthday-purple rounded-full sparkle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-16 -right-4 w-3 h-3 bg-birthday-blue rounded-full sparkle" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Blow candles button */}
      <button 
        onClick={blowCandles}
        className="mt-6 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-transform duration-200 glow"
        disabled={isBlown}
      >
        {isBlown ? '✨ Press the view memories below ✨' : '🎂 Blow the candles 🎂'}
      </button>
    </div>
  );
};

export default BirthdayCake;