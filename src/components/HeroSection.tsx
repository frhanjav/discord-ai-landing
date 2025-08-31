import React from 'react';
import { Button } from '@/components/ui/button';
import { Bot, Volume2, Zap } from 'lucide-react';
import ChallengeBadge from './ChallengeBadge';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-background">
      
      <div className="container relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto animate-fade-up">
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 leading-tight">
            Bring AI Personalities to Your Discord Voice Channels
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience natural group conversations with three unique AI personalities. 
            Real-time voice processing powered by cutting-edge AI technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="default" size="default" className="shadow-glow">
              <Bot className="w-5 h-5 mr-2" />
              Add to Discord
            </Button>
            <Button variant="default" size="default">
              <Volume2 className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
          
          <ChallengeBadge />
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent" />
              <span>Real-time Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-accent" />
              <span>3 AI Personalities</span>
            </div>
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-accent" />
              <span>High-quality Voice</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;