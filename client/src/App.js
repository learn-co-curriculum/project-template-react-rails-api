import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CreateSale from './Components/CreateSale';
function App() {
  return (
    <div className="App">
      <Router>
        <Route path={"/"} element = {<div>DOOO IT</div>}></Route>
        <Route path="/sale" element = {CreateSale}>
        </Route>
      </Router>
    </div>
  );
}

export default App;
