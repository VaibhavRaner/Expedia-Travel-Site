
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DatePickerWithRange } from '@/components/ui/date-range-picker';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format } from 'date-fns';
import { 
  MapPin, 
  Bed, 
  Plane, 
  Car, 
  Package, 
  Search, 
  Calendar, 
  ArrowRight,
  Users
} from 'lucide-react';

const SearchTabs = () => {
  // Stays state
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState<undefined | {
    from: Date;
    to?: Date | undefined;
  }>();
  const [guests, setGuests] = useState(1);

  // Flights state
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [flightDates, setFlightDates] = useState<undefined | {
    from: Date;
    to?: Date | undefined;
  }>();
  const [passengers, setPassengers] = useState(1);
  const [flightClass, setFlightClass] = useState('economy');

  // Cars state
  const [pickupLocation, setPickupLocation] = useState('');
  const [carDates, setCarDates] = useState<undefined | {
    from: Date;
    to?: Date | undefined;
  }>();
  const [carType, setCarType] = useState('all');

  // Packages state
  const [packageOrigin, setPackageOrigin] = useState('');
  const [packageDestination, setPackageDestination] = useState('');
  const [packageDates, setPackageDates] = useState<undefined | {
    from: Date;
    to?: Date | undefined;
  }>();
  const [packageTravelers, setPackageTravelers] = useState(1);

  const handleSearch = (type: string) => {
    switch (type) {
      case 'stays':
        alert(`Searching for ${guests} guests in ${location} from ${dates?.from ? format(dates.from, 'yyyy-MM-dd') : 'N/A'} to ${dates?.to ? format(dates.to, 'yyyy-MM-dd') : 'N/A'}`);
        break;
      case 'flights':
        alert(`Searching for ${flightClass} flight for ${passengers} passenger(s) from ${departure} to ${destination} on ${flightDates?.from ? format(flightDates.from, 'yyyy-MM-dd') : 'N/A'} to ${flightDates?.to ? format(flightDates.to, 'yyyy-MM-dd') : 'N/A'}`);
        break;
      case 'cars':
        alert(`Searching for ${carType} car at ${pickupLocation} from ${carDates?.from ? format(carDates.from, 'yyyy-MM-dd') : 'N/A'} to ${carDates?.to ? format(carDates.to, 'yyyy-MM-dd') : 'N/A'}`);
        break;
      case 'packages':
        alert(`Searching for package for ${packageTravelers} traveler(s) from ${packageOrigin} to ${packageDestination} from ${packageDates?.from ? format(packageDates.from, 'yyyy-MM-dd') : 'N/A'} to ${packageDates?.to ? format(packageDates.to, 'yyyy-MM-dd') : 'N/A'}`);
        break;
      default:
        alert('Search functionality coming soon!');
    }
  };

  return (
    <Tabs defaultValue="stays" className="w-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="stays"><Bed className="mr-2 h-4 w-4" /> Stays</TabsTrigger>
        <TabsTrigger value="flights"><Plane className="mr-2 h-4 w-4" /> Flights</TabsTrigger>
        <TabsTrigger value="cars"><Car className="mr-2 h-4 w-4" /> Cars</TabsTrigger>
        <TabsTrigger value="packages"><Package className="mr-2 h-4 w-4" /> Packages</TabsTrigger>
        <TabsTrigger value="things-to-do">Things to do</TabsTrigger>
      </TabsList>
      <TabsContent value="stays">
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Location Input */}
              <div>
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <Input
                    type="text"
                    id="location"
                    placeholder="Where are you going?"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-8"
                  />
                  <MapPin className="absolute left-2.5 top-3.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Date Range Picker */}
              <div>
                <Label>Dates</Label>
                <DatePickerWithRange setDates={setDates} dates={dates} numberOfMonths={2} />
              </div>

              {/* Guests Select */}
              <div>
                <Label htmlFor="guests">Guests</Label>
                <Select value={guests.toString()} onValueChange={value => setGuests(parseInt(value))}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="1 guest" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} guest{num > 1 ? 's' : ''}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <Button onClick={() => handleSearch('stays')} className="bg-expedia-blue hover:bg-expedia-darkBlue">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="flights">
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Departure Input */}
              <div>
                <Label htmlFor="departure">From</Label>
                <div className="relative">
                  <Input
                    type="text"
                    id="departure"
                    placeholder="Departure city/airport"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                    className="pl-8"
                  />
                  <Plane className="absolute left-2.5 top-3.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Destination Input */}
              <div>
                <Label htmlFor="destination">To</Label>
                <div className="relative">
                  <Input
                    type="text"
                    id="destination"
                    placeholder="Destination city/airport"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="pl-8"
                  />
                  <ArrowRight className="absolute left-2.5 top-3.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Date Range Picker - Now with single month */}
              <div>
                <Label>Dates</Label>
                <DatePickerWithRange setDates={setFlightDates} dates={flightDates} numberOfMonths={1} />
              </div>

              {/* Passengers Select */}
              <div>
                <Label htmlFor="passengers">Travelers</Label>
                <Select value={passengers.toString()} onValueChange={value => setPassengers(parseInt(value))}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="1 passenger" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} passenger{num > 1 ? 's' : ''}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Flight Class Select */}
              <div className="flex flex-col justify-end">
                <Select value={flightClass} onValueChange={setFlightClass}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Economy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Economy</SelectItem>
                    <SelectItem value="premium">Premium Economy</SelectItem>
                    <SelectItem value="business">Business Class</SelectItem>
                    <SelectItem value="first">First Class</SelectItem>
                  </SelectContent>
                </Select>

                {/* Search Button */}
                <Button onClick={() => handleSearch('flights')} className="bg-expedia-blue hover:bg-expedia-darkBlue mt-4">
                  <Search className="mr-2 h-4 w-4" />
                  Search Flights
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="cars">
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Pickup Location Input */}
              <div>
                <Label htmlFor="pickupLocation">Pickup & drop-off location</Label>
                <div className="relative">
                  <Input
                    type="text"
                    id="pickupLocation"
                    placeholder="City, airport, or address"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="pl-8"
                  />
                  <MapPin className="absolute left-2.5 top-3.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Date Range Picker - Now with single month */}
              <div>
                <Label>Dates</Label>
                <DatePickerWithRange setDates={setCarDates} dates={carDates} numberOfMonths={1} />
              </div>

              {/* Car Type Select */}
              <div>
                <Label htmlFor="carType">Car type</Label>
                <Select value={carType} onValueChange={setCarType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All car types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All car types</SelectItem>
                    <SelectItem value="economy">Economy</SelectItem>
                    <SelectItem value="compact">Compact</SelectItem>
                    <SelectItem value="midsize">Midsize</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="fullsize">Full size</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <Button onClick={() => handleSearch('cars')} className="bg-expedia-blue hover:bg-expedia-darkBlue">
                <Search className="mr-2 h-4 w-4" />
                Search Cars
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="packages">
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Origin Input */}
              <div>
                <Label htmlFor="packageOrigin">From</Label>
                <div className="relative">
                  <Input
                    type="text"
                    id="packageOrigin"
                    placeholder="City or airport"
                    value={packageOrigin}
                    onChange={(e) => setPackageOrigin(e.target.value)}
                    className="pl-8"
                  />
                  <Plane className="absolute left-2.5 top-3.5 h-4 w-4 text-muted-foreground rotate-45" />
                </div>
              </div>

              {/* Destination Input */}
              <div>
                <Label htmlFor="packageDestination">To</Label>
                <div className="relative">
                  <Input
                    type="text"
                    id="packageDestination"
                    placeholder="City or airport"
                    value={packageDestination}
                    onChange={(e) => setPackageDestination(e.target.value)}
                    className="pl-8"
                  />
                  <MapPin className="absolute left-2.5 top-3.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Date Range Picker - Now with single month */}
              <div>
                <Label>Dates</Label>
                <DatePickerWithRange setDates={setPackageDates} dates={packageDates} numberOfMonths={1} />
              </div>

              {/* Travelers Select */}
              <div className="flex flex-col">
                <Label htmlFor="packageTravelers">Travelers</Label>
                <div className="flex items-center gap-4">
                  <Select value={packageTravelers.toString()} onValueChange={value => setPackageTravelers(parseInt(value))}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="1 traveler" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} traveler{num > 1 ? 's' : ''}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button onClick={() => handleSearch('packages')} className="bg-expedia-blue hover:bg-expedia-darkBlue">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="things-to-do">
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Location Input */}
              <div>
                <Label htmlFor="activityLocation">Location</Label>
                <div className="relative">
                  <Input
                    type="text"
                    id="activityLocation"
                    placeholder="Where are you going?"
                    className="pl-8"
                  />
                  <MapPin className="absolute left-2.5 top-3.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Date Range Picker */}
              <div>
                <Label>Dates</Label>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Select dates"
                    className="pl-8"
                  />
                  <Calendar className="absolute left-2.5 top-3.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <Button onClick={() => handleSearch('activities')} className="bg-expedia-blue hover:bg-expedia-darkBlue w-full">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default SearchTabs;
