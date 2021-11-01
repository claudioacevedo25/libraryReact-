import React from "react";
import PropTypes from 'prop-types';
import Icon from './assets/splightRounded.svg';

const SplightRounded = ({className, size}) => {
    return (
        <img 
            style={{width:`${size}px`, height:`${size}px`}}
            alt='splight' 
            src={Icon}
            className={className}
        />
    )
};

SplightRounded.defaultProps = {
    size: 60,
  };
  
SplightRounded.propTypes = {
    size: PropTypes.number.isRequired,
};


export default SplightRounded;