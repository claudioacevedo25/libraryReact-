import React from 'react';
import './button.css';

const AwesomeButton = ({clickHandler, variant, mode, ...props}) => {
  let variantColor = ''
  switch(variant){
    case 'simple':
      variantColor = 'primary'
      break
    case 'alternate':
      variantColor = 'secondary'
      break
    default:
      variantColor = ''
      break
  }
  const { children } = props;
  return (
    <button
      className={`buttonComponent buttonComponent__${variantColor}`}
      onClick={clickHandler}
    >
      {children.toUpperCase()}
    </button>
  );
};

export default AwesomeButton;
