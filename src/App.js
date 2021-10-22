import { useContext } from "react";
import Button from "./sui-library/src/button/button.jsx";
import AwesomeLabel from "./sui-library/src/label/label.jsx";
import { ThemeContext } from "./sui-library/src/themeContextProvider/themeContextProvider"
import "./App.css";

function App() {
  const { setTheme } = useContext(ThemeContext);
  return (
    <div className="App">
        <Button clickHandler={setTheme} variant={'simple'}>INVITE USER</Button><hr/>
        <Button clickHandler={setTheme} variant={'alternate'}>Button Alternate</Button><hr/>

        <AwesomeLabel variant={'primary'}>label desde librreri</AwesomeLabel>
    </div>
  );
}

export default App;
