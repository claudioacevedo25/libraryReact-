import logo from "./logo.svg";
import "./App.css";
import AwesomeButton from "./sui-library/src/button/button.jsx";
import AwesomeLabel from "./sui-library/src/label/label.jsx";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AwesomeButton>TEst button</AwesomeButton>
        <AwesomeLabel>label desde librreri</AwesomeLabel>
      </header>
    </div>
  );
}

export default App;
