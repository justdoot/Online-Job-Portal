import React from 'react';
import { useParams } from 'react-router-dom';

const JobDisplay = () => {
  let { id } = useParams();

  // Dummy job data (replace with actual data from your backend or API)
  const job = {
    id: 1,
    title: 'Software Engineer',
    company: 'ABC Corporation',
    location: 'New York, NY',
    description: 'We are seeking a talented Software Engineer to join our team...',
    applyLink: 'https://example.com/apply'
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-2xl font-bold">{job.title}</h2>
      <p className="text-gray-600">{job.company} - {job.location}</p>
      <p className="mt-4">{job.description}</p>
      <a href={job.applyLink} className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
        Apply Now
      </a>
    </div>
  );
};

export default JobDisplay;
