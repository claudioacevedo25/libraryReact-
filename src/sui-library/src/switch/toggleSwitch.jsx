import React from 'react';
import './toggleSwitch.css';
  
const ToggleSwitch = ({onChange, disabled, color, checked, size, id}) => {
  
  const getSwitchOnColor = ()=>{
    if(color && !disabled){
      return color
    }else if(disabled){
      return '#ccc'
    }else{return '#313238'}
  }

  const getSwitchSize = ()=>{
    if(size){
      switch(size){
        case 'sm':
          return 'small'
        case 'md':
          return 'medium'
        case 'lg':
          return 'large'
        default:
          return 'medium'
      }
    }else{return 'medium'}
  }

  return (
    <div className={`
     toggle-switch
     ${`${getSwitchSize()}-switch`}`
     } style={{'--on-color': getSwitchOnColor()}}>
      <input
        type='checkbox'
        className='toggle-switch-checkbox'
        name={id}
        id={id}
        disabled={disabled}
        onChange={onChange}
        checked={checked}
      />
      <label className='toggle-switch-label' htmlFor={id}>
        <span className='toggle-switch-inner' />
        <span className='toggle-switch-switch' />
      </label>
    </div>
  );
};
  
export default ToggleSwitch;