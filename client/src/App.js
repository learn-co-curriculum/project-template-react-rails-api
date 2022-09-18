import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import NewTraining from "./components/NewTraining/NewTraining";
import Training from "./components/Training/Training";
import React, { useEffect, useState } from "react";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
        <NavBar user={user} setUser={setUser}/>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/new" element={<NewTraining/>}/>
            <Route path="/training" element={<Training/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;