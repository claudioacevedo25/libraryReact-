import React, { useState } from "react";
import Typography from "../typography/typography.jsx";
import "./userCard.css";

const UserCard = ({
  className,
  name,
  image,
  actionLabel,
  backLabel,
  content,
  disabled,
}) => {
  const [viewAction, setViewAction] = useState(false);

  return (
    <div className={`${className} userCard `}>
      <div className={`userCard__body`}>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={`userCard__image`}
          onClick={() => setViewAction(!viewAction)}
        ></div>
        <div className="userCard__content">
          {viewAction ? (
            <div className="userCard__content__action">
            
              <Typography variant="h3" className="useCard__name">
                {name}
              </Typography>
              <Typography
                className="useCard__actionLabel"
                onClick={() => setViewAction(!viewAction)}
                variant="small"
              >
                {`${actionLabel}>`}
              </Typography>
            </div>
          ) : (
            <div className="userCard__content__back">
             
              <Typography
              className="useCard__backLabel"
                onClick={() => setViewAction(!viewAction)}
                variant="small"
              >
                {`<${backLabel}`}
              </Typography> 
              {content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

UserCard.defaultProps = {
  onClick: () => {},
};

export default UserCard;
