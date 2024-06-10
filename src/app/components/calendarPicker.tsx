'use client';

import React, { useState, useEffect } from 'react';
import { format, isWeekend, getDay, startOfMonth, endOfMonth, addMonths, subMonths } from 'date-fns';
import './calendarPicker.css';

const CalendarPicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('16:00');
  const [currentMonth, setCurrentMonth] = useState(new Date());


  useEffect(() => {
    const savedOrderId = Number(localStorage.getItem('savedOrderId')) || 0;
    if (savedOrderId != 0) {
      const date = new Date(getLocalStorageString("selectedDate", new Date().toISOString()));
      const time = getLocalStorageString("selectedTime", "");
      setSelectedDate(date);
      setSelectedTime(time.replace(/"/g, ''));
    }
  }, []);  

  const getLocalStorageString = (key: string, defaultValue: string): string => {
    return localStorage.getItem(key) || defaultValue;
  };

  const handleDayClick = (date: Date) => {
    if (getDay(date) !== 6 && getDay(date) !== 5) { // Ensure the clicked date is not Saturday (6) or Sunday (0)
      setSelectedDate(date);
      localStorage.setItem('selectedDate', date.toISOString());
    }
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTime = event.target.value; 
    const time = JSON.stringify(selectedTime).replace(/"/g, '');
    setSelectedTime(time);
    localStorage.setItem('selectedTime', time);
  };

  const renderDays = () => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    const days = [];
    const startDate = start.getDate();
    const endDate = end.getDate();
    const startDay = getDay(start);

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    for (let i = startDate; i <= endDate; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      days.push(
        <div
          key={i}
          className={`day ${getDay(date) === 6 || getDay(date) === 5 ? 'weekend' : ''} ${date.toDateString() === selectedDate.toDateString() ? 'selected' : ''}`}
          onClick={() => handleDayClick(date)}
          style={{ pointerEvents: getDay(date) === 6 || getDay(date) === 5 ? 'none' : 'auto', opacity: getDay(date) === 6 || getDay(date) === 5 ? 0.5 : 1 }}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-picker">
      <div className="calendar">
        <div className="header">
          <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>←</button>
          <span>{format(currentMonth, 'MMMM yyyy')}</span>
          <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>→</button>
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
      <input type="text" value={format(selectedDate, 'dd-MM-yyyy')} readOnly />
      <select value={selectedTime} onChange={handleTimeChange}>
        {Array.from({ length: 8 }, (_, i) => 16 + i).map((hour) => (
          <option key={hour} value={`${hour}:00`}>{`${hour}:00`}</option>
        ))}
      </select>
    </div>
  );
};

export default CalendarPicker;
