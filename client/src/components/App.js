
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Login from './Login';
import Logout from './Logout';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
      </div>
      <Routes>
       <Route exact path= '/home'  element={<Home/>} />
       <Route exact path= '/about' element={<About/>} />
       <Route exect path= '/login' element={<Login/>} />
       <Route exect path= '/logout' element={<Logout/>} />
      </Routes>
    </Router>
  );
}

export default App;
