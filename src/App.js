import { useContext } from "react";
import AwesomeButton from "./sui-library/src/button/button.jsx";
import Typography from "./sui-library/src/typography/typography.js";
import { ThemeContext } from "./sui-library/src/themeContextProvider/themeContextProvider"
import "./App.css";

function App() {
  const { setTheme } = useContext(ThemeContext);
  return (
    <div className="App">
        <AwesomeButton clickHandler={setTheme} variant={'simple'}>Button Simple</AwesomeButton>
        <AwesomeButton clickHandler={setTheme} variant={'alternate'}>Button Alternate</AwesomeButton>
<Typography variant="h1">Label</Typography>
    </div>
  );
}

export default App;
