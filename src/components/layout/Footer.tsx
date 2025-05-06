
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border/40 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-wow text-xl text-wow-gold mb-4">GuildNexus</h3>
            <p className="text-muted-foreground">
              The ultimate recruitment solution for World of Warcraft guilds. Streamline your recruitment process with our Discord bot and web platform.
            </p>
          </div>
          
          <div>
            <h4 className="font-wow text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-wow-gold transition-colors">Home</Link></li>
              <li><Link to="/features" className="hover:text-wow-gold transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-wow-gold transition-colors">Pricing</Link></li>
              <li><Link to="/dashboard" className="hover:text-wow-gold transition-colors">Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-wow text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:text-wow-gold transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-wow-gold transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} GuildNexus. All rights reserved.</p>
          <p className="mt-2">Not affiliated with Blizzard Entertainment.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
