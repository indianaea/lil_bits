'use client';

import React, { useState, useEffect } from 'react';
import { format, getDay, startOfMonth, endOfMonth, addMonths, subMonths, isBefore, addHours, startOfToday } from 'date-fns';
import './calendarPicker.css';

const CalendarPicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(format(addHours(new Date(), 1), 'HH:00'));
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    const savedOrderId = Number(localStorage.getItem('savedOrderId')) || 0;
    if (savedOrderId !== 0) {
      const date = new Date(getLocalStorageString("selectedDate", new Date().toISOString()));
      const time = getLocalStorageString("selectedTime", "");
      setSelectedDate(date);
      setSelectedTime(time.replace(/"/g, ''));
    } else {
      setSelectedDate(selectedDate);
      setSelectedTime(selectedTime);
      localStorage.setItem('selectedDate', selectedDate.toISOString());
      localStorage.setItem('selectedTime', selectedTime.replace(/"/g, ''));
    }
  }, []);  

  const getLocalStorageString = (key: string, defaultValue: string): string => {
    return localStorage.getItem(key) || defaultValue;
  };

  const handleDayClick = (date: Date) => {
    if (getDay(date) !== 0 && getDay(date) !== 6) {
      setSelectedDate(date);
      localStorage.setItem('selectedDate', date.toISOString());
    }
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTime = event.target.value; 
    setSelectedTime(selectedTime);
    localStorage.setItem('selectedTime', selectedTime.replace(/"/g, ''));
  };

  const renderDays = () => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    const days = [];
    const startDate = start.getDate();
    const endDate = end.getDate();
    const startDay = getDay(start);
    const today = startOfToday();

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    for (let i = startDate; i <= endDate; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      const isPast = isBefore(date, today);
      const isWeekend = getDay(date) === 0 || getDay(date) === 6;

      days.push(
        <div
          key={i}
          className={`day ${isWeekend ? 'weekend' : ''} ${date.toDateString() === selectedDate.toDateString() ? 'selected' : ''} ${isPast ? 'past' : ''}`}
          onClick={() => handleDayClick(date)}
          style={{ pointerEvents: isWeekend || isPast ? 'none' : 'auto', opacity: isWeekend || isPast ? 0.5 : 1 }}
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
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
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
