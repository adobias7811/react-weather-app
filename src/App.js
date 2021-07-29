import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Weather App</h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="ttps://silly-kepler-6e4998.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Amanda Dobias
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/adobias7811/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
