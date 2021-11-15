import React from 'react';
import Typography from '../typography/typography.jsx';
import './button.css';

const Button = ({ className, onClick, variant, ...props }) => {
  const { children } = props;
  return (
    <button
      className={`buttonComponent buttonComponent__${variant} ${className}`}
      onClick={onClick}
    >
      <Typography variant='textButton'>{children}</Typography>
    </button>
  );
};

Button.defaultProps = {
  onClick: () => { },
  variant: 'normal',
  className:'',
};

export default Button;
