import React from 'react';
import '../styles/Button.css';

function Button({ text, isClickBtn, manageClick }) {
  return (
    <button className={isClickBtn ? 'btn-click' : 'btn-reboot'} 
            onClick={manageClick}>
      {text}
    </button>
  );   
};

export default Button;