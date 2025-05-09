
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Bed, Airplane, Car, Package } from 'lucide-react';

const TravelSuggestions = () => {
  return (
    <section className="py-16 bg-expedia-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Travel Inspiration</h2>
          <p className="text-expedia-gray">Find ideas for your next trip</p>
        </div>
        
        <Tabs defaultValue="hotels" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-xl">
              <TabsTrigger value="hotels" className="flex items-center gap-2">
                <Bed className="h-4 w-4" />
                <span className="hidden sm:inline">Hotels</span>
              </TabsTrigger>
              <TabsTrigger value="flights" className="flex items-center gap-2">
                <Airplane className="h-4 w-4" />
                <span className="hidden sm:inline">Flights</span>
              </TabsTrigger>
              <TabsTrigger value="cars" className="flex items-center gap-2">
                <Car className="h-4 w-4" />
                <span className="hidden sm:inline">Cars</span>
              </TabsTrigger>
              <TabsTrigger value="packages" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                <span className="hidden sm:inline">Packages</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* Hotels Content */}
          <TabsContent value="hotels">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white overflow-hidden h-full">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury Hotel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Luxury Stays</h3>
                  <p className="text-expedia-gray mb-4">Experience premium accommodations with exceptional amenities</p>
                  <Button variant="outline" className="w-full">View Luxury Hotels</Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white overflow-hidden h-full">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop"
                    alt="Budget Friendly"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Budget Friendly</h3>
                  <p className="text-expedia-gray mb-4">Great value accommodations without compromising on quality</p>
                  <Button variant="outline" className="w-full">View Budget Hotels</Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white overflow-hidden h-full">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1467987506553-8f3916508521?q=80&w=2060&auto=format&fit=crop"
                    alt="All-Inclusive Resorts"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">All-Inclusive Resorts</h3>
                  <p className="text-expedia-gray mb-4">Worry-free vacation with everything included</p>
                  <Button variant="outline" className="w-full">View All-Inclusive</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Flights Content */}
          <TabsContent value="flights">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white overflow-hidden h-full">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
                    alt="International Flights"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">International Flights</h3>
                  <p className="text-expedia-gray mb-4">Explore the world with our best deals on international flights</p>
                  <Button variant="outline" className="w-full">View International Flights</Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white overflow-hidden h-full">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1976&auto=format&fit=crop"
                    alt="Domestic Flights"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Domestic Flights</h3>
                  <p className="text-expedia-gray mb-4">Quick and affordable domestic travel options</p>
                  <Button variant="outline" className="w-full">View Domestic Flights</Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white overflow-hidden h-full">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop"
                    alt="Direct Flights"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Direct Flights</h3>
                  <p className="text-expedia-gray mb-4">Save time with non-stop flight options</p>
                  <Button variant="outline" className="w-full">View Direct Flights</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Cars Content */}
          <TabsContent value="cars">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white overflow-hidden h-full">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2064&auto=format&fit=crop"
                    alt="Luxury Cars"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Luxury Cars</h3>
                  <p className="text-expedia-gray mb-4">Travel in style with premium car rentals</p>
                  <Button variant="outline" className="w-full">View Luxury Cars</Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white overflow-hidden h-full">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
                    alt="Economy Cars"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Economy Cars</h3>
                  <p className="text-expedia-gray mb-4">Affordable and fuel-efficient car options</p>
                  <Button variant="outline" className="w-full">View Economy Cars</Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white overflow-hidden h-full">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop"
                    alt="SUVs & Vans"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">SUVs & Vans</h3>
                  <p className="text-expedia-gray mb-4">Perfect for families and group travel</p>
                  <Button variant="outline" className="w-full">View SUVs & Vans</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Packages Content */}
          <TabsContent value="packages">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white overflow-hidden h-full">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1476673160081-cf065607f449?q=80&w=1972&auto=format&fit=crop"
                    alt="Beach Packages"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Beach Vacations</h3>
                  <p className="text-expedia-gray mb-4">Sun, sand, and sea with our exclusive beach packages</p>
                  <Button variant="outline" className="w-full">View Beach Packages</Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white overflow-hidden h-full">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=2076&auto=format&fit=crop"
                    alt="City Breaks"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">City Breaks</h3>
                  <p className="text-expedia-gray mb-4">Explore the world's most exciting urban destinations</p>
                  <Button variant="outline" className="w-full">View City Packages</Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white overflow-hidden h-full">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=2070&auto=format&fit=crop"
                    alt="Adventure Packages"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Adventure Packages</h3>
                  <p className="text-expedia-gray mb-4">Thrilling experiences for the adventurous traveler</p>
                  <Button variant="outline" className="w-full">View Adventure Packages</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TravelSuggestions;
