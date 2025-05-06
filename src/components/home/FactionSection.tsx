
import React from 'react';

const FactionSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-wow text-3xl md:text-4xl mb-4 text-wow-gold">For All Factions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you fight for the Alliance or the Horde, GuildNexus has you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="wow-border p-6 bg-wow-blue/10">
            <h3 className="font-wow text-2xl mb-4 text-wow-blue">Alliance</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Recruit paladins, priests, and other Alliance heroes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Alliance-themed forms and notifications</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Integration with Alliance guild structures</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="alliance-button w-full">
                For the Alliance!
              </button>
            </div>
          </div>
          
          <div className="wow-border p-6 bg-wow-red/10">
            <h3 className="font-wow text-2xl mb-4 text-wow-red">Horde</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Recruit shamans, warriors, and other Horde champions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Horde-themed forms and notifications</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Integration with Horde guild structures</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="horde-button w-full">
                For the Horde!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactionSection;
