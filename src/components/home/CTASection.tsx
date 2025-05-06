
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-texture">
      <div className="container mx-auto px-4">
        <div className="wow-border p-8 md:p-12 bg-gradient-to-br from-card to-background max-w-4xl mx-auto text-center">
          <h2 className="font-wow text-3xl md:text-4xl mb-6 text-wow-gold">Ready to Enhance Your Guild Recruitment?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of WoW guilds already using GuildNexus to streamline their recruitment process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button className="wow-button w-full sm:w-auto text-lg py-6">
                Get Started Free
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-wow-gold/50 hover:border-wow-gold text-wow-gold w-full sm:w-auto text-lg py-6">
                Login
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required to get started. Free for small guilds.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
