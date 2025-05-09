
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plane, MapPin, Star, Package as PackageIcon } from 'lucide-react';

const TravelSuggestions = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6 text-expedia-darkGray">
        Travel Suggestions
      </h2>

      <Tabs defaultValue="flights" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="flights" className="data-[state=active]:bg-expedia-blue data-[state=active]:text-white">
            Flights
          </TabsTrigger>
          <TabsTrigger value="hotels" className="data-[state=active]:bg-expedia-blue data-[state=active]:text-white">
            Hotels
          </TabsTrigger>
          <TabsTrigger value="packages" className="data-[state=active]:bg-expedia-blue data-[state=active]:text-white">
            Packages
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="flights" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Flight Suggestion Card 1 */}
          <Card className="bg-white shadow-md rounded-lg overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Plane className="mr-2 w-5 h-5 text-expedia-blue" />
                  <h3 className="text-lg font-semibold text-expedia-darkGray">
                    New York
                  </h3>
                </div>
                <Badge className="bg-green-100 text-green-800 rounded-full px-2 py-1 text-xs font-medium">
                  30% Off
                </Badge>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                Round trip from $200
              </p>
              <div className="flex items-center space-x-2 mb-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">JFK Airport</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-xs text-gray-500">4.5/5 (1200 reviews)</span>
              </div>
              <Button className="bg-expedia-blue hover:bg-expedia-darkBlue text-white w-full mt-4">
                Book Flight
              </Button>
            </CardContent>
          </Card>

          {/* Flight Suggestion Card 2 */}
          <Card className="bg-white shadow-md rounded-lg overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Plane className="mr-2 w-5 h-5 text-expedia-blue" />
                  <h3 className="text-lg font-semibold text-expedia-darkGray">
                    Los Angeles
                  </h3>
                </div>
                <Badge className="bg-green-100 text-green-800 rounded-full px-2 py-1 text-xs font-medium">
                  25% Off
                </Badge>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                One way from $150
              </p>
              <div className="flex items-center space-x-2 mb-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">LAX Airport</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-xs text-gray-500">4.2/5 (950 reviews)</span>
              </div>
              <Button className="bg-expedia-blue hover:bg-expedia-darkBlue text-white w-full mt-4">
                Book Flight
              </Button>
            </CardContent>
          </Card>

          {/* Flight Suggestion Card 3 */}
          <Card className="bg-white shadow-md rounded-lg overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Plane className="mr-2 w-5 h-5 text-expedia-blue" />
                  <h3 className="text-lg font-semibold text-expedia-darkGray">
                    Chicago
                  </h3>
                </div>
                <Badge className="bg-green-100 text-green-800 rounded-full px-2 py-1 text-xs font-medium">
                  20% Off
                </Badge>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                Round trip from $180
              </p>
              <div className="flex items-center space-x-2 mb-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">ORD Airport</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-xs text-gray-500">4.0/5 (800 reviews)</span>
              </div>
              <Button className="bg-expedia-blue hover:bg-expedia-darkBlue text-white w-full mt-4">
                Book Flight
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hotels" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Hotel Suggestion Card 1 */}
          <Card className="bg-white shadow-md rounded-lg overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <MapPin className="mr-2 w-5 h-5 text-expedia-blue" />
                  <h3 className="text-lg font-semibold text-expedia-darkGray">
                    Luxury Suite
                  </h3>
                </div>
                <Badge className="bg-green-100 text-green-800 rounded-full px-2 py-1 text-xs font-medium">
                  15% Off
                </Badge>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                Starting from $250/night
              </p>
              <div className="flex items-center space-x-2 mb-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">Downtown</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-xs text-gray-500">4.7/5 (1500 reviews)</span>
              </div>
              <Button className="bg-expedia-blue hover:bg-expedia-darkBlue text-white w-full mt-4">
                Book Hotel
              </Button>
            </CardContent>
          </Card>

          {/* Hotel Suggestion Card 2 */}
          <Card className="bg-white shadow-md rounded-lg overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <MapPin className="mr-2 w-5 h-5 text-expedia-blue" />
                  <h3 className="text-lg font-semibold text-expedia-darkGray">
                    Cozy Inn
                  </h3>
                </div>
                <Badge className="bg-green-100 text-green-800 rounded-full px-2 py-1 text-xs font-medium">
                  10% Off
                </Badge>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                Starting from $120/night
              </p>
              <div className="flex items-center space-x-2 mb-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">Near Airport</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-xs text-gray-500">4.3/5 (800 reviews)</span>
              </div>
              <Button className="bg-expedia-blue hover:bg-expedia-darkBlue text-white w-full mt-4">
                Book Hotel
              </Button>
            </CardContent>
          </Card>

           {/* Hotel Suggestion Card 3 */}
           <Card className="bg-white shadow-md rounded-lg overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <MapPin className="mr-2 w-5 h-5 text-expedia-blue" />
                  <h3 className="text-lg font-semibold text-expedia-darkGray">
                    Beach Resort
                  </h3>
                </div>
                <Badge className="bg-green-100 text-green-800 rounded-full px-2 py-1 text-xs font-medium">
                  20% Off
                </Badge>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                Starting from $300/night
              </p>
              <div className="flex items-center space-x-2 mb-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">Ocean View</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-xs text-gray-500">4.8/5 (2000 reviews)</span>
              </div>
              <Button className="bg-expedia-blue hover:bg-expedia-darkBlue text-white w-full mt-4">
                Book Hotel
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="packages" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Package Suggestion Card 1 */}
          <Card className="bg-white shadow-md rounded-lg overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <PackageIcon className="mr-2 w-5 h-5 text-expedia-blue" />
                  <h3 className="text-lg font-semibold text-expedia-darkGray">
                    City Explorer
                  </h3>
                </div>
                <Badge className="bg-green-100 text-green-800 rounded-full px-2 py-1 text-xs font-medium">
                  Save $100
                </Badge>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                Hotel + Flight from $500
              </p>
              <div className="flex items-center space-x-2 mb-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">3 Days, 2 Nights</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-xs text-gray-500">4.6/5 (1000 reviews)</span>
              </div>
              <Button className="bg-expedia-blue hover:bg-expedia-darkBlue text-white w-full mt-4">
                View Package
              </Button>
            </CardContent>
          </Card>

          {/* Package Suggestion Card 2 */}
          <Card className="bg-white shadow-md rounded-lg overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <PackageIcon className="mr-2 w-5 h-5 text-expedia-blue" />
                  <h3 className="text-lg font-semibold text-expedia-darkGray">
                    Beach Getaway
                  </h3>
                </div>
                <Badge className="bg-green-100 text-green-800 rounded-full px-2 py-1 text-xs font-medium">
                  Save $150
                </Badge>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                Resort + Flight from $700
              </p>
              <div className="flex items-center space-x-2 mb-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">5 Days, 4 Nights</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-xs text-gray-500">4.9/5 (1800 reviews)</span>
              </div>
              <Button className="bg-expedia-blue hover:bg-expedia-darkBlue text-white w-full mt-4">
                View Package
              </Button>
            </CardContent>
          </Card>

          {/* Package Suggestion Card 3 */}
          <Card className="bg-white shadow-md rounded-lg overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <PackageIcon className="mr-2 w-5 h-5 text-expedia-blue" />
                  <h3 className="text-lg font-semibold text-expedia-darkGray">
                    Adventure Tour
                  </h3>
                </div>
                <Badge className="bg-green-100 text-green-800 rounded-full px-2 py-1 text-xs font-medium">
                  Save $200
                </Badge>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                Hotel + Activities from $600
              </p>
              <div className="flex items-center space-x-2 mb-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">4 Days, 3 Nights</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-xs text-gray-500">4.7/5 (1400 reviews)</span>
              </div>
              <Button className="bg-expedia-blue hover:bg-expedia-darkBlue text-white w-full mt-4">
                View Package
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TravelSuggestions;
