import React from 'react';
import './button.css';

const AwesomeButton = ({clickHandler, variant, ...props}) => {
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

export default AwesomeButton;
