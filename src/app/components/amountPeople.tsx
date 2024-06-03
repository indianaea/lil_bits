'use client';

import React, { useState } from 'react';
import './amountPeople.css';

const PeoplePicker: React.FC = () => {
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNumberOfPeople(Number(event.target.value));
    localStorage.setItem('numberOfPeople', JSON.stringify(event.target.value));
  };

  return (
    <div className="people-picker">
      <select onChange={handleChange} value={numberOfPeople}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
          <option key={number} value={number}>{number}</option>
        ))}
      </select>
    </div>
  );
};

export default PeoplePicker;
