import React from "react";
import "./typography.css";

const Typography = ({ variant, color, size, onClick, className, children }) => {

  return (
    <label
    onClick={onClick}
      style={{ color: color, fontSize: `${size}rem` }}
      className={`${className} typography typography__${variant}`}
    >
      {children}
    </label>
  );
};

Typography.defaultProps = {
  variant: "h3",
  children: "",
};

export default Typography;
