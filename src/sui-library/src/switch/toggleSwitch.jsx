import React from 'react';
import './toggleSwitch.css';
  
const ToggleSwitch = ({onChange, disabled, color, checked, size='md', id}) => {
  
  return (
    <div className={`
     toggleSwitch
     ${`${size}__switch`}`
     } >
      <input
        type='checkbox'
        className='toggle__switch__checkbox'
        name={id}
        id={id}
        disabled={disabled}
        onChange={onChange}
        checked={checked}
      />
      <label className='toggle__switch__label' htmlFor={id}>
        <span className='toggle__switch__inner' color={color} style={{'--onColor': color}} />
        <span className='toggle__switch__switch' />
      </label>
    </div>
  );
};
  
export default ToggleSwitch;