
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import TravelSuggestions from '@/components/home/TravelSuggestions';
import TravelMap from '@/components/home/TravelMap';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedDestinations />
        <TravelSuggestions />
        <TravelMap />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
