import React from 'react';
import PropTypes from 'prop-types';
import './toggleSwitch.css';
  
const ToggleSwitch = ({className, onChange, disabled, color, checked, size, id}) => {
  
  return (
    <div className={`${className}
     toggleSwitch
     ${`${size}__switch`}${disabled ? ` toggle__switch__disabled` : ''}`
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

ToggleSwitch.defaultProps = {
  onChange:()=>{},
  size: 'md',
  disabled: false,
  color: '',
  checked: false,
  id: '',
};

ToggleSwitch.propTypes = {
  onChange: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  color: PropTypes.string,
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired
};

  
export default ToggleSwitch;