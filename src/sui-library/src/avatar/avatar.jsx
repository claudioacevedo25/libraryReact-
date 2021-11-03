import React from "react";
import PropTypes from 'prop-types';
import Typography from "../typography/typography";
import "./avatar.css";

const Avatar = ({ src, name, className }) => {
  const surname = !!name && name.split(" ").pop();

  return src ? (
    <img src={src} alt={name} className={`${className} avatar`} />
  ) : (
    <div className={`${className} avatar avatar__initials`}>
      <Typography variant="bodyBold">
        {!!name && name.charAt(0) + " " + surname.charAt(0)}
      </Typography>
    </div>
  );
};

Avatar.defaultProps = {
  name:'',
};

Avatar.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Avatar;
