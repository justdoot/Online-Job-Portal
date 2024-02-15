import React, { useState } from 'react';

const LoginDetails = () => {
  const [formData, setFormData] = useState({
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Handle save logic here
  };

  const handleEdit = () => {
    // Handle edit logic here
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Details Form</h1>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-2 border"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="mobileNumber" className="block mb-2">Mobile Number</label>
        <input
          type="text"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleInputChange}
          className="w-full p-2 border"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full p-2 border"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          className="w-full p-2 border"
        />
      </div>
      <div className="mb-4">
        <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 mr-2">Save</button>
        <button onClick={handleEdit} className="bg-gray-500 text-white px-4 py-2">Edit</button>
      </div>
    </div>
  );
};

export default LoginDetails;
