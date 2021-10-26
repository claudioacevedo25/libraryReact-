import React from "react";
import Typography from "../typography/typography";
import "./avatar.css";

const Avatar = ({ src, name }) => {
  const surname = name.split(" ").pop();

  return src ? (
    <img src={src} alt={name} className={`avatar`} />
  ) : (
    <div className={`avatar avatar__initials`}>
      <Typography variant="bodyBold">
        {name.charAt(0) + " " + surname.charAt(0)}
      </Typography>
    </div>
  );
};

export default Avatar;
