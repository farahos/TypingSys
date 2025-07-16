import React from "react";

const FeaturesGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">What You Get</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Typing Speed</h3>
            <p className="text-gray-600">Track your Words Per Minute in real time and improve over time.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Practice History</h3>
            <p className="text-gray-600">Review past sessions and monitor your daily progress.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Typing Accuracy</h3>
            <p className="text-gray-600">Check accuracy after every test to fix your most common mistakes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
