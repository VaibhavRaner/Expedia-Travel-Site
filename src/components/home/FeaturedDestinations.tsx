
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

interface DestinationProps {
  name: string;
  image: string;
  description: string;
  price: string;
}

const Destination = ({ name, image, description, price }: DestinationProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardContent className="pt-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-expedia-blue font-semibold">{price}</span>
        </div>
        <div className="flex items-center gap-1 text-expedia-gray mb-2">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{description}</span>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <button className="text-expedia-blue hover:text-expedia-darkBlue font-medium text-sm w-full text-left">
          Explore →
        </button>
      </CardFooter>
    </Card>
  );
};

const FeaturedDestinations = () => {
  const destinations = [
    {
      name: "Paris",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
      description: "The city of lights",
      price: "From $599",
    },
    {
      name: "New York",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop",
      description: "The Big Apple",
      price: "From $499",
    },
    {
      name: "Tokyo",
      image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop",
      description: "The Land of the Rising Sun",
      price: "From $799",
    },
    {
      name: "Bali",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop",
      description: "Island of the Gods",
      price: "From $699",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Featured Destinations</h2>
          <p className="text-expedia-gray">Popular places to explore for your next adventure</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Destination
              key={index}
              name={destination.name}
              image={destination.image}
              description={destination.description}
              price={destination.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
