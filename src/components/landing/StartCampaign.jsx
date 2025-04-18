import axios from 'axios';
import React, { useState } from 'react';

const StartCampaign = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goal: '',
    endDate: '',
    image: null,
    category: '',
    campaignStory: '',
    contactEmail: '',
    contactPhone: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    if (!formData.agreeToTerms) {
      alert('You must agree to the terms and conditions.');
      return;
    }

    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    try {
      const res = await axios.post('http://localhost:4000/api/fundRaiser/createFundRaiserPost', 
        // method: 'POST',
         formData,
      );

      const data = await res.json();
      if (res.ok) {
        alert('Campaign launched successfully!');
      } else {
        alert(data.message || 'Failed to launch campaign');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="flex justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-1">Start Your Fundraising Campaign</h1>
        <p className="text-center text-gray-600 mb-6">Make a difference by raising funds for your cause</p>

        {/* Stepper */}
        <div className="flex justify-between mb-6">
          {['Basics', 'Details', 'Contact'].map((label, index) => (
            <div key={index} className="flex flex-col items-center w-1/3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                  step === index + 1 ? 'bg-emerald-600' : 'bg-gray-300'
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`text-sm mt-2 ${
                  step === index + 1 ? 'text-emerald-600 font-semibold' : 'text-gray-500'
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Step 1: Basics */}
        {step === 1 && (
          <>
            <div className="mb-4">
              <label className="block font-medium">
                Campaign Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                placeholder="E.g., Help Fund Our Community Garden"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">
                Short Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                placeholder="Briefly describe your campaign (max 200 characters)"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">
                Fundraising Goal ($) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
              />
            </div>
            <div className="mb-6">
              <label className="block font-medium">
                Campaign End Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
              />
            </div>
            <button
              onClick={nextStep}
              className="bg-emerald-600 text-white px-6 py-2 rounded flex items-center ml-auto"
            >
              Next <span className="ml-2">→</span>
            </button>
          </>
        )}

        {/* Step 2: Details */}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Step 2: Details</h2>

            <div>
              <label className="block mb-1">Campaign Image *</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block mb-1">Campaign Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              >
                <option value="">Select a category</option>
                <option value="Education">Education</option>
                <option value="Health">Health</option>
                <option value="Environment">Environment</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">Campaign Story *</label>
              <textarea
                name="campaignStory"
                value={formData.campaignStory}
                onChange={handleChange}
                required
                placeholder="Tell potential donors about your campaign..."
                className="w-full border p-2 rounded"
              />
            </div>

            <button className="bg-gray-300 px-4 py-2 rounded" onClick={prevStep}>
              Previous
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded ml-2" onClick={nextStep}>
              Next
            </button>
          </div>
        )}

        {/* Step 3: Contact */}
        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Step 3: Contact</h2>

            <div>
              <label className="block mb-1">Contact Email *</label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block mb-1">Contact Phone (Optional)</label>
              <input
                type="tel"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
              />
              <label>
                I agree to the{' '}
                <a href="#" className="text-green-600 underline">
                  Terms and Conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-green-600 underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button className="bg-gray-300 px-4 py-2 rounded" onClick={prevStep}>
              Previous
            </button>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded ml-2"
              onClick={handleSubmit}
            >
              Launch Campaign
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartCampaign;
