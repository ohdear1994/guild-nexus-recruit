
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="border-b border-border/40 backdrop-blur-sm bg-background/95 sticky top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="text-wow-gold h-6 w-6" />
          <Link to="/" className="font-wow text-xl text-wow-gold">
            GuildNexus
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-medium hover:text-wow-gold transition-colors">
            Home
          </Link>
          <Link to="/features" className="font-medium hover:text-wow-gold transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="font-medium hover:text-wow-gold transition-colors">
            Pricing
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" className="border-wow-gold/50 hover:border-wow-gold text-wow-gold">
              Login
            </Button>
          </Link>
          <Link to="/register" className="hidden sm:block">
            <Button className="wow-button animate-pulse-glow">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
