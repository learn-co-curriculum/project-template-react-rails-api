import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";


function App() {
  const [userData, setUserData] = useState([])
  const [bgData, setBGData] = useState([])
useEffect(() => {
  fetch("/boardgames")
  .then((r)=>r.json())
  // .then((data)=>console.log(data))
  .then((data)=>setBGData(data))
}, [])
console.log("User:")
useEffect(() => {
  fetch("/users")
  .then((r)=>r.json())
  // .then((data)=>console.log(data))
  .then((data)=>setUserData(data))
}, [])
console.log("Boardgame Data:")
console.log(bgData)
console.log("User:")
console.log(userData)

  return (

    

    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>
      </header>
    </div>
  );
}

export default App;
