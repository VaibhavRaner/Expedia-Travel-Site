
import React from 'react';
import SearchTabs from './SearchTabs';

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Hero Background */}
      <div className="hero-pattern relative h-[500px] md:h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-expedia-blue/10 to-expedia-darkBlue/20"></div>
        
        {/* Decorative Circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-expedia-blue/10 rounded-full"></div>
        <div className="absolute top-40 -left-32 w-96 h-96 bg-expedia-yellow/10 rounded-full animate-float"></div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-expedia-darkGray">
              Find your perfect trip
            </h1>
            <p className="text-lg md:text-xl text-expedia-gray mb-8">
              Search deals on hotels, homes, flights, cars, and vacation packages
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <SearchTabs />
          </div>
        </div>
      </div>
      
      {/* Travel Offers Banner */}
      <div className="bg-white w-full py-4 border-t border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
            <div className="text-center md:text-left">
              <span className="bg-expedia-blue/10 text-expedia-darkBlue px-3 py-1 rounded-full text-sm font-medium">
                New!
              </span>
              <span className="ml-2 text-expedia-darkGray">
                Save up to 30% with Member Prices and get rewarded on every trip
              </span>
            </div>
            <button className="text-expedia-blue hover:text-expedia-darkBlue font-medium text-sm">
              Learn more →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
