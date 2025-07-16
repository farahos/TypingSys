import React from "react";

const UsersBanner = () => {
  return (
    <section className="bg-white py-10 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Trusted by over <span className="text-blue-600">10,000+</span> users
        </h2>
        <p className="text-gray-600">
          Our typing platform is used by students, developers, and professionals around the world.
        </p>
        <div className="mt-6 flex justify-center">
          <img
            src="/images/user-illustration.svg"
            alt="Users Illustration"
            className="w-64 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default UsersBanner;
