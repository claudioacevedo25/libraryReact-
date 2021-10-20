import React from "react";
import './label.css'

const AwesomeLabel = ({variant, mode, ...props}) => {
    const { children } = props;
    return (
      <label>
        {children.toUpperCase()}
      </label>
    );
  };
  
  export default AwesomeLabel;
  