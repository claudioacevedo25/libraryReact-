import React from 'react';
import Switch from '@mui/material/Switch';
import './splightSwitch.css'


const SplightSwitch = ({size, onChange, className, disabled}) => {
    return (
        <Switch 
            className={`${className} ios__switch`} 
            onChange={onChange} 
            size={`${size}`}
            disabled={disabled}
        />
    );
};

SplightSwitch.defaultProps = {
    size: 'small',
    onChange: () => {},
    className: ''
}

export default SplightSwitch;

