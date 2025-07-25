const FloatingBalloons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {/* Left side balloons */}
      <div className="absolute left-8 top-20 balloon" style={{ animationDelay: '0s' }}>
        <div className="w-12 h-16 bg-birthday-pink rounded-full opacity-80 relative">
          <div className="absolute bottom-0 left-1/2 w-px h-20 bg-foreground/20 transform -translate-x-1/2"></div>
        </div>
      </div>
      
      <div className="absolute left-16 top-40 balloon" style={{ animationDelay: '1s' }}>
        <div className="w-10 h-14 bg-birthday-purple rounded-full opacity-80 relative">
          <div className="absolute bottom-0 left-1/2 w-px h-16 bg-foreground/20 transform -translate-x-1/2"></div>
        </div>
      </div>
      
      <div className="absolute left-4 top-60 balloon" style={{ animationDelay: '2s' }}>
        <div className="w-14 h-18 bg-birthday-blue rounded-full opacity-80 relative">
          <div className="absolute bottom-0 left-1/2 w-px h-24 bg-foreground/20 transform -translate-x-1/2"></div>
        </div>
      </div>
      
      {/* Right side balloons */}
      <div className="absolute right-8 top-32 balloon" style={{ animationDelay: '0.5s' }}>
        <div className="w-12 h-16 bg-birthday-yellow rounded-full opacity-80 relative">
          <div className="absolute bottom-0 left-1/2 w-px h-20 bg-foreground/20 transform -translate-x-1/2"></div>
        </div>
      </div>
      
      <div className="absolute right-16 top-52 balloon" style={{ animationDelay: '1.5s' }}>
        <div className="w-10 h-14 bg-birthday-coral rounded-full opacity-80 relative">
          <div className="absolute bottom-0 left-1/2 w-px h-16 bg-foreground/20 transform -translate-x-1/2"></div>
        </div>
      </div>
      
      <div className="absolute right-4 top-72 balloon" style={{ animationDelay: '2.5s' }}>
        <div className="w-14 h-18 bg-birthday-pink rounded-full opacity-80 relative">
          <div className="absolute bottom-0 left-1/2 w-px h-24 bg-foreground/20 transform -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingBalloons;