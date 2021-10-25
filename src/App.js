import { useContext, useState } from "react";
import { ThemeContext } from "./sui-library/src/themeContextProvider/themeContextProvider"
import AwesomeButton from "./sui-library/src/button/button.jsx";
import AwesomeLabel from "./sui-library/src/label/label.jsx";
import ToggleSwitch from "./sui-library/src/switch/toggleSwitch";
import "./App.css";

function App() {
  const { mode, setTheme } = useContext(ThemeContext);
  const [checkboxState, setCheckboxState] = useState(true)

  const toggleCheckbox = () =>{
    setCheckboxState(!checkboxState)
  }

  return (
    <div className="App">
        <ToggleSwitch onChange={toggleCheckbox} id={'switchA'} disabled={false} color='cyan' checked={checkboxState}  size={'small'} variant={'simple'} />
        <AwesomeButton clickHandler={setTheme} variant={'simple'}>Button Simple</AwesomeButton>
        <AwesomeButton clickHandler={setTheme} variant={'alternate'}>Button Alternate</AwesomeButton>
        <AwesomeLabel variant={'primary'}>label desde librreri</AwesomeLabel>
    </div>
  );
}

export default App;
