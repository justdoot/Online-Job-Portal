import React from 'react';
import { useParams } from 'react-router-dom';

const Recruiter = () => {
  let { id } = useParams();

  // Dummy employer data (replace with actual data from your backend or API)
  const employer = {
    id: 1,
    name: 'ABC Corporation',
    location: 'New York, NY',
    description: 'ABC Corporation is a leading company in the tech industry...',
    website: 'https://example.com'
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-2xl font-bold">{employer.name}</h2>
      <p className="text-gray-600">{employer.location}</p>
      <p className="mt-4">{employer.description}</p>
      <a href={employer.website} className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
        Visit Website
      </a>
    </div>
  );
};

export default Recruiter;
