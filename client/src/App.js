import logo from './logo.svg';
import './App.css';
import { Route, Router, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>HELP ME</div>
        <Router>
          <Route path={"/"} element = {<div>DOOO IT</div>}></Route>
          <Route path="/sale" element = {CreateSale}>
          </Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
