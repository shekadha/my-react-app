import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Weather defaultCity="Berlin" />
          <footer>
            This code is created by Shekoufeh and is {""}
            <a
              href="https://github.com/shekadha/my-react-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>
          </footer>
        </div>
      </header>
    </div>
  );
}
