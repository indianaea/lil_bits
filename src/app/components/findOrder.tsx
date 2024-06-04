'use client';

import React, { useState } from 'react';
import './findOrder.css';

const FindOrder = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handleFindOrder = () => {
    alert(`Finding order for email: ${email}`);
  };

  return (
    <div className="find-order-container">
      <h2 className="title">Find your order!</h2>
      <label className="email-label" htmlFor="email">Enter your email</label>
      <input
        type="email"
        id="email"
        className="email-input"
        value={email}
        onChange={handleInputChange}
        placeholder="Enter email"
      />
      <button className="find-button" onClick={handleFindOrder}>Find</button>
    </div>
  );
};

export default FindOrder;
