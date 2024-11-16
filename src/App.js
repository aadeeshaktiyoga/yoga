// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Instructor from './components/Instructor';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import FloatingCallButton from './components/FloatingCallButton';
import './index.css';

function App() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="space-y-8 p-4">
        <section>
          <h1 className="text-3xl font-bold text-center text-blue-700">Aadeeshakti Yoga and Meditation Center</h1>
          <p className="text-center text-lg text-gray-600">Transformative yoga and meditation experiences in the heart of India</p>
        </section>
        <Instructor />
        <Reviews />
        <Gallery />
        <Schedule />
        <Contact />
      </main>
      <FloatingCallButton />
    </div>
  );
}

export default App;
