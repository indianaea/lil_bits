'use client';

import React, { useState } from 'react';
import './button.css';

interface ButtonProps {
  onClick: () => void;
  caption: string; 
}

const Button: React.FC<ButtonProps> = ({ onClick, caption }) => {
  return (
    <button onClick={onClick} className="button">
      {caption}
      <img src="/arrow.svg" alt="Arrow" className="arrow-icon" />
    </button>
  );
};

export default Button;