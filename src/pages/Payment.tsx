
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CreditCard, CheckCircle } from 'lucide-react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Mock payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Payment successful!",
        description: "Thank you for your booking.",
      });
    }, 1500);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Complete your booking</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Payment Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Details</CardTitle>
                      <CardDescription>Enter your payment information to complete your booking.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Payment Method Selection */}
                      <div className="space-y-3">
                        <Label>Payment Method</Label>
                        <RadioGroup 
                          defaultValue="credit-card" 
                          value={paymentMethod}
                          onValueChange={setPaymentMethod}
                          className="grid grid-cols-3 gap-4"
                        >
                          <div>
                            <RadioGroupItem 
                              value="credit-card" 
                              id="credit-card" 
                              className="peer sr-only" 
                            />
                            <Label
                              htmlFor="credit-card"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-gray-300 peer-data-[state=checked]:border-expedia-blue [&:has([data-state=checked])]:border-expedia-blue"
                            >
                              <CreditCard className="mb-2 h-6 w-6" />
                              <span className="text-sm font-medium">Credit Card</span>
                            </Label>
                          </div>
                          
                          <div>
                            <RadioGroupItem 
                              value="paypal" 
                              id="paypal" 
                              className="peer sr-only" 
                            />
                            <Label
                              htmlFor="paypal"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-gray-300 peer-data-[state=checked]:border-expedia-blue [&:has([data-state=checked])]:border-expedia-blue"
                            >
                              <svg className="mb-2 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                <path d="M7.4 3H15.6C16.7 3 17.6 3.8 17.7 4.9L18.6 11.3C18.7 12.2 18 13 17.1 13H6.1C5.2 13 4.4 12.2 4.6 11.3L5.5 4.9C5.6 3.8 6.4 3 7.4 3Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.8 13H2.8C2.3 13 2 12.7 2 12.2V11.3C2 10.8 2.3 10.5 2.8 10.5H4.3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M19.2 13H21.2C21.7 13 22 12.7 22 12.2V11.3C22 10.8 21.7 10.5 21.2 10.5H19.7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17 16L15.5 21H8.5L7 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                              <span className="text-sm font-medium">PayPal</span>
                            </Label>
                          </div>
                          
                          <div>
                            <RadioGroupItem 
                              value="apple-pay" 
                              id="apple-pay" 
                              className="peer sr-only" 
                            />
                            <Label
                              htmlFor="apple-pay"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-gray-300 peer-data-[state=checked]:border-expedia-blue [&:has([data-state=checked])]:border-expedia-blue"
                            >
                              <svg className="mb-2 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                <path d="M6 14.4623C6 14.9106 6.34393 15.2903 6.79918 15.3367L7.03183 15.3587C7.65324 15.4035 8.19379 15.857 8.19379 16.5V16.5C8.19379 17.1811 7.64253 17.5 6.79918 17.5H6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 14.4623C16 14.9106 16.3439 15.2903 16.7992 15.3367L17.0318 15.3587C17.6532 15.4035 18.1938 15.857 18.1938 16.5V16.5C18.1938 17.1811 17.6425 17.5 16.7992 17.5H16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.5 7.5H3.5V13.5H20.5V7.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.5 10.5H7.50898" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.5 10.5H16.509" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.1917 7.5L15.1333 3H8.86667L5.81167 7.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                              <span className="text-sm font-medium">Apple Pay</span>
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      {paymentMethod === 'credit-card' && (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="card-number">Card Number</Label>
                            <Input
                              id="card-number"
                              placeholder="1234 5678 9012 3456"
                              value={cardNumber}
                              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                              maxLength={19}
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="card-name">Name on Card</Label>
                            <Input
                              id="card-name"
                              placeholder="John Doe"
                              value={cardName}
                              onChange={(e) => setCardName(e.target.value)}
                              required
                            />
                          </div>
                          
                          <div className="grid grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiry-month">Expiry Month</Label>
                              <Select value={expiryMonth} onValueChange={setExpiryMonth}>
                                <SelectTrigger id="expiry-month">
                                  <SelectValue placeholder="MM" />
                                </SelectTrigger>
                                <SelectContent>
                                  {[...Array(12)].map((_, i) => {
                                    const month = (i + 1).toString().padStart(2, '0');
                                    return (
                                      <SelectItem key={month} value={month}>
                                        {month}
                                      </SelectItem>
                                    );
                                  })}
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="expiry-year">Expiry Year</Label>
                              <Select value={expiryYear} onValueChange={setExpiryYear}>
                                <SelectTrigger id="expiry-year">
                                  <SelectValue placeholder="YY" />
                                </SelectTrigger>
                                <SelectContent>
                                  {[...Array(10)].map((_, i) => {
                                    const year = (new Date().getFullYear() + i).toString().slice(-2);
                                    return (
                                      <SelectItem key={year} value={year}>
                                        {year}
                                      </SelectItem>
                                    );
                                  })}
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="cvv">CVV</Label>
                              <Input
                                id="cvv"
                                placeholder="123"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                                maxLength={4}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {paymentMethod === 'paypal' && (
                        <div className="space-y-4">
                          <div className="rounded-md border border-gray-200 p-6 text-center">
                            <p>You'll be redirected to PayPal to complete your payment.</p>
                          </div>
                        </div>
                      )}
                      
                      {paymentMethod === 'apple-pay' && (
                        <div className="space-y-4">
                          <div className="rounded-md border border-gray-200 p-6 text-center">
                            <p>You'll be redirected to Apple Pay to complete your payment.</p>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center space-x-2">
                        <div className="flex h-5 items-center space-x-2">
                          <input type="checkbox" id="save-card" className="h-4 w-4 rounded border-gray-300 text-expedia-blue focus:ring-expedia-blue" />
                          <Label htmlFor="save-card" className="text-sm">Save card for future bookings</Label>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        type="submit"
                        className="w-full bg-expedia-blue hover:bg-expedia-darkBlue"
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                            <span>Processing payment...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-2">
                            <CreditCard className="h-4 w-4" />
                            <span>Pay now</span>
                          </div>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </form>
              </div>
              
              {/* Order Summary */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Booking Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium">Hotel Name</h3>
                          <p className="text-sm text-gray-500">Deluxe Room</p>
                          <p className="text-sm text-gray-500">1 night, 2 adults</p>
                        </div>
                        <span className="font-medium">$199.00</span>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Base rate</span>
                        <span>$180.00</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Taxes and fees</span>
                        <span>$19.00</span>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between font-medium">
                      <span>Total</span>
                      <span>$199.00</span>
                    </div>
                    
                    <div className="rounded-md bg-green-50 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-green-800">Free cancellation until Jun 12</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start space-y-2 text-sm text-gray-500">
                    <p>
                      By clicking "Pay now", you agree to the{" "}
                      <Link to="/booking-terms" className="text-expedia-blue hover:underline">
                        booking terms and conditions
                      </Link>
                      .
                    </p>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
