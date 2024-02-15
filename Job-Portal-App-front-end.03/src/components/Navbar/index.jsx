import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4text-white p-4 fixed top-0 w-full z-10 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-10">
          <div className="flex">
            <Link to="/">Home</Link>
            <a href="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="/registration" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Registration</a>
            <a href="/login" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Login</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar