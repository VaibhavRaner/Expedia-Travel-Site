
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, MapPin, Bed, Airplane, Car, Package, Search } from 'lucide-react';

const SearchTabs = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  
  return (
    <div className="w-full">
      <Tabs defaultValue="stays" className="w-full">
        <TabsList className="grid grid-cols-4 md:w-[400px] bg-expedia-lightGray">
          <TabsTrigger value="stays" className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span className="hidden sm:inline">Stays</span>
          </TabsTrigger>
          <TabsTrigger value="flights" className="flex items-center gap-1">
            <Airplane className="w-4 h-4" />
            <span className="hidden sm:inline">Flights</span>
          </TabsTrigger>
          <TabsTrigger value="cars" className="flex items-center gap-1">
            <Car className="w-4 h-4" />
            <span className="hidden sm:inline">Cars</span>
          </TabsTrigger>
          <TabsTrigger value="packages" className="flex items-center gap-1">
            <Package className="w-4 h-4" />
            <span className="hidden sm:inline">Packages</span>
          </TabsTrigger>
        </TabsList>
        
        {/* Stays Search */}
        <TabsContent value="stays">
          <Card className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="destination">Going to</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-expedia-gray" />
                  <Input
                    id="destination"
                    placeholder="Enter a destination"
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Check-in / Check-out</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className="w-full justify-start text-left font-normal h-10"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate && endDate ? (
                        <>
                          {format(startDate, "MMM d")} - {format(endDate, "MMM d, yyyy")}
                        </>
                      ) : (
                        <span>Select dates</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="range"
                      selected={{
                        from: startDate || undefined,
                        to: endDate || undefined,
                      }}
                      onSelect={(range) => {
                        setStartDate(range?.from);
                        setEndDate(range?.to);
                      }}
                      numberOfMonths={2}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <Label>Travelers</Label>
                <Select defaultValue="2adults">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select travelers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1adult">1 adult</SelectItem>
                    <SelectItem value="2adults">2 adults</SelectItem>
                    <SelectItem value="2adults1child">2 adults, 1 child</SelectItem>
                    <SelectItem value="2adults2children">2 adults, 2 children</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex justify-center mt-6">
              <Button className="bg-expedia-blue hover:bg-expedia-darkBlue w-full md:w-auto px-8">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </Card>
        </TabsContent>
        
        {/* Flights Search */}
        <TabsContent value="flights">
          <Card className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="departure">From</Label>
                <Input id="departure" placeholder="City or airport" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="arrival">To</Label>
                <Input id="arrival" placeholder="City or airport" />
              </div>
              <div className="space-y-2">
                <Label>Dates</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className="w-full justify-start text-left font-normal h-10"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "MMM d, yyyy") : "Departure date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label>Travelers</Label>
                <Select defaultValue="1adult">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select travelers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1adult">1 adult</SelectItem>
                    <SelectItem value="2adults">2 adults</SelectItem>
                    <SelectItem value="2adults1child">2 adults, 1 child</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <Button className="bg-expedia-blue hover:bg-expedia-darkBlue w-full md:w-auto px-8">
                <Search className="mr-2 h-4 w-4" />
                Search Flights
              </Button>
            </div>
          </Card>
        </TabsContent>
        
        {/* Cars Search */}
        <TabsContent value="cars">
          <Card className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pickup">Pick-up location</Label>
                <Input id="pickup" placeholder="City or airport" />
              </div>
              <div className="space-y-2">
                <Label>Pick-up / Drop-off</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className="w-full justify-start text-left font-normal h-10"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate && endDate ? (
                        <>
                          {format(startDate, "MMM d")} - {format(endDate, "MMM d, yyyy")}
                        </>
                      ) : (
                        <span>Select dates</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="range"
                      selected={{
                        from: startDate || undefined,
                        to: endDate || undefined,
                      }}
                      onSelect={(range) => {
                        setStartDate(range?.from);
                        setEndDate(range?.to);
                      }}
                      numberOfMonths={2}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label>Car type</Label>
                <Select defaultValue="standard">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select car type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Economy</SelectItem>
                    <SelectItem value="compact">Compact</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <Button className="bg-expedia-blue hover:bg-expedia-darkBlue w-full md:w-auto px-8">
                <Search className="mr-2 h-4 w-4" />
                Search Cars
              </Button>
            </div>
          </Card>
        </TabsContent>
        
        {/* Packages Search */}
        <TabsContent value="packages">
          <Card className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="package-from">From</Label>
                <Input id="package-from" placeholder="City or airport" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="package-to">To</Label>
                <Input id="package-to" placeholder="Destination" />
              </div>
              <div className="space-y-2">
                <Label>Dates</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className="w-full justify-start text-left font-normal h-10"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate && endDate ? (
                        <>
                          {format(startDate, "MMM d")} - {format(endDate, "MMM d, yyyy")}
                        </>
                      ) : (
                        <span>Select dates</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="range"
                      selected={{
                        from: startDate || undefined,
                        to: endDate || undefined,
                      }}
                      onSelect={(range) => {
                        setStartDate(range?.from);
                        setEndDate(range?.to);
                      }}
                      numberOfMonths={2}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label>Travelers</Label>
                <Select defaultValue="2adults">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select travelers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1adult">1 adult</SelectItem>
                    <SelectItem value="2adults">2 adults</SelectItem>
                    <SelectItem value="2adults1child">2 adults, 1 child</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <Button className="bg-expedia-blue hover:bg-expedia-darkBlue w-full md:w-auto px-8">
                <Search className="mr-2 h-4 w-4" />
                Search Packages
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SearchTabs;
