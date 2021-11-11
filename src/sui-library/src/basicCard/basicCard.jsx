import React from "react";
import Typography from "../typography/typography.jsx";
import "./basicCard.css";

const BasicCard = ({ className, onClick, title, subtitle, width, height }) => {
    
  return (
    <div className={`cardBasic ${className}`}>
      <div
        className="cardBasic__content"
        onClick={onClick}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <Typography variant="h4" className="cardBasic__title">
          {title}
        </Typography>
      </div>
      {!!subtitle && (
        <Typography
          onClick={onClick}
          variant="small"
          className="cardBasic__subtitle"
        >
          {subtitle}
        </Typography>
      )}
    </div>
  );
};

BasicCard.defaultProps = {
  onClick: () => {},
  title: "",
  className: "",
};

export default BasicCard;
