// src/components/FloatingCallButton.js
import React from 'react';

const FloatingCallButton = () => (
  <a
    href="tel:+919013363376"
    className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-200"
    aria-label="Call now"
  >
    📞
  </a>
);

export default FloatingCallButton;
