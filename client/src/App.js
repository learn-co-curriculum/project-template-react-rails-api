import logo from './logo.svg';
import './App.css';
import CreateSale from './Components/CreateSale';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import DisplaySale from './Components/DisplaySale';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>HELP ME</div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<div>DOasdasasdasddsfadsasOO IT</div>}></Route>
            <Route path="/sale" element = {<CreateSale/>}>
            </Route>
            <Route path="/sale/:id" element={<DisplaySale/>}>
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
