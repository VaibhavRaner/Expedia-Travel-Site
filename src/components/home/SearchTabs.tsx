
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DatePickerWithRange } from '@/components/ui/date-range-picker';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, MapPin, Bed, Plane, Car, Package, Search } from 'lucide-react';

const SearchTabs = () => {
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState<undefined | {
    from: Date;
    to?: Date | undefined;
  }>();
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    alert(`Searching for ${guests} guests in ${location} from ${dates?.from ? format(dates.from, 'yyyy-MM-dd') : 'N/A'} to ${dates?.to ? format(dates.to, 'yyyy-MM-dd') : 'N/A'}`);
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
                <DatePickerWithRange setDates={setDates} dates={dates} />
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
              <Button onClick={handleSearch} className="bg-expedia-blue hover:bg-expedia-darkBlue">
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
            Flights content
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="cars">
        <Card>
          <CardContent className="p-4">
            Cars content
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="packages">
        <Card>
          <CardContent className="p-4">
            Packages content
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="things-to-do">
        <Card>
          <CardContent className="p-4">
            Things to do content
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default SearchTabs;
