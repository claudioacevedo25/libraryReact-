import { useContext } from "react";
import AwesomeButton from "./sui-library/src/button/button.jsx";
import AwesomeLabel from "./sui-library/src/label/label.jsx";
import { ThemeContext } from "./sui-library/src/themeContextProvider/themeContextProvider"
import "./App.css";

function App() {
  const { mode, setTheme } = useContext(ThemeContext);
  return (
    <div className="App">
        <AwesomeButton clickHandler={setTheme} mode={mode} variant={'simple'}>Button Simple</AwesomeButton>
        <AwesomeButton clickHandler={setTheme} mode={mode} variant={'alternate'}>Button Alternate</AwesomeButton>

        <AwesomeLabel variant={'primary'} mode={mode}>label desde librreri</AwesomeLabel>
    </div>
  );
}

export default App;
