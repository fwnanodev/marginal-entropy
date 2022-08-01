import logo from "./logo.svg";
import "./App.css";
import HeroImage from "./components/HeroImage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Nelson was here</div>
        <HeroImage word="Donkey"/>
        <HeroImage word="Kong"/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
