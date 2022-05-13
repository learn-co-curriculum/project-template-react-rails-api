import { Switch, Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Request from './Request';
import ProfileInfo from './ProfileInfo';
import Settings from './Settings';
import Login from "./Login";

function App(){
  const [currentUser, setCurrentUser] = useState();
  const [user, setUser] = useState({
  username: '',
  password: '',
  email: '',
  address: "",
  image: "",
  name: "",
  age: "",
  early: false,
  nightOwl: false,
  emergency: false,
  admin: false,
  });
  const [playdates, setPlaydate] = useState(null);


  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route path="/Home"><Home playdates={playdates} setPlaydate={setPlaydate}/></Route>
      <Route path="/Request"><Request playdates={playdates}/></Route>
      <Route path="/ProfileInfo"><ProfileInfo setCurrentUser={setCurrentUser} user={user} setUser={setUser}/></Route>
      <Route path="/Settings"><Settings setUser={setUser} user={user} /></Route>
      <Route path="/Login"><Login user={user} setUser={setUser} currentUser={currentUser} setCurrentUser={setCurrentUser} /></Route>
      </Switch>
    </div>
  );
}

export default App;
