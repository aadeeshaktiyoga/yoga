// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('+91 9013363376');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied status after 2 seconds
  };

  return (
    <section>
      <h2 className="text-xl font-semibold text-blue-700 mb-4">Contact Us</h2>
      <div className="flex items-center space-x-4 mb-4">
        <p className="text-gray-600">Phone: +91 9013363376</p>
        <button
          onClick={handleCopy}
          className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition"
        >
          Copy
        </button>
      </div>
      {copied && <p className="text-green-500 text-sm">Phone number copied to clipboard!</p>}
      <p className="text-gray-600 mb-4">Address: 1056/1, Aam Bagh, Mehrauli Village, New Delhi, Delhi 110030</p>
      <iframe
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=895%2FA%2C%20Ward%20No%208%2C%20Aam%20Bagh%2C%20Ladha%20Sarai%20Village%2C%20Mehrauli%2C%20New%20Delhi%2C%20Delhi%20110030&zoom=10&maptype=roadmap"
      width="100%"
      height="200"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    ></iframe>
    </section>
  );
};

export default Contact;
