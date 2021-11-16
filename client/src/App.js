import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import GameOne from './components/GameOne';
import GameTwo from './components/GameTwo';
import GameThree from './components/GameThree';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/GameOne" element={<GameOne />}>
                      
          </Route>
          <Route path="/GameTwo" element={<GameTwo />}>
                      
          </Route>
          <Route path="/GameThree" element={<GameThree />}>
                      
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
