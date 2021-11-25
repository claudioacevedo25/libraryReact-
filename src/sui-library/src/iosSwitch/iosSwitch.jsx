import React, {useContext} from 'react';
import { ThemeContext } from "../themeContextProvider/themeContextProvider";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';


const IOSSwitch = styled((props) => {
 return <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
})(({ theme }) => {
  const { mode } = useContext(ThemeContext);
  return({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff', //color del circulo checkeado
        '& + .MuiSwitch-track': {
          backgroundColor: '#999', //color del fondo checkeado
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      // '&.Mui-focusVisible .MuiSwitch-thumb': {
      //   color: '#33cf4d',
      //   border: '6px solid #fff',
      // },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          mode === 'light'
            ? theme.palette.grey[300]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.2,
      },
    },
    '& .MuiSwitch-thumb': { //tamaño del circulo interno
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': { //cuando no esta checkeado
      borderRadius: 26 / 2,
      backgroundColor: mode === 'dark' ? '#c1c1c3' : '#4d4d4d',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  })
});
export default IOSSwitch;
