import React from "react";
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
  variant: "h3",
  children: "",
};

export default Typography;
