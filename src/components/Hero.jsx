import React from "react";
import { Link } from "react-router-dom";
import Register from "../pages/Register";
const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
          Learn to Type Faster and Smarter — For Free
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Practice your typing skills with real-time speed, accuracy, and progress tracking.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/Register"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            to="/Register"
            className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Try Practice
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
