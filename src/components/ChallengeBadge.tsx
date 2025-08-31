import React from 'react';

const ChallengeBadge = () => {
  return (
    <div className="flex justify-center pb-8 animate-fade-up">
      <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-primary text-sm font-medium text-primary-foreground border border-white/20 backdrop-blur-glass shadow-glow">
        <span className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse"></span>
        Built for Murf Coding Challenge 4
      </div>
    </div>
  );
};

export default ChallengeBadge;