import React, { useContext } from "react";
import { ThemeContext } from "../themeContextProvider/themeContextProvider.jsx";
import DarkIconClose from './assets/darkIconClose.svg';
import LightIconClose from './assets/lightIconClose.svg';


const IconClose = ({ className, size, onClick }) => {
    const { mode } = useContext(ThemeContext);
   
    const src = mode === 'dark' ? DarkIconClose : LightIconClose;
    return (
        <img
            style={{ width: `${size}px`, height: `${size}px` }}
            src={src}
            alt='close'
            className={className}
            onClick={onClick}
        />
    )
}

IconClose.defaultProps = {
    size: 10,
    className:''
};

export default IconClose;