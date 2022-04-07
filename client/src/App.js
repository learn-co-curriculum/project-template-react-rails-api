import Login from './components/Login';
import {useState, useEffect} from 'react'
import { Route, Switch } from "react-router-dom";
import Start from './components/Start';
import NavBar from './components/Navbar';
import CharacterCreator from './components/CharacterCreator';
import CharacterList from './components/CharacterList';

function App() {
  const [user, setUser] = useState("")
  const [userID, setUserID] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) =>r.json()).then((r) => {
      if (r !== null) {
        setUser(r.username)
        setUserID(r.id)
      }
    });
  }, []);
  
  return (
    <div className="App">
      <h1>Hello {user}</h1>
      <NavBar/>
      <Switch>
                <Route path = '/character'>
                  <CharacterCreator userID = {userID}/>
                </Route>
                <Route path = '/characters'>
                  <CharacterList userID = {userID}/>
                </Route>
                <Route path = '/login'>
                  <Login setUser = {setUser}/>
                </Route>
                <Route path = "/">
                  <Start />
                </Route>
            </Switch>
    </div>
  );
}

export default App;
