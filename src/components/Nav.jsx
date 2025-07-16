import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-700">
          Typing System
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } w-full md:flex md:items-center md:space-x-6 md:w-auto`}
        >
          {/* Links */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 px-4 md:px-0 mt-4 md:mt-0">
            <Link
              to="/"
              className="block py-2 px-3 text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/About"
              className="block py-2 px-3 text-gray-700 hover:text-blue-600"
            >
              About
            </Link>
             <Link
              to="/Contact"
              className="block py-2 px-3 text-gray-700 hover:text-blue-600"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-3 ml-4">
            <Link
              to="/Login"
              className="px-4 py-2 text-sm font-medium text-blue-700 border border-blue-700 rounded hover:bg-blue-700 hover:text-white"
            >
              Sign In
            </Link>
            <Link
              to="/Register"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-2 px-4 mt-4 md:hidden">
            <Link
              to="/Login"
              className="w-full px-4 py-2 text-sm font-medium text-blue-700 border border-blue-700 rounded hover:bg-blue-700 hover:text-white"
            >
              Sign In
            </Link>
            <Link
              to="/Register"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
