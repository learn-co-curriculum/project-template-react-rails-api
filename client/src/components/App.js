import { Switch, Route} from 'react-router-dom';
import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Request from './Request';
import ProfileInfo from './ProfileInfo';
import Settings from './Settings';
import Login from "./Login";

function App(){
    const [user, setUser] = useState(null);
    const params = useParams();

 useEffect(()=> {
  fetch(`/users/${params.id}`)
  .then(resp => resp.json())
  .then(data => setUser(data)

  )}
, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route path="/Home"><Home/></Route>
      <Route path="/Request"><Request /></Route>
      <Route path="/ProfileInfo"><ProfileInfo user={user} /></Route>
      <Route path="/Settings"><Settings setUser={setUser} user={user} /></Route>
      <Route path="/Login"><Login /></Route>
      </Switch>
    </div>
  );
}

export default App;
