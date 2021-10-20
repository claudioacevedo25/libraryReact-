import { useContext } from "react";
import AwesomeButton from "./sui-library/src/button/button.jsx";
import AwesomeLabel from "./sui-library/src/label/label.jsx";
import { ThemeContext } from "./sui-library/src/themeContextProvider/themeContextProvider"
import "./App.css";

function App() {
  const { mode, setTheme } = useContext(ThemeContext);
  return (
    <div className="App">
        <AwesomeButton clickHandler={setTheme} mode={mode} variant={'primary'}>Button Primary</AwesomeButton>
        <AwesomeButton clickHandler={setTheme} mode={mode} variant={'secondary'}>Button Secondary</AwesomeButton>
        <AwesomeButton clickHandler={setTheme} mode={mode} variant={'hierarchy1'}>Button Hierarchy 1</AwesomeButton>
        <AwesomeButton clickHandler={setTheme} mode={mode} variant={'hierarchy2'}>Button Hierarchy 2</AwesomeButton>
        <AwesomeButton clickHandler={setTheme} mode={mode} variant={'hierarchy3'}>Button Hierarchy 3</AwesomeButton>

        <AwesomeLabel variant={'primary'} mode={mode}>label desde librreri</AwesomeLabel>
    </div>
  );
}

export default App;
