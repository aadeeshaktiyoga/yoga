// src/components/Instructor.js
import React from 'react';

const Instructor = () => (
  <section className="flex items-center space-x-4 p-4 bg-white shadow rounded-md">
    <div className="flex-1">
      <h2 className="text-xl font-semibold text-blue-700">Meet Karuna</h2>
      <p className="text-gray-600">
        Karuna is a dedicated yoga instructor, known for her personalized approach to wellness.
      </p>
    </div>
    <img
      src={process.env.PUBLIC_URL + '/yoga3.png'}
      alt="Instructor Karuna"
      className="w-20 h-20 rounded-full shadow-lg"
    />
  </section>
);

export default Instructor;
