import React, {useState} from 'react'
import ToggleSwitch from "../../sui-library/src/switch";
import './switchTest.css'
const  SwitchTest = () => {

    const [checkboxState, setCheckboxState] = useState({
    switchNormalA:false,
    switchNormalB:true,
    switchSmallA:false,
    switchSmallB:false,
    switchLargeA:false,
    switchLargeB:false,
  })
  const toggleCheckbox = (switchToChange) =>{
    setCheckboxState(
      {
        ...checkboxState,
        [switchToChange]: !checkboxState[switchToChange]
      }
    )
  }

    return (
        <div className="container__switches">
        <ToggleSwitch checked={checkboxState.switchLargeA} size={'lg'} disabled={true} onChange={
          ()=>{
            toggleCheckbox('switchLargeA')
          }
         } id={"ToggleSwitchSwitchLargeA"}/>
         <ToggleSwitch checked={checkboxState.switchLargeB} size={'lg'} onChange={
          ()=>{
            toggleCheckbox('switchLargeB')
          }
         } id={"ToggleSwitchSwitchLargeB"} color={'red'}/>
         <br/>
        <ToggleSwitch checked={checkboxState.switchNormalA} size={'md'} onChange={
          ()=>{
            toggleCheckbox('switchNormalA')
          }
         } id={"ToggleSwitchNormalA"}/>
         <ToggleSwitch checked={checkboxState.switchNormalB} size={'md'} disabled onChange={
          ()=>{
            toggleCheckbox('switchNormalB')
          }
         } id={"ToggleSwitchNormalB"} color={'red'}/>
         <br/>
         <ToggleSwitch checked={checkboxState.switchSmallA} size={'sm'} onChange={
          ()=>{
            toggleCheckbox('switchSmallA')
          }
         } id={"ToggleSwitchSwitchSmallA"}/>
         <ToggleSwitch checked={checkboxState.switchSmallB} color={'red'} size={'sm'} onChange={
          ()=>{
            toggleCheckbox('switchSmallB')
          }
         } id={"ToggleSwitchSmallB"} />
         <br/>
         
      </div>
    )
}



export default SwitchTest;