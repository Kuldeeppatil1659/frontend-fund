import React, { useEffect, useState, useRef, useCallback } from "react";
import { Search, ChevronDown } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BrowseFundraisers() {
  const [selectedCategory, setSelectedCategory] = useState(["All Categories"]);
  const [selectedTrending, setSelectedTrending] = useState("Trending");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [searchQuery, setSearchQuery] = useState("");
  const [campaigns, setCampaigns] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef(null);
  const navigate = useNavigate();
  const [states, setStates] = useState([]);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  // Fetch campaigns when the component mounts
  useEffect(() => {
    fetchCampaigns(1); // Fetch the first page initially
  }, []);

  // Fetch campaigns when the page changes (for infinite scroll)
  useEffect(() => {
    if (page > 1) {
      fetchCampaigns(page);
    }
  }, [page]);
  useEffect(() => {
    getStateName();
  }, []);
  const getStateName = async (country) => {
    console.log("Country Name checking", country);
    const states = await axios.get(
      `https://countriesnow.space/api/v0.1/countries/states/q?country=India`
    );
    setStates(states?.data?.data.states);

    console.log(states, "checking for states");
  };

  const fetchCampaigns = async (page, location = selectedLocation) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/fundRaiser/createFundRaiserPost?page=${page}&limit=2&location=${location}`
      );
      const newCampaigns = response.data.posts;
      setCampaigns((prevCampaigns) => [...prevCampaigns, ...newCampaigns]);
      setHasMore(newCampaigns.length > 0); // Check if there are more campaigns
    } catch (err) {
      console.error(err);
    }
  };

  const lastCampaignRef = useCallback(
    (node) => {
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [hasMore]
  );

  const handleCampaignClick = () => {
    navigate(`/campaign`);
  };

  return (
    <>
      <Navbar />

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
                <div className="relative inline-block text-left">
                  <button
                    onClick={() =>
                      setShowLocationDropdown(!showLocationDropdown)
                    }
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    {selectedLocation}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </button>

                  {showLocationDropdown && (
                    <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1 max-h-60 overflow-y-auto">
                        <button
                          onClick={() => {
                            setSelectedLocation("All Locations");
                            setShowLocationDropdown(false);
                            setCampaigns([]);
                            setPage(1);
                            fetchCampaigns(1, "All Locations"); // Reset filter
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          All Locations
                        </button>

                        {/* Dynamic list from API */}
                        {states.map((state, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSelectedLocation(state.name);
                              setShowLocationDropdown(false);
                              setCampaigns([]);
                              setPage(1);
                              fetchCampaigns(1, state.name);
                            }}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {state.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <button className="text-red-500 hover:text-red-600 ml-auto">
                  Reset Filters
                </button>
              </div>

              {/* Campaign Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {campaigns.map((campaign, index) => {
                  if (campaigns.length === index + 1) {
                    return (
                      <div
                        ref={lastCampaignRef}
                        key={campaign.id}
                        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => handleCampaignClick(campaign.id)}
                      >
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
                                <span className="font-semibold">
                                  ₹{campaign.goal}
                                </span>
                                <span className="text-red-500 font-medium">
                                  {campaign.daysLeft} Days
                                </span>
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-emerald-500 h-2 rounded-full"
                                style={{
                                  width: `${(20000 / campaign.goal) * 100}%`,
                                }}
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
                    );
                  } else {
                    return (
                      <div
                        key={campaign.id}
                        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => handleCampaignClick(campaign.id)}
                      >
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
                                <span className="font-semibold">
                                  {/* ₹{campaign.fundsRequired.toLocaleString()} */}
                                </span>
                                <span className="text-red-500 font-medium">
                                  {campaign.daysLeft} Days
                                </span>
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-emerald-500 h-2 rounded-full"
                                style={{
                                  width: `${
                                    (campaign.fundsRaised /
                                      campaign.fundsRequired) *
                                    100
                                  }%`,
                                }}
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
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BrowseFundraisers;
