import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Property from "./components/Property";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import About from "./components/About";
import Properties from "./components/properties";

function App() {
  const [properties, setProperties] = useState([]);
  const [user, setUser] = useState(null);

  // auto login
  useEffect(() => {
    fetch("/users")
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      })
      .catch(console.error);
  }, []);

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
      <Navbar user={user} setUser={setUser} />

      {user ? (
        <Routes>
          <Route
            exact
            path="/"
            element={<Home properties={properties} user={user} />}
          ></Route>
        </Routes>
      ) : (
        <Routes>
          <Route
            exact
            path="/"
            element={<Home properties={properties} />}
          ></Route>
          <Route
            path="/properties/:id"
            element={<Property setUser={setUser} />}
          ></Route>
          <Route
            path="/properties"
            element={<Properties setUser={setUser} />}
          ></Route>
          <Route path="/about" element={<About setUser={setUser} />}></Route>
          <Route path="/signin" element={<SignIn setUser={setUser} />}></Route>
          <Route path="/signup" element={<SignUp setUser={setUser} />}></Route>
        </Routes>
      )}
      <Footer />
    </div>
  );
}

export default App;
