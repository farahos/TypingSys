import React from "react";

const BuiltForTeachers = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4" data-aos="fade-up">
          Built for Teachers & Classrooms
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
          Our platform is ideal for schools and teachers to track typing progress, assign lessons, and monitor student performance in real-time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-10">
          <div className="bg-white p-6 rounded-xl shadow" data-aos="fade-up">
            <h4 className="text-xl font-semibold mb-2 text-blue-600">Classroom Dashboard</h4>
            <p className="text-gray-600">Manage all your students in one place, view progress reports, and assign tasks.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-xl font-semibold mb-2 text-blue-600">Progress Tracking</h4>
            <p className="text-gray-600">Real-time insights into students' typing speed, accuracy, and activity history.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-xl font-semibold mb-2 text-blue-600">Easy Onboarding</h4>
            <p className="text-gray-600">Set up your class in minutes with simple registration and role-based access.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForTeachers;
