import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Auth from './components/Auth'
import Login from './components/LogIn'
import Navigation from './components/Navigation'
import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [userData, setUserData] = useState([]);
  const [bgData, setBGData] = useState([]);
  // Authorization
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });
  }, []);

    // if (!user) return <Login error={'please login'} />;

  // useEffect(() => {
  //   fetch("/boardgames")
  //     .then((r) => r.json())
  //     // .then((data)=>console.log(data))
  //     .then((data) => setBGData(data));
  // }, []);
  // console.log("User:");
  // useEffect(() => {
  //   fetch("/users")
  //     .then((r) => r.json())
  //     // .then((data)=>console.log(data))
  //     .then((data) => setUserData(data));
  // }, []);
  // console.log("Boardgame Data:");
  // console.log(bgData);
  // console.log("User:");
  // console.log(userData);

  return (
    <>
    <Navigation user={user} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>
    { (!isAuthenticated)? <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />:

    <Routes>
    {/* <Route exact path="/">
      <ProductionContainer productions={productions}/>
    </Route>
    <Route exact path="/productions/new">
      <ProductionForm handlePost={handlePost} errors={errors} />
    </Route>
    <Route exact path="/productions/:id">
        <ProductionDetail cart={cart} setCart={setCart}/>
    </Route> */}
    <Route path="/sign_up" element={<Auth setIsAuthenticated={setIsAuthenticated} setUser={setUser} />}>
    </Route>

    <Route path="/login" element={ <Login  error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />}>
    </Route>

    </Routes>
}
    </>
  );
}

export default App;
