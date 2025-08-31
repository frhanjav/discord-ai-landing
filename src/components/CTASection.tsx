import React from 'react';
import { Button } from '@/components/ui/button';
import { Bot, ExternalLink, BookOpen, MessageCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="mt-16 text-center animate-fade-up">
            <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Contact Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;