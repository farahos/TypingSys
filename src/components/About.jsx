import React from 'react';

const About = () => {
  return (
    
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">About Typing System</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Typing System is a free platform designed to help students, developers, and professionals
          improve their typing skills. Our mission is to make typing practice engaging, trackable,
          and accessible to everyone — regardless of age or skill level.
        </p>
        <p className="text-gray-600">
          We provide real-time feedback, historical progress tracking, and advanced metrics like
          WPM, accuracy, and time. Whether you're preparing for job assessments or just want to type
          faster — you're in the right place!
        </p>
      </div>
    </section>
  );
};

export default About;
