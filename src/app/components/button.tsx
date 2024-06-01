import React from 'react';
import './button.css';

interface ButtonProps {
  onClick: () => void;
  caption: string; 
}

const Button: React.FC<ButtonProps> = ({ onClick, caption }) => {
  return (
    <button onClick={onClick} className="button">
      {caption} 
    </button>
  );
};

export default Button;