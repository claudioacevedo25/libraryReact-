import React from "react";

const Label = (props) => {
  const { children } = props;

  return <label className="buttonComponent">{children.toUpperCase()}</label>;
};

export default Label;
