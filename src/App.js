import logo from "./logo.svg";
import "./App.css";

import Board from "./components/Board";

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="logo" className="logo" />
        <h1>Khet</h1>
        <p>The best game since sliced bread</p>
      </header>

      <main>
        <Board />
      </main>

      <footer>
        <p>Built by Maxworld Technologies</p>
      </footer>
    </>
  );
}

export default App;
