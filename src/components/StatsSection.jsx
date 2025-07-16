import React from "react";

const StatsSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-12" data-aos="fade-up">
          Real-time Platform Stats
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow" data-aos="zoom-in">
            <h3 className="text-4xl font-bold text-blue-600">10,300+</h3>
            <p className="text-gray-600 mt-2">Registered Users</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow" data-aos="zoom-in" data-aos-delay="100">
            <h3 className="text-4xl font-bold text-blue-600">48,920</h3>
            <p className="text-gray-600 mt-2">Sessions Completed</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow" data-aos="zoom-in" data-aos-delay="200">
            <h3 className="text-4xl font-bold text-blue-600">68 WPM</h3>
            <p className="text-gray-600 mt-2">Avg Typing Speed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
