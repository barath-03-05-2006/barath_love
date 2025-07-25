import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Gift, Sparkles, Heart } from 'lucide-react';
import BirthdayCake from '@/components/BirthdayCake';
import ConfettiEffect from '@/components/ConfettiEffect';
import FloatingBalloons from '@/components/FloatingBalloons';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentWish, setCurrentWish] = useState(0);

  const birthdayWishes = [
    "🎉 Happy Birthday to my dear wifey! 🎉",
    "✨ May your special day be filled with magical moments ✨",
    "🌟 Wishing you many more happy returns of the day 🌟",
    "💖 Another year of wonderful memories begins today 💖",
    "🎈 this year will be your year all the best! 🎈"
  ];

  useEffect(() => {
    // Trigger confetti on page load
    setTimeout(() => setShowConfetti(true), 500);
    
    // Cycle through birthday wishes
    const interval = setInterval(() => {
      setCurrentWish((prev) => (prev + 1) % birthdayWishes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const triggerCelebration = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 100);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background effects */}
      <FloatingBalloons />
      <ConfettiEffect active={showConfetti} />
      
      {/* Main content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Main heading */}
          <div className="mb-8 fade-in-up">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Sparkles className="w-12 h-12 text-birthday-yellow sparkle" />
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                HAPPY
              </h1>
              <Sparkles className="w-12 h-12 text-birthday-pink sparkle" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent mb-4">
              BIRTHDAY
            </h2>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent mb-4">
              WIFEY
            </h2>
            
            <div className="flex items-center justify-center space-x-3">
              <Heart className="w-8 h-8 text-birthday-coral fill-current sparkle" />
              <div className="text-2xl md:text-3xl font-light text-muted-foreground">
                {birthdayWishes[currentWish]}
              </div>
              <Heart className="w-8 h-8 text-birthday-purple fill-current sparkle" />
            </div>
          </div>

          {/* Birthday cake */}
          <div className="mb-12 slide-in-left" style={{ animationDelay: '0.5s' }}>
            <BirthdayCake />
          </div>

          {/* Birthday message */}
          <div className="mb-12 scale-in" style={{ animationDelay: '1s' }}>
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-magical max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Gift className="w-8 h-8 text-birthday-pink" />
                <h3 className="text-3xl font-semibold text-primary">
                  Today is a special day for me and you
                </h3>
                <Gift className="w-8 h-8 text-birthday-blue" />
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                On this beautiful day, i need to spend my whole day with you but it can't happen now, 
                but i am very eagerly waiting for the evening so that i can make this day a little more happier for you ✨
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 fade-in-up" style={{ animationDelay: '1.5s' }}>
            <Button
              onClick={() => navigate('/memories')}
              className="magical-gradient text-white font-semibold px-8 py-4 rounded-full text-lg shadow-magical hover:scale-105 transition-transform duration-200 border-0"
            >
              <Heart className="w-5 h-5 mr-2" />
              View our Memories
            </Button>
          </div>

          {/* Footer message */}
          <div className="mt-16 text-center fade-in-up" style={{ animationDelay: '2s' }}>
            <p className="text-muted-foreground text-lg">
              Made with 💖 for my spl one
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-8 left-8 bounce-gentle">
        <div className="w-6 h-6 bg-birthday-yellow rounded-full sparkle"></div>
      </div>
      <div className="absolute top-20 right-12 bounce-gentle" style={{ animationDelay: '1s' }}>
        <div className="w-8 h-8 bg-birthday-pink rounded-full sparkle"></div>
      </div>
      <div className="absolute bottom-20 right-20 bounce-gentle" style={{ animationDelay: '0.5s' }}>
        <div className="w-5 h-5 bg-birthday-purple rounded-full sparkle"></div>
      </div>
    </div>
  );
};

export default Index;
