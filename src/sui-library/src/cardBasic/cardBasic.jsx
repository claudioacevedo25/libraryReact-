import React from 'react';
import Typography from '../typography/typography.jsx';
import './cardBasic.css';

const CardBasic = ({ className, onClick, title, subtitle, width, height, ...props }) => {

  return (
      <div className={`${className} cardBasic`}>
    <div
      className="cardBasic__content"
      onClick={onClick}
    >
        <Typography variant="h4" className="cardBasic__title">{title}</Typography>
    </div>
    <Typography  onClick={onClick} variant="small" className="cardBasic__subtitle">{subtitle}</Typography>
    </div>
  );
};

CardBasic.defaultProps = {
  onClick: () => { },
  variant: 'normal',
};

export default CardBasic;
