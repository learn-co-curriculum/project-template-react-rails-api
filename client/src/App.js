import logo from './logo.svg';
import './App.css';
import CreateSale from './Components/CreateSale';
import { Route, Router, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>HELP ME</div>
        <Router>
          <Route path={"/"} element = {<div>DOasdasdasOO IT</div>}></Route>
          <Route path="/sale" element = {CreateSale}>
          </Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
