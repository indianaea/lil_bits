import React from 'react';
import './ConfirmButton.css';

interface ConfirmButtonProps {
  onClick: () => void;
  caption: string; 
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ onClick, caption }) => {
  return (
    <button onClick={onClick} className="confirm-button">
      {caption} 
    </button>
  );
};

export default ConfirmButton;