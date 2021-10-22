import React from 'react';
import './button.css';

const Button = ({clickHandler, variant, ...props}) => {
  const { children } = props;
  return (
    <button
      className={`buttonComponent buttonComponent__${variant}`}
      onClick={clickHandler}
    >
      {children.toUpperCase()}
    </button>
  );
};

export default Button;
