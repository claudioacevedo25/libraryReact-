import React from "react";
import PropTypes from 'prop-types';
import "./typography.css";

const Typography = ({ variant, color, size, className, children }) => {

  return (
    <label
      style={{ color: color, fontSize: `${size}rem` }}
      className={`${className} typography typography__${variant}`}
    >
      {children}
    </label>
  );
};

Typography.defaultProps = {
  variant : "h3",
  children:"",
};

Typography.propTypes = {
  variant: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Typography;
