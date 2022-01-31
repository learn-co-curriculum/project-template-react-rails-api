import logo from './logo.svg';
import './App.css';

// Color Palatte
// Text - Dark Grey #424242
// Primary Color - E
// Secondary Color - #


// Petfinder API Key: K7wpPYjZCTiRxVfWsCeKixCdj9iqZ2IKVHTuLbmeWA1XmTBB0M
// Petfinder Secret: t2MHR3Cw0WlithMtbyOfwN7aRv8c2iBWeApgTbWw
// Petfinder uses OAuth for secure authentication

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
      </header>
    </div>
  );
}

export default App;
