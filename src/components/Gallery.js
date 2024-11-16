// src/components/Gallery.js
import React from 'react';

const Gallery = () => {
  const images = [
    '/yoga1.png',
    '/yoga2.png',
    '/yoga3.png',
    '/yoga4.png',
    '/yoga5.png'
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold text-blue-700 mb-4">Gallery</h2>
      <div
        className="flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {images.map((url, idx) => (
          <img
            key={idx}
            src={process.env.PUBLIC_URL + url}
            alt={`Yoga Image ${idx + 1}`}
            className="flex-shrink-0 w-32 h-32 rounded-lg shadow-md object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
