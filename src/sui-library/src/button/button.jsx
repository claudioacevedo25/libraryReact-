import './button.css';
import React from 'react';
import theme from '../themeContextProvider/theme.js'
const AwesomeButton = ({clickHandler, variant, mode, ...props}) => {
  const { children } = props;
  return (
    <button
      className={`buttonComponent`}
      style={{
      '--variant-background': `${theme[mode][variant]}`,
      '--variant-text-color': `${variant.indexOf('hierarchy') > -1 ? (theme['light']['text-color']) : (theme[mode]['text-color'])}`}}
      onClick={clickHandler}
    >
      {children.toUpperCase()}
    </button>
  );
};

export default AwesomeButton;
