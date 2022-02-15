import React, { useEffect, useState } from "react";
import './App.css';
import HomeScreen from "./components/HomeScreen";
import OwnerDash from "./components/OwnerDash";

import '@fontsource/roboto/400.css';

function App() {
  
  return (
    <div className="App">
      <HomeScreen />
      <OwnerDash />
    </div>
  );
}

export default App;
