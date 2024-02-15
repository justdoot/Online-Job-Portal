import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-4 fixed inset-x-0 bottom-0 Bottom w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p>&copy; 2024 Online Job Portal</p>
        <nav>
          <Link to="/privacy" style={{ marginRight: '10px' }}>Privacy Policy</Link>
          <Link to="/termservice" style={{ marginRight: '10px' }}>Term of Service</Link>
          <Link to="/contact" style={{ marginRight: '10px' }}>Contact Us</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
