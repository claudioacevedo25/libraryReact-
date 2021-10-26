import { useContext } from "react";
import Button from "./sui-library/src/button/button.jsx";
import Typography from "./sui-library/src/typography/typography.jsx";
import Avatar from "./sui-library/src/avatar/avatar.jsx";
import { ThemeContext } from "./sui-library/src/themeContextProvider/themeContextProvider";
import "./App.css";

function App() {
  const { setTheme } = useContext(ThemeContext);
  return (
    <div className="App">
      <Button onClick={setTheme}>invite user</Button>
      <hr />
      <Button onClick={setTheme} variant="alternate">
        Variant Alternate
      </Button>
      <hr />
      <div className="App__labels">
        <Typography variant="h1">Label h1</Typography>
        <Typography variant="h2">Label h2</Typography>
        <Typography variant="h3">Label h3</Typography>
        <Typography variant="subtitle">Label subtitle</Typography>
        <Typography variant="body">Label body</Typography>
        <Typography variant="bodyBold">Label bodyBold</Typography>
        <Typography variant="small">Label small</Typography>
        <Typography variant="preTitle">Label preTitle</Typography>
        <Typography variant="textButton">Label textButton</Typography>
        <Typography>No variant</Typography>
        <Typography variant="body" color="red" size="1.8rem">
          Color and size
        </Typography>
      </div>
      <div className="App__avatar">
        <Avatar
          src="https://profile-pictures-test.s3.amazonaws.com/fa06a8891d1a4316992d4197cd2869ea.jpg"
          name="Thomas "
        />
        <Avatar name="Estrella cholod" />
      </div>
    </div>
  );
}

export default App;
