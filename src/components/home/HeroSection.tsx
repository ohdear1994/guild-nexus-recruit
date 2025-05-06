
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-[600px] flex items-center bg-texture overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background z-0"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="font-wow text-4xl md:text-6xl mb-6 text-wow-gold">
            Guild Recruitment, Simplified
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/90">
            Streamline your World of Warcraft guild recruitment with our powerful Discord bot and web platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button className="wow-button w-full sm:w-auto text-lg py-6">
                Get Started
              </Button>
            </Link>
            <Link to="/features">
              <Button variant="outline" className="border-wow-gold/50 hover:border-wow-gold text-wow-gold w-full sm:w-auto text-lg py-6">
                Learn More
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 flex flex-row gap-8 justify-center">
            <div className="p-6 wow-border bg-card/80 backdrop-blur-sm">
              <h3 className="font-wow text-wow-blue mb-2">Alliance</h3>
              <p className="text-sm text-muted-foreground">Recruit the finest heroes of Azeroth</p>
            </div>
            <div className="p-6 wow-border bg-card/80 backdrop-blur-sm">
              <h3 className="font-wow text-wow-red mb-2">Horde</h3>
              <p className="text-sm text-muted-foreground">Find the strongest warriors for your ranks</p>
            </div>
            <div className="p-6 wow-border bg-card/80 backdrop-blur-sm">
              <h3 className="font-wow text-wow-gold mb-2">Bot Integration</h3>
              <p className="text-sm text-muted-foreground">Seamless Discord experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
