import React from "react";

const AwesomeLabel = (props) => {
    
    const { children } = props;
  
    return (
      <label >
        {children.toUpperCase()}
      </label>
    );
  };
  
  export default AwesomeLabel;
  