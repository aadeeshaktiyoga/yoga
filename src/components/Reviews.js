// src/components/Reviews.js
import React from 'react';

const Reviews = () => {
  const reviews = [
    "Amazing experience, transformed my health!",
    "Karuna Ma'am's classes are life-changing!",
    "The best place for yoga and meditation!",
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold text-blue-700 mb-4">Reviews</h2>
      <div
        className="flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-60 bg-gray-100 p-4 rounded-lg shadow-md text-gray-700 italic"
          >
            "{review}"
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
