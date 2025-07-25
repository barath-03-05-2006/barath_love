import { useState } from 'react';
import { ArrowLeft, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import memory1 from '@/assets/memory-2.jpg';
import memory2 from '@/assets/memory-3.jpg';
import memory3 from '@/assets/memory-4.jpg';
import memory4 from '@/assets/memory-5.jpg';

interface Memory {
  id: number;
  image: string;
  title: string;
  date: string;
}

const memories: Memory[] = [
  {
    id: 1,
    image: memory1,
    title: "first handhold of our life",
    date: "Always in our hearts",
  },
  {
    id: 2,
    image: memory2,
    title: "Efforts to see you",
    date: "Special day",
  },
  {
    id: 3,
    image: memory3,
    title: "First outing as couple",
    date: "Golden hour",
  },
  {
    id: 4,
    image: memory4,
    title: "first temple date",
    date: "Special moments of our life",
  }
];

const Memories = () => {
  const navigate = useNavigate();
  const [hoveredMemory, setHoveredMemory] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-secondary p-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8 fade-in-up">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 px-4 py-2 bg-card rounded-full shadow-soft hover:scale-105 transition-transform duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Birthday</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              💖 Cherished Memories 💖
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Every moment tells a beautiful story
            </p>
          </div>
          
          <div className="w-24"></div> {/* Spacer for balance */}
        </div>

        {/* Single Photo Layout */}
        <div className="max-w-7xl mx-auto">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className="flex flex-col lg:flex-row items-center gap-8 mb-16 scale-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Photo */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-magical hover:shadow-soft transition-all duration-300 hover:scale-[1.02]">
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Sparkle effect */}
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-birthday-yellow rounded-full sparkle opacity-70"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-birthday-pink fill-current" />
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    {memory.title}
                  </h3>
                </div>
                
                <p className="text-lg text-birthday-blue font-medium">
                  {memory.date}
                </p>
                
                

                {/* Extended paragraph for each memory */}
                <div className="bg-gradient-to-br from-card/30 to-secondary/20 backdrop-blur-sm rounded-2xl p-6 shadow-soft">
                  <p className="text-base text-foreground leading-relaxed">
                    {index === 0 && "intha time na un kai ah pudikira apa oru feel iruthuchi paru vera level and i am totally fall in love with u and that day was totally awesome. and still nee ipa varakum unoda wallpaper la intha photo tha vachiruka. this is so spl to me."}
                    {index === 1 && "on this day it show you about my love. like anaiki una pakurathukaga train la vanthu na irukura place la iruthu apade ah oppsite place ku unakaga vanthu wait panni unkuda time spend pannurathukaga matum tha vanthan anaiki. it was wonderful day for me."}
                    {index === 2 && "our first date namba couple ana aprom pona first place beach tha aintha beach la nee nadaka mudiyama vanthathu aprom ithu elathukum mela ainaki tha enaku kedaicha first kiss and that was totally awesome beacause aintha beach view aintha wind aintha waves ithu ellathukum naduvula aintha kiss."}
                    {index === 3 && "our first temple date. kovil ku pogatha enna kovil ku kutitu poi enaiyum ainga ukara vachi aintha god oda back story la sollitu irutha ana na una matum tha pathutu ah irutha nee solluratha enna nu kekala ethuvum pannala yen focus full ah nee tha ainaki aintha day ah spl ah nee tha mathuna."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-16 mb-8 fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="inline-block p-8 bg-card/50 backdrop-blur-sm rounded-3xl shadow-soft">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              🌟 Why i am in love with you this much? 🌟
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              you always value my feeling that no one have never done before, you will always priorities me, you care for me, your character that shows your kindness to me and finally you loved me more than anything in this world this made me to fall in love with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memories;