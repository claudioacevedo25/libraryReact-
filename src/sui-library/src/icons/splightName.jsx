import React, { useContext } from "react";
import { ThemeContext } from "../themeContextProvider/themeContextProvider.jsx";
import DarkIcon from './assets/darkSplight.svg';
import LightIcon from './assets/lightSplight.svg';


const SplightName = ({ className, size }) => {
    const { mode } = useContext(ThemeContext);
    const width = size + 76;
    const src = mode === 'dark' ? DarkIcon : LightIcon;
    return (
        <img
            style={{ width: `${width}px`, height: `${size}px` }}
            src={src}
            alt='splight'
            className={className}
        />
    )
}

SplightName.defaultProps = {
    size: 36,
    className:''
};

export default SplightName;