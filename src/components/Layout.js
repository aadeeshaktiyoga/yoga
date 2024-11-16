// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-semibold text-lg">Aadeeshakti Yoga</Link>
      <div className="flex space-x-4">
        <Link to="/schedule">Schedule</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/instructor">Instructor</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
    <main className="flex-grow p-6">{children}</main>
    <footer className="bg-blue-600 text-white p-4 text-center">
      © 2023 Aadeeshakti Yoga & Meditation Center
    </footer>
  </div>
);

export default Layout;
