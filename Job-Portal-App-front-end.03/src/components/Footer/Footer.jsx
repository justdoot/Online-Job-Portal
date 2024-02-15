import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-4 fixed Bottom w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p>&copy; 2024 Online Job Portal</p>
        <nav>
          <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Privacy Policy</a>
          <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Terms of Service</a>
          <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
