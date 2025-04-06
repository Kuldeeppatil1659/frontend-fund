import React, { useState, useEffect } from 'react';
import { Heart, Users, Trophy, ArrowRight, DollarSign, BarChart3, Globe2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger when scrollY is more than 50px
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white shadow-md text-gray-900' : 'bg-white sm:bg-white lg:bg-transparent sm:text-black lg:text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-xl font-bold">FundRaiser</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-emerald-600">Home</a>
            <a href="#" className="hover:text-emerald-600">About</a>
            <a href="#" className="hover:text-emerald-600">Projects</a>
            <a href="#" className="hover:text-emerald-600">Contact</a>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-colors">
              Donate Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:text-emerald-600"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <a href="#" className="block px-3 py-2 hover:text-emerald-600">Home</a>
            <a href="#" className="block px-3 py-2 hover:text-emerald-600">About</a>
            <a href="#" className="block px-3 py-2 hover:text-emerald-600">Projects</a>
            <a href="#" className="block px-3 py-2 hover:text-emerald-600">Contact</a>
            <div className="px-3 py-2">
              <button className="w-full bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-colors">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
