import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Job Portal</Link>
        <div>
          <Link to="/jobs" className="text-white mx-4">Jobs</Link>
          <Link to="/recruiter" className="text-white mx-4">Recruiter</Link>
          <Link to="/about" className="text-white mx-4">About</Link>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
