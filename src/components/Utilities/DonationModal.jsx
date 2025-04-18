import React, { useState } from "react";

const DonationModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState(1000);
  const [tipPercentage, setTipPercentage] = useState(18);
  const [anonymous, setAnonymous] = useState(false);

  const tipAmount = Math.round((amount * tipPercentage) / 100);
  const totalAmount = amount + tipAmount;

  const handleAmountClick = (val) => setAmount(val);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-3 right-3 text-gray-500 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold text-center text-emerald-600 mb-2">
          Choose a donation amount
        </h2>
        <p className="text-center text-sm text-gray-500 mb-4">
          Most Donors donate approx{" "}
          <span className="text-emerald-500 font-medium">₹1000</span> to this
          Fundraiser
        </p>

        {/* Donation Options */}
        <div className="flex gap-2 justify-center mb-4">
          {[300, 1000, 3000].map((val) => (
            <button
              key={val}
              className={`px-4 py-2 rounded-full border ${
                amount === val
                  ? "bg-emerald-500 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => handleAmountClick(val)}
            >
              ₹ {val}
            </button>
          ))}
        </div>

        <div className="text-center mb-4">
          <button
            className="text-sm text-gray-600 underline"
            onClick={() => {
              const custom = prompt("Enter custom amount");
              if (custom && !isNaN(custom)) {
                setAmount(Number(custom));
              }
            }}
          >
            Other Amount
          </button>
        </div>

        {/* Tip Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4 text-sm text-gray-700">
          <p className="mb-2">
            We are charging 0% platform fee for this fundraiser,
            relying solely on the generosity of donors like you.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Support us by adding a tip of:</span>
            <select
              className="border rounded-md px-2 py-1 text-sm"
              value={tipPercentage}
              onChange={(e) => setTipPercentage(Number(e.target.value))}
            >
              {[0, 5, 10, 15, 18, 20].map((val) => (
                <option key={val} value={val}>
                  {val}% (INR {Math.round((amount * val) / 100)})
                </option>
              ))}
            </select>
          </div>
          <div className="text-right mt-2 font-medium">
            Total Amount: INR {totalAmount}
          </div>
        </div>

        {/* Form Inputs */}
        <input
          type="text"
          placeholder="Name *"
          className="w-full border px-3 py-2 rounded-md mb-2"
        />
        <label className="flex items-center gap-2 mb-2 text-sm">
          <input
            type="checkbox"
            checked={anonymous}
            onChange={() => setAnonymous(!anonymous)}
          />
          Make my donation anonymous
        </label>
        <input
          type="email"
          placeholder="Email ID *"
          className="w-full border px-3 py-2 rounded-md mb-2"
        />
        <input
          type="tel"
          placeholder="Your Mobile Number *"
          className="w-full border px-3 py-2 rounded-md mb-4"
        />
        <p className="text-xs text-gray-500 mb-4">
          All payment updates will be sent on this number.
        </p>

        {/* Pay Button */}
        <button
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg text-lg font-semibold transition"
          onClick={() => alert("Redirect to payment with amount " + totalAmount)}
        >
          Proceed To Pay ₹ {totalAmount}
        </button>

        <p className="text-xs text-center mt-4 text-gray-500">
          By continuing, you agree to our{" "}
          <span className="underline cursor-pointer">Terms of Service</span> and{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default DonationModal;
