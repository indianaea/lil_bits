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
    try {
      localStorage.clear();
      localStorage.setItem('savedOrderEmail', email);
      const savedOrder = await orderApi.getOrder(email);
      localStorage.setItem('savedOrderId', String(savedOrder.id));    
      localStorage.setItem('selectedDate', String(savedOrder.orderDate));
      localStorage.setItem('selectedTime', String(savedOrder.time));
      localStorage.setItem('numberOfPeople', String(savedOrder.count));
      localStorage.setItem('savedTotalAmount', String(savedOrder.totalAmount));

      window.location.href = "/order";    
    } catch (error) {
      console.log(`Order not found for email: ${email}`);
      localStorage.clear();
    }
    finally{
      console.log("Running finally");
    }
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
