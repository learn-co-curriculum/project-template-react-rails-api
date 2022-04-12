import Login from './components/Login';
import {useState, useEffect} from 'react'
import { Route, Switch } from "react-router-dom";
import Start from './components/Start';
import NavBar from './components/Navbar';
import CharacterCreator from './components/CharacterCreator';
import CharacterList from './components/CharacterList';
import Map from './components/gameComponents/Map';
import Fight from './components/gameComponents/Fight';
import Shop from './components/gameComponents/Shop';
import Random from './components/gameComponents/Random';

function App() {
  const [character, setCharacter] = useState(undefined)
  const [user, setUser] = useState("")
  const [userID, setUserID] = useState(null)
  const [started, setStarted] = useState(false)
  const [charHealth, setCharHealth] = useState(100)

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
                <Route path = '/random'>
                  <Random/>
                </Route>
                <Route path = '/fight'>
                  <Fight setCharHealth = {setCharHealth} charHealth = {charHealth}/>
                </Route>
                <Route path = '/shop'>
                  <Shop/>
                </Route>
                <Route path = '/map'>
                  <Map character = {character}/>
                </Route>
                <Route path = '/characters'>
                  <CharacterList userID = {userID}/>
                </Route>
                <Route path = '/login'>
                  <Login setUser = {setUser} setUserID = {setUserID}/>
                </Route>
                <Route path = "/">
                  <Start started = {started} setStarted = {setStarted} userID = {userID} character={character} setCharacter = {setCharacter}/>
                </Route>
            </Switch>
    </div>
  );
}

export default App;
