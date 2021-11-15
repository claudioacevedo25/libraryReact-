import React from "react";
import Typography from "../typography/typography.jsx";
import "./avatar.css";

const Avatar = ({ src, name, size, className }) => {
  const surname = !!name && name.split(" ").pop();

  return src ? (
    <img src={src} alt={name} style={{height:`${size}px`, width:`${size}px` }} className={`${className} avatar`} />
  ) : (
    <div className={`${className} avatar avatar__initials`}>
      <Typography variant="bodyBold">
        {!!name && name.charAt(0) + " " + surname.charAt(0)}
      </Typography>
    </div>
  );
};

Avatar.defaultProps = {
  name: '',
  className:''
};

export default Avatar;
