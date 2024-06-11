'use client';

import React, { useEffect, useState } from 'react';
import './amountPeople.css';

const PeoplePicker: React.FC = () => {
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  useEffect(() => {
    const savedOrderId = Number(localStorage.getItem('savedOrderId')) || 0;
    
    if (savedOrderId !== 0) {
      const count = Number(localStorage.getItem('numberOfPeople'));
      setNumberOfPeople(count);
    }
    localStorage.setItem('numberOfPeople', numberOfPeople.toString()); 
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const numberOfPeople = Number(event.target.value);
    setNumberOfPeople(numberOfPeople);
    localStorage.setItem('numberOfPeople', numberOfPeople.toString()); 
  };

  return (
    <div className="peoplePicker">
      <p>Please enter the number of guests</p>
      <select onChange={handleChange} value={numberOfPeople}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
          <option key={number} value={number}>{number}</option>
        ))}
      </select>
    </div>
  );
};

export default PeoplePicker;
