import React from "react";
import "./typography.css";

const Typography = ({ variant, color, size, onClick, className, children }) => {
  return (
    <label
      onClick={onClick}
      style={{ color: color, fontSize: `${size}rem` }}
      className={`typography typography__${variant} ${className}`}
    >
      {children}
    </label>
  );
};

Typography.defaultProps = {
  onClick: () => {},
  variant: "h3",
  children: "",
  className: "",
};

export default Typography;
