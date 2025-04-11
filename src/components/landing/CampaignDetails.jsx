import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Share2, Clock, Users, ArrowRight, Target, Calendar, Tag, ChevronRight, Facebook, Twitter, Linkedin, Link2 } from 'lucide-react';
import Footer from './Footer';

function CampaignDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('story');
  const [showShareModal, setShowShareModal] = useState(false);

  // This would typically come from an API call using the id
  const campaign = {
    id: 1,
    title: "Help Us Save Our Father By Affording His Liver Treatment",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    description: "We are raising funds for our father's urgent liver transplant. The estimated cost of the surgery is ₹10,00,000. This includes the cost of the surgery, post-operative care, and medications. Every contribution, no matter how small, will help save our father's life.",
    story: "Our father, aged 52, has been diagnosed with end-stage liver disease. He needs an urgent liver transplant to survive. He has always been our pillar of strength, working tirelessly to provide for our family. Now, it's our turn to help him.\n\nThe doctors have given us hope that with the transplant, he can recover and lead a normal life. However, the cost of the treatment is beyond our means. We have already spent our savings on his medical expenses so far.\n\nWe are reaching out to kind hearts like yours to help us save our father. Your support will give him a second chance at life.",
    fundsRequired: 1000000,
    fundsRaised: 580000,
    daysLeft: 41,
    donorsCount: 281,
    category: "Medical",
    organizer: {
      name: "Rahul Kumar",
      location: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      verified: true,
      campaignsCreated: 1,
      joinedDate: "February 2025"
    },
    recentDonors: [
      {
        name: "Anonymous",
        amount: 5000,
        message: "Get well soon uncle! Praying for your speedy recovery.",
        time: "2 hours ago"
      },
      {
        name: "Priya S.",
        amount: 10000,
        message: "Hoping for a successful surgery. Stay strong!",
        time: "5 hours ago"
      },
      {
        name: "Anonymous",
        amount: 2000,
        message: "Prayers for quick recovery",
        time: "1 day ago"
      }
    ],
    updates: [
      {
        date: "March 15, 2025",
        title: "Pre-surgery preparations started",
        content: "We have started the pre-surgery preparations. The doctors are optimistic about the procedure."
      },
      {
        date: "March 10, 2025",
        title: "Found matching donor",
        content: "We have found a matching donor for the transplant. Thank you all for your continued support."
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1584515933487-779824d29309",
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982",
      "https://images.unsplash.com/photo-1584515933487-779824d29309",
    ]
  };

  const progress = (campaign.fundsRaised / campaign.fundsRequired) * 100;

  const ShareModal = () => (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-100 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h3 className="text-xl font-semibold mb-4">Share this campaign</h3>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center gap-3 py-2 px-4 rounded-lg border hover:bg-blue-50 transition-colors">
            <Facebook className="w-5 h-5 text-blue-600" />
            <span>Share on Facebook</span>
          </button>
          <button className="w-full flex items-center justify-center gap-3 py-2 px-4 rounded-lg border hover:bg-blue-50 transition-colors">
            <Twitter className="w-5 h-5 text-blue-400" />
            <span>Share on Twitter</span>
          </button>
          <button className="w-full flex items-center justify-center gap-3 py-2 px-4 rounded-lg border hover:bg-blue-50 transition-colors">
            <Linkedin className="w-5 h-5 text-blue-700" />
            <span>Share on LinkedIn</span>
          </button>
          <button className="w-full flex items-center justify-center gap-3 py-2 px-4 rounded-lg border hover:bg-gray-50 transition-colors">
            <Link2 className="w-5 h-5 text-gray-600" />
            <span>Copy Link</span>
          </button>
        </div>
        <button 
          onClick={() => setShowShareModal(false)}
          className="mt-6 w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gray-900">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm mb-4">
            <Tag className="w-4 h-4" />
            <span>{campaign.category}</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{campaign.title}</h1>
          <p className="text-gray-200 max-w-2xl">{campaign.description}</p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Navigation Tabs */}
            <div className="bg-white rounded-t-lg shadow-sm mb-6">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('story')}
                  className={`flex-1 py-4 px-6 text-center font-medium ${
                    activeTab === 'story'
                      ? 'text-emerald-600 border-b-2 border-emerald-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Story
                </button>
                <button
                  onClick={() => setActiveTab('updates')}
                  className={`flex-1 py-4 px-6 text-center font-medium ${
                    activeTab === 'updates'
                      ? 'text-emerald-600 border-b-2 border-emerald-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Updates
                </button>
                <button
                  onClick={() => setActiveTab('donors')}
                  className={`flex-1 py-4 px-6 text-center font-medium ${
                    activeTab === 'donors'
                      ? 'text-emerald-600 border-b-2 border-emerald-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Donors
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              {activeTab === 'story' && (
                <div>
                  <div className="prose max-w-none">
                    <p className="whitespace-pre-line text-gray-600 leading-relaxed">
                      {campaign.story}
                    </p>
                  </div>
                  
                  {/* Gallery */}
                  <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {campaign.gallery.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Gallery image ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'updates' && (
                <div className="space-y-6">
                  {campaign.updates.map((update, index) => (
                    <div key={index} className="border-l-2 border-emerald-500 pl-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{update.date}</span>
                      </div>
                      <h3 className="font-medium text-gray-900 mt-2">{update.title}</h3>
                      <p className="text-gray-600 mt-2">{update.content}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'donors' && (
                <div className="space-y-6">
                  {campaign.recentDonors.map((donor, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                          <Heart className="w-6 h-6 text-emerald-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-gray-900">{donor.name}</h3>
                          <span className="text-sm text-gray-500">{donor.time}</span>
                        </div>
                        <p className="text-emerald-600 font-medium mt-1">₹{donor.amount.toLocaleString()}</p>
                        <p className="text-gray-600 mt-2 italic">"{donor.message}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className=" top-24 space-y-6">
              {/* Progress Card */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span>Raised</span>
                      <span>Goal</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-2xl font-bold text-gray-900">₹{campaign.fundsRaised.toLocaleString()}</span>
                      <span className="text-gray-600">₹{campaign.fundsRequired.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-100">
                          {progress.toFixed(1)}% Funded
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded-full bg-emerald-100">
                      <div
                        style={{ width: `${progress}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                      ></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mb-1">
                        <Users className="w-4 h-4" />
                        <span>Donors</span>
                      </div>
                      <div className="font-semibold text-gray-900">{campaign.donorsCount}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mb-1">
                        <Clock className="w-4 h-4" />
                        <span>Days Left</span>
                      </div>
                      <div className="font-semibold text-gray-900">{campaign.daysLeft}</div>
                    </div>
                  </div>
                  <button className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center text-lg font-semibold">
                    Donate Now <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setShowShareModal(true)}
                    className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                  >
                    Share <Share2 className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Organizer Card */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Campaign Organizer</h2>
                <div className="flex items-start">
                  <img
                    src={campaign.organizer.image}
                    alt={campaign.organizer.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-gray-900">{campaign.organizer.name}</h3>
                      {campaign.organizer.verified && (
                        <span className="bg-emerald-100 text-emerald-600 text-xs px-2 py-1 rounded-full">Verified</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{campaign.organizer.location}</p>
                    <div className="mt-4 space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        <span>{campaign.organizer.campaignsCreated} campaign created</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Joined {campaign.organizer.joinedDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer/>

      {/* Share Modal */}
      {showShareModal && <ShareModal />}
    </div>
  );
}

export default CampaignDetails;