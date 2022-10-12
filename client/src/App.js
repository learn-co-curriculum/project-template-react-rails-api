import './App.css';
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Footer from './components/Footer';
// import Home from "./components/Home";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Property from "./components/Property";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import About from "./components/About";

function App() {
  const [properties, setProperties] = useState([]);

  // fetch properties from the server
  useEffect(() => {
    fetch("/properties")
      .then((res) => res.json())
      .then((properties) => {
        console.log(properties);
        setProperties(properties);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home properties={properties} />
      {/* <Router> */}
        {/* <Routes>
          <Route exact path="/" element = {<Home/>}></Route>
        </Routes> */}
      {/* </Router> */}
      <Footer/>
   
      <Routes>
        <Route path="/" element={<Home properties={properties} />}></Route>
        <Route path="/property" element={<Property />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
