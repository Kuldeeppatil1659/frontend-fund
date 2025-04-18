import React, { useState } from "react";

// Using a placeholder campaign image
const campaignImage =
  "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80";

// Mock campaign data (will be replaced with API data later)
const campaignData = {
  title: "Help Build Community Garden",
  description:
    "We're raising funds to create a sustainable community garden that will provide fresh produce for local families in need. This project will transform an empty lot into a thriving green space.",
  goal: 50000,
  raised: 32500,
  daysLeft: 15,
  supporters: 143,
};

function ContributePage() {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle contribution submission here
    console.log("Contribution amount:", amount);
  };

  const progress = (campaignData.raised / campaignData.goal) * 100;

  return (
    <div
      className="min-h-screen flex justify-center items-center p-5"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${campaignImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-primary text-center">
            {campaignData.title}
          </h1>
          <p className="text-gray-600 text-center leading-relaxed">
            {campaignData.description}
          </p>

          <div className="space-y-4">
            <div className="h-2.5 bg-primary-light rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="grid grid-cols-3 gap-5 text-center">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-primary">
                  ${campaignData.raised.toLocaleString()}
                </span>
                <span className="text-sm text-gray-500">
                  raised of ${campaignData.goal.toLocaleString()}
                </span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-primary">
                  {campaignData.supporters}
                </span>
                <span className="text-sm text-gray-500">supporters</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-primary">
                  {campaignData.daysLeft}
                </span>
                <span className="text-sm text-gray-500">days left</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary text-center">
              Make a Contribution
            </h2>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-primary">
                $
              </span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full px-10 py-4 text-lg border-2 border-primary-light rounded-lg focus:border-primary focus:outline-none transition-colors"
                min="1"
                required
              />
            </div>

            <div className="grid grid-cols-4 gap-3">
              {[10, 25, 50, 100].map((quickAmount) => (
                <button
                  key={quickAmount}
                  type="button"
                  onClick={() => setAmount(quickAmount.toString())}
                  className="py-2.5 bg-primary-light text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  ${quickAmount}
                </button>
              ))}
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Contribute Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContributePage;
