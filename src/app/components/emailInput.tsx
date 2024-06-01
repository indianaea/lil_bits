'use client';

import React, { useState } from 'react';
import './emailInput.css';
import classNames from 'classnames';

const EmailInput: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValid(validateEmail(newEmail));
  };

  return (
    <div className="email-input-container">
      <p>Please put in a valid email for your order - thank you!</p>
      <div className={classNames('email-input', { shake: !isValid })}>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          className={isValid ? 'valid-input' : 'error-input'}
        />
      </div>
      {!isValid && <div className="error">Please enter a valid email address</div>}
    </div>
  );
};

export default EmailInput;
