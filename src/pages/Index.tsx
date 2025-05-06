
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import FactionSection from '@/components/home/FactionSection';
import CTASection from '@/components/home/CTASection';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <FactionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
