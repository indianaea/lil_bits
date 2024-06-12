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
    <div className="findOrderContainer">
      <h2 className="title">Find your order!</h2>
      <label className="emailLabel" htmlFor="email">You can find, change and update your order!</label>
      <input
        type="email"
        id="email"
        className="emailInput"
        value={email}
        onChange={handleInputChange}
        placeholder="Enter order email"
      />
      <button className="findButton" onClick={handleFindOrder}>Find</button>
    </div>
  );
};

export default FindOrder;
