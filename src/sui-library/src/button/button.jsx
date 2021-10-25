import React from 'react';
import Typography from '../typography/typography';
import './button.css';

const Button = ({onClick, variant = 'normal', ...props}) => {
  const { children } = props;
  return (
    <button
      className={`buttonComponent buttonComponent__${variant}`}
      onClick={onClick}
    >
      <Typography variant='textButton'>{children}</Typography>
    </button>
  );
};

export default Button;
