import React, { useState } from 'react';
import { Heart, Users, Trophy, ArrowRight, DollarSign, BarChart3, Globe2, Menu } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

function Landing() {
  return (
    <div className="min-h-screen bg-white">

    {/* Hero Section */}
    <div className="relative h-screen">
  <div className="absolute inset-0">
    <img
      className="w-full h-full object-cover"
      src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
      alt="People helping"
    />
    <div className="absolute inset-0 bg-black/50"></div>
  </div>
  
  <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
    <div>
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
    <Footer/>
  </div>
);
}


export default Landing;