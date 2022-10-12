import React from "react";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
// import Home from "./components/Home";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Property from "./components/Property";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Router> */}
        {/* <Routes>
          <Route exact path="/" element = {<Home/>}></Route>
        </Routes> */}
      {/* </Router> */}
      <Footer/>
   
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/property" element={<Property />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
