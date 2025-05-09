
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Search } from 'lucide-react';

const TravelMap = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Explore Destinations</h2>
          <p className="text-expedia-gray">Find perfect places for your next adventure</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Map Placeholder */}
            <div className="relative bg-expedia-lightGray h-[400px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              {/* Map Pins */}
              <div className="absolute top-1/4 left-1/3">
                <div className="relative group cursor-pointer">
                  <div className="absolute -inset-3 rounded-full bg-expedia-blue/20 scale-0 group-hover:scale-100 transition-all duration-300"></div>
                  <MapPin className="h-6 w-6 text-expedia-blue drop-shadow-lg" />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-expedia-darkGray text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Paris, France
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 right-1/3">
                <div className="relative group cursor-pointer">
                  <div className="absolute -inset-3 rounded-full bg-expedia-blue/20 scale-0 group-hover:scale-100 transition-all duration-300"></div>
                  <MapPin className="h-6 w-6 text-expedia-blue drop-shadow-lg" />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-expedia-darkGray text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Rome, Italy
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-1/3 left-1/2">
                <div className="relative group cursor-pointer">
                  <div className="absolute -inset-3 rounded-full bg-expedia-blue/20 scale-0 group-hover:scale-100 transition-all duration-300"></div>
                  <MapPin className="h-6 w-6 text-expedia-blue drop-shadow-lg" />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-expedia-darkGray text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Barcelona, Spain
                  </div>
                </div>
              </div>
              
              {/* Map Controls */}
              <div className="absolute bottom-4 right-4">
                <div className="bg-white rounded-lg shadow-lg p-2">
                  <div className="flex flex-col gap-2">
                    <button className="p-2 hover:bg-expedia-lightGray rounded">+</button>
                    <div className="h-px w-full bg-expedia-lightGray"></div>
                    <button className="p-2 hover:bg-expedia-lightGray rounded">−</button>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-4 right-4">
                <Button className="bg-white text-expedia-darkGray hover:bg-expedia-lightGray">
                  View Full Map
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="h-full">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Popular Destinations</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 hover:bg-expedia-lightGray rounded-lg transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-expedia-blue/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-expedia-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Paris, France</h4>
                      <p className="text-expedia-gray text-sm">10,000+ properties</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 hover:bg-expedia-lightGray rounded-lg transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-expedia-blue/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-expedia-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold">London, UK</h4>
                      <p className="text-expedia-gray text-sm">8,500+ properties</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 hover:bg-expedia-lightGray rounded-lg transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-expedia-blue/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-expedia-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold">New York, USA</h4>
                      <p className="text-expedia-gray text-sm">7,200+ properties</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 hover:bg-expedia-lightGray rounded-lg transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-expedia-blue/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-expedia-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Tokyo, Japan</h4>
                      <p className="text-expedia-gray text-sm">5,800+ properties</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 hover:bg-expedia-lightGray rounded-lg transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-expedia-blue/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-expedia-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Rome, Italy</h4>
                      <p className="text-expedia-gray text-sm">4,600+ properties</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="w-full flex items-center justify-center gap-2">
                    <Search className="h-4 w-4" />
                    Find More Destinations
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelMap;
