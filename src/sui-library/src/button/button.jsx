import React from 'react';
import './button.css';

const Button = ({onClick, variant = 'normal', ...props}) => {
  const { children } = props;
  return (
    <button
      className={`buttonComponent buttonComponent__${variant}`}
      onClick={onClick}
    >
      {children.toUpperCase()}
    </button>
  );
};

export default Button;
