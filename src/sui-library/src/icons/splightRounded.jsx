import React from "react";
import Icon from './assets/splightRounded.svg';

const SplightRounded = ({className, size = 60}) => {
    return (
        <img 
            style={{width:`${size}px`, height:`${size}px`}}
            alt='splight' 
            src={Icon}
            className={className}
        />
    )
}

export default SplightRounded;