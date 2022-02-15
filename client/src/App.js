import React, { useEffect, useState } from "react";
import './App.css';
import HomeScreen from "./components/HomeScreen";
import OwnerLogin from "./components/OwnerLogin";
import OwnerDash from "./components/OwnerDash";

import '@fontsource/roboto/400.css';



function App() {
  
  return (
    <div className="App">
      <HomeScreen />
      <OwnerLogin />
      <OwnerDash />
    </div>
  );
}

export default App;
