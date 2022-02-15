import React, { useEffect, useState } from "react";
import './App.css';
import HomeScreen from "./components/HomeScreen";
import OwnerLogin from "./components/OwnerLogin";



function App() {
  
  return (
    <div className="App">
      <HomeScreen />
      <OwnerLogin />
    </div>
  );
}

export default App;
