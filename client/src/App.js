import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Flappybird from './components/Flappybird.js';
import GameTwo from './components/GameTwo';
import GameThree from './components/GameThree';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Flappybird" element={<Flappybird />}>
                      
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
