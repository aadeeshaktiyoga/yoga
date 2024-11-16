// src/components/Schedule.js
import React from 'react';

const Schedule = () => {
  const schedule = [
    { day: 'Monday', times: ['6:30–10:30 AM', '5:00–7:30 PM'] },
    { day: 'Tuesday', times: ['6:30–10:30 AM', '5:00–7:30 PM'] },
    { day: 'Thursday', times: ['6:30–10:30 AM', '5:00–7:30 PM'] },
    { day: 'Friday', times: ['6:30–10:30 AM', '5:00–7:30 PM'] },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold text-blue-700 mb-4">Schedule</h2>
      <div className="space-y-2">
        {schedule.map(({ day, times }, idx) => (
          <div key={idx} className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="font-medium">{day}</h3>
            <p className="text-gray-600">{times.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
