import "./App.css";
import bisseKuva from "./images/lager.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bisseKuva} className="App-logo" alt="logo" />
        <p>Taa on miun sivu</p>
        <a
          className="App-link"
          href="https://bisse.ninja"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ninjataa sitä bissee...
        </a>
      </header>
    </div>
  );
}

export default App;
