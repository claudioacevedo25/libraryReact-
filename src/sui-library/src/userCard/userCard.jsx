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
    <div
      className={`${className} userCard `}
      onClick={() => setViewAction(!viewAction)}
    >
        <div className={`userCard__body`}>
      <div  style={{backgroundImage:url(image)}} className={`userCard__image`}>
        
      </div>
        <div className={`userCard__content`}>
          {viewAction ? (
            <>
              <Typography variant="h3">{name}</Typography>
              <Typography
                onClick={() => setViewAction(!viewAction)}
                variant="small"
              >
                {`${actionLabel} >`}
              </Typography>
            </>
          ) : (
            <>
              {content}
              <Typography
                onClick={() => setViewAction(!viewAction)}
                variant="small"
              >
                {`< ${backLabel}`}
              </Typography>
            </>
          )}
      </div></div>
    </div>
  );
};

UserCard.defaultProps = {
  onClick: () => {},
};

export default UserCard;
