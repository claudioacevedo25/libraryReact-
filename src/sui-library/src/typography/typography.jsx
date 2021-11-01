import React from "react";
import "./typography.css";

const Typography = ({ variant = "h3", color, size, className, ...props }) => {
  const { children } = props;

  return (
    <label
      style={{ color: color, fontSize: `${size}rem` }}
      className={`${className} typography typography__${variant}`}
    >
      {children}
    </label>
  );
};

export default Typography;
