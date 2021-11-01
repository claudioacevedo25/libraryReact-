import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../typography/typography';
import './button.css';

const Button = ({className, onClick, variant, ...props}) => {
  const { children } = props;
  return (
    <button
      className={`${className} buttonComponent buttonComponent__${variant}`}
      onClick={onClick}
    >
      <Typography variant='textButton'>{children}</Typography>
    </button>
  );
};

Button.defaultProps = {
  onClick:()=>{},
  variant: 'normal',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
};


export default Button;
