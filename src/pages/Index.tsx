import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TechnologyPartners from '@/components/TechnologyPartners';
import AIPersonalities from '@/components/AIPersonalities';
import HowItWorks from '@/components/HowItWorks';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <TechnologyPartners />
      <AIPersonalities />
      <HowItWorks />
    </main>
  );
};

export default Index;
