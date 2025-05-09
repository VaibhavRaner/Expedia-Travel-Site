
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, Package, LogIn, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-expedia-blue">Expedia</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/stays" className="text-gray-600 hover:text-expedia-blue transition-colors">
            Stays
          </Link>
          <Link to="/flights" className="text-gray-600 hover:text-expedia-blue transition-colors">
            Flights
          </Link>
          <Link to="/cars" className="text-gray-600 hover:text-expedia-blue transition-colors">
            Cars
          </Link>
          <Link to="/packages" className="text-gray-600 hover:text-expedia-blue transition-colors">
            Packages
          </Link>
          <Link to="/things-to-do" className="text-gray-600 hover:text-expedia-blue transition-colors">
            Things to do
          </Link>
        </nav>

        {/* Desktop User Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/trips" className="flex items-center text-gray-600 hover:text-expedia-blue transition-colors">
            <Package className="w-5 h-5 mr-1" />
            <span>Trips</span>
          </Link>
          <Link to="/login">
            <Button variant="ghost" className="flex items-center">
              <LogIn className="w-5 h-5 mr-1" />
              <span>Sign in</span>
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-expedia-blue hover:bg-expedia-darkBlue">
              Sign up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 absolute w-full shadow-md animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/stays" className="text-gray-600 hover:text-expedia-blue transition-colors py-2">
              Stays
            </Link>
            <Link to="/flights" className="text-gray-600 hover:text-expedia-blue transition-colors py-2">
              Flights
            </Link>
            <Link to="/cars" className="text-gray-600 hover:text-expedia-blue transition-colors py-2">
              Cars
            </Link>
            <Link to="/packages" className="text-gray-600 hover:text-expedia-blue transition-colors py-2">
              Packages
            </Link>
            <Link to="/things-to-do" className="text-gray-600 hover:text-expedia-blue transition-colors py-2">
              Things to do
            </Link>
            <div className="border-t border-gray-200 pt-4 mt-2">
              <Link to="/trips" className="flex items-center text-gray-600 hover:text-expedia-blue transition-colors py-2">
                <Package className="w-5 h-5 mr-2" />
                <span>Trips</span>
              </Link>
              <Link to="/login" className="flex items-center text-gray-600 hover:text-expedia-blue transition-colors py-2">
                <LogIn className="w-5 h-5 mr-2" />
                <span>Sign in</span>
              </Link>
              <Link to="/signup" className="flex items-center">
                <Button className="bg-expedia-blue hover:bg-expedia-darkBlue w-full mt-2">
                  Sign up
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
