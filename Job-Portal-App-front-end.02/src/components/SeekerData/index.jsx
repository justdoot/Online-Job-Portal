import React from 'react';

const index = ({ formData }) => {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Displaying Form Data</h2>
      <div>
        <p><span className="font-bold">First Name:</span> {formData.firstName}</p>
        <p><span className="font-bold">Last Name:</span> {formData.lastName}</p>
        <p><span className="font-bold">Degree:</span> {formData.degree}</p>
        <p><span className="font-bold">College:</span> {formData.college}</p>
        <p><span className="font-bold">Address:</span> {formData.address}</p>
        <p><span className="font-bold">State:</span> {formData.state}</p>
        <p><span className="font-bold">Date of Birth:</span> {formData.dob}</p>
        <p><span className="font-bold">Skills:</span> {formData.skills.join(', ')}</p>
      </div>
    </div>
  );
};

export default index;
