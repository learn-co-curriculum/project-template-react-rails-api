import { Switch, Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Request from './Request';
import Profile from './Profile';
import Settings from './Settings';
import Login from "./Login";


function App(){
    const [parent, setParent] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:3000/Parent')
    .then(response => response.json())
    .then(data => setParent(data))
  },[] )

  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route path="/Home"><Home parent={parent} setParent={setParent} /></Route>
      <Route path="/Request"><Request /></Route>
      <Route path="/Profile"><Profile /></Route>
      <Route path="/Settings"><Settings /></Route>
      <Route path="/Login"><Login /></Route>
      </Switch>
    </div>
  );
}

export default App;
