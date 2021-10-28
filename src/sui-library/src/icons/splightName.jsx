import React, { useContext } from "react";
import { ThemeContext } from "../themeContextProvider/themeContextProvider";
import DarkIcon from './assets/darkSplight.svg';
import LightIcon from './assets/lightSplight.svg';


const SplightName = ({size = 36}) => {
    const {mode} = useContext(ThemeContext);
    const width = size + 76;
    const src = mode === 'dark' ? DarkIcon : LightIcon;
    return (
        <img
            style={{width:`${width}px`, height:`${size}px`}}
            src={src}
            alt='splight'
        />
    )
}

export default SplightName;