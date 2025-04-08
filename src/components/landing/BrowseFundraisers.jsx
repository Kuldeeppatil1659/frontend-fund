import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const categories = [
  "All Categories",
  "Education",
  "Medical",
  "Women & Girls",
  "Animals",
  "Creative",
  "Food & Hunger",
  "Environment",
  "Children",
  "Memorial",
  "Community Development",
  "Others"
];

const campaigns = [
  {
    id: 1,
    title: "Help Us Save Our Father By Affording His Liver Treatment",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    fundsRequired: 1000000,
    fundsRaised: 580000,
    daysLeft: 41,
    donorsCount: 281,
    category: "Medical"
  },
  {
    id: 2,
    title: "Due to deadly 4th stage Cancer -- Help us heal our father",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    fundsRequired: 2500000,
    fundsRaised: 1800000,
    daysLeft: 23,
    donorsCount: 212,
    category: "Medical"
  },
  {
    id: 3,
    title: "Urgent, A Second Chance at Life—Help Maya Fight Cancer",
    image: "https://images.unsplash.com/photo-1584516050463-9f6c9b28594a?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    fundsRequired: 1650000,
    fundsRaised: 1200000,
    daysLeft: 27,
    donorsCount: 430,
    category: "Medical"
  }
];

function BrowseFundraisers() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedTrending, setSelectedTrending] = useState("Trending");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
    <Navbar/>
    
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-3xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for fundraiser"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="w-full md:w-64 bg-gray-100 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">CATEGORIES</h2>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left py-1 ${
                      category === selectedCategory
                        ? 'text-emerald-600 font-medium'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
              Start a Fundraiser
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-gray-600">Showing fundraisers for</span>
              <div className="relative">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  {selectedCategory}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>
              </div>
              <span className="text-gray-600">under</span>
              <div className="relative">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  {selectedTrending}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>
              </div>
              <span className="text-gray-600">from</span>
              <div className="relative">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  {selectedLocation}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>
              </div>
              <button className="text-red-500 hover:text-red-600 ml-auto">
                Reset Filters
              </button>
            </div>

            {/* Campaign Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-4 line-clamp-2">
                      {campaign.title}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm text-gray-500 mb-1">
                          <span>Funds Required</span>
                          <span>Campaign ends in</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">₹{campaign.fundsRequired.toLocaleString()}</span>
                          <span className="text-red-500 font-medium">{campaign.daysLeft} Days</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-emerald-500 h-2 rounded-full"
                          style={{ width: `${(campaign.fundsRaised / campaign.fundsRequired) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex -space-x-2">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="w-6 h-6 rounded-full border-2 border-white bg-gray-200"
                              ></div>
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gray-500">
                            {campaign.donorsCount} people donated
                          </span>
                        </div>
                        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700 transition-colors">
                          CONTRIBUTE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
}

export default BrowseFundraisers;