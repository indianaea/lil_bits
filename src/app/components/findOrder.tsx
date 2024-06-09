'use client';

import React, { useState } from 'react';
import { orderApi } from "../api/orderApi";
import './findOrder.css';

const FindOrder = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handleFindOrder = async () => {
    const order = await orderApi.getOrder(JSON.stringify(email));

    if (order.email == JSON.stringify(email)) {
      localStorage.setItem('savedOrder', JSON.stringify(order)); 
      window.location.href = "/order";
    } else {
      alert(`No order found: ${order.email}`);
    }    
  };

  return (
    <div className="find-order-container">
      <h2 className="title">Find your order</h2>
      <label className="email-label" htmlFor="email">With your email you can find your order, change it and update it!</label>
      <input
        type="email"
        id="email"
        className="email-input"
        value={email}
        onChange={handleInputChange}
        placeholder="Enter your email"
      />
      <button className="find-button" onClick={handleFindOrder}>
        Find
        <img src="arrow.svg" alt="Arrow" className="arrow-icon" />
      </button>
    </div>
  );
};

export default FindOrder;
