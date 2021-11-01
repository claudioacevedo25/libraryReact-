import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { ThemeContext } from "../themeContextProvider/themeContextProvider";
import DarkIcon from './assets/darkSplight.svg';
import LightIcon from './assets/lightSplight.svg';


const SplightName = ({className, size}) => {
    const {mode} = useContext(ThemeContext);
    const width = size + 76;
    const src = mode === 'dark' ? DarkIcon : LightIcon;
    return (
        <img
            style={{width:`${width}px`, height:`${size}px`}}
            src={src}
            alt='splight'
            className={className}
        />
    )
}

SplightName.defaultProps = {
    size: 36,
  };
  
SplightName.propTypes = {
    size: PropTypes.number.isRequired,
};

export default SplightName;