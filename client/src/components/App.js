import React, {useState, useEffect} from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";
import Home from './Home';
import About from './About';
import Login from './Login';
import NavBar from './NavBar';
// import Signup from './Signup';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/user").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <Login onLogin={setUser} />;
  //  if (!user) return <Redirect to="/home"/>;
  


  return (
  
      
   <div>
    <div>
        <NavBar/>
      </div>
      <Routes>
       <Route exact path= '/home'  element={<Home/>} />
       <Route exact path= '/about' element={<About/>} />
       <Route exact path= '/login' element={<Login/>} />
       {/* <Route exact path= '/signup' element={<Signup/>} /> */}
      </Routes>
   </div>
  );
}

export default App;
