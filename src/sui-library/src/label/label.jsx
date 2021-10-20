import React from "react";
import theme from '../themeContextProvider/theme.js'
import './label.css'

const AwesomeLabel = ({variant, mode, ...props}) => {
    const { children } = props;
    return (
      <label style={{
        '--variant-text-color':`${(theme[mode]['text-color'])}`}}
      >
        {children.toUpperCase()}
      </label>
    );
  };
  
  export default AwesomeLabel;
  