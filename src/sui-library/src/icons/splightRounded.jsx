import React from "react";
import Icon from './assets/splightRounded.svg';

const SplightRounded = ({ className, size, onClick }) => {
    return (
        <img
            style={{ width: `${size}px`, height: `${size}px` }}
            alt='splight'
            src={Icon}
            className={className}
            onClick={onClick}
        />
    )
};

SplightRounded.defaultProps = {
    className: "",
    size: 60,
    onClick: () => { },
};

export default SplightRounded;