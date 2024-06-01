'use client';

import React, { useState } from 'react';
import { format, isWeekend } from 'date-fns';
import './calendarPicker.css';

const CalendarPicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('16:00');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(event.target.value);
    if (!isWeekend(newDate)) {
      setSelectedDate(newDate);
    }
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value);
  };

  const renderDays = () => {
    const startOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const endOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
    const daysInMonth = [];
    
    for (let i = 1; i <= endOfMonth.getDate(); i++) {
      const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i);
      daysInMonth.push(
        <div
          key={i}
          className={`day ${isWeekend(date) ? 'weekend' : ''} ${date.getDate() === selectedDate.getDate() ? 'selected' : ''}`}
          onClick={() => setSelectedDate(date)}
        >
          {i}
        </div>
      );
    }

    return daysInMonth;
  };

  return (
    <div className="calendar-picker">
      <div className="calendar">
        <div className="header">
          <button>←</button>
          <span>{format(selectedDate, 'MMMM yyyy')}</span>
          <button>→</button>
        </div>
        <div className="weekdays">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <div key={day} className="weekday">{day}</div>
          ))}
        </div>
        <div className="days">
          {renderDays()}
        </div>
      </div>
      <input type="date" onChange={handleDateChange} />
      <select value={selectedTime} onChange={handleTimeChange}>
        {Array.from({ length: 8 }, (_, i) => 16 + i).map((hour) => (
          <option key={hour} value={`${hour}:00`}>{`${hour}:00`}</option>
        ))}
      </select>
    </div>
  );
};

export default CalendarPicker;
