import React, { useState } from 'react';
import { Heart, Users, Trophy, ArrowRight, DollarSign, BarChart3, Globe2, Menu } from 'lucide-react';

function Landing() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
    {/* Navigation */}
    <nav className="bg-transparent text-white  fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-xl font-bold text-">FundRaiser</span>
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

    {/* Hero Section */}
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
          alt="People helping"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-64">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Make a Difference Today
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our mission to create positive change. Every donation brings hope and transforms lives.
          </p>
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center gap-2 mx-auto">
            Donate Now <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    {/* Stats Section */}
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-emerald-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">50K+</div>
            <div className="text-gray-600">Lives Impacted</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Globe2 className="w-12 h-12 text-emerald-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">25</div>
            <div className="text-gray-600">Countries Reached</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <DollarSign className="w-12 h-12 text-emerald-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">$2M+</div>
            <div className="text-gray-600">Funds Raised</div>
          </div>
        </div>
      </div>
    </div>

    {/* Features Section */}
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to transparency, efficiency, and making a lasting impact in communities worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <Heart className="w-12 h-12 text-emerald-600 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Direct Impact</h3>
            <p className="text-gray-600">
              90% of donations go directly to our programs, ensuring your contribution makes the maximum impact.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <Trophy className="w-12 h-12 text-emerald-600 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Award Winning</h3>
            <p className="text-gray-600">
              Recognized for excellence in charitable work and transparent fund management.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <BarChart3 className="w-12 h-12 text-emerald-600 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Full Transparency</h3>
            <p className="text-gray-600">
              Regular updates and detailed reports on how your donations are making a difference.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="bg-emerald-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Make a Difference?
        </h2>
        <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
          Your contribution, no matter how small, can help create lasting change in someone's life.
        </p>
        <button className="bg-white text-emerald-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-colors inline-flex items-center gap-2">
          Start Donating <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>

    {/* Footer */}
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p>&copy; 2025 FundRaiser. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
);
}


export default Landing;