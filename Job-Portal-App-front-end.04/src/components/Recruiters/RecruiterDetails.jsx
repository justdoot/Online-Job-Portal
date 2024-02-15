import React, { useState } from 'react';

const RecruiterDetails = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    industry: '',
    companySize: '',
    description: '',
    address: '',
    street: '',
    city: '',
    state: '',
    country: '',
    zipcode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Recruiter Details</h1>
      <form onSubmit={handleSubmit}>
        {/* Company Name */}
        <div className="mb-4">
          <label htmlFor="companyName" className="block mb-2">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Website */}
        <div className="mb-4">
          <label htmlFor="website" className="block mb-2">Website</label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Industry */}
        <div className="mb-4">
          <label htmlFor="industry" className="block mb-2">Industry</label>
          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Company Size */}
        <div className="mb-4">
          <label htmlFor="companySize" className="block mb-2">Company Size</label>
          <input
            type="text"
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address" className="block mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Street */}
        <div className="mb-4">
          <label htmlFor="street" className="block mb-2">Street</label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* City */}
        <div className="mb-4">
          <label htmlFor="city" className="block mb-2">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* State */}
        <div className="mb-4">
          <label htmlFor="state" className="block mb-2">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Country */}
        <div className="mb-4">
          <label htmlFor="country" className="block mb-2">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Zipcode */}
        <div className="mb-4">
        <label htmlFor="zipcode" className="block mb-2">Zipcode</label>
        <input
          type="text"
          name="zipcode"
          value={formData.zipcode}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      {/* Submit Button */}
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
    </form>
  </div>

);
};

export default RecruiterDetails;
