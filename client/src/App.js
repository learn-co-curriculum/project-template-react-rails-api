import './App.css';
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

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
    </div>
  );
}

export default App;
