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
import LoseScreen from './components/gameComponents/LoseScreen';
import WinScreen from './components/gameComponents/WinScreen';

function App() {
  const [gold, setGold] = useState(0)
  const [character, setCharacter] = useState(undefined)
  const [user, setUser] = useState("")
  const [userID, setUserID] = useState(null)
  const [started, setStarted] = useState(false)
  const [charHealth, setCharHealth] = useState(100)
  const [rowCount, setCount] = useState(1)
  const [rows, setRows] = useState([])
  const [charAttack, setCharAttack] = useState(10)

  function equipItem(character, item) {
    let formData;
    if(item.itemType === "armor"){
      formData = {
        character_id: character.id,
        armor: item
      }
    }
    else if(item.itemType === "trinket"){
      formData = {
        character_id: character.id,
        trinket: item
      }
    }
    else if(item.itemType === "weapon"){
      formData = {
        character_id: character.id,
        weapon: item
      }
    }
    fetch(`/character/equip`,{
      method: "UPDATE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
  }

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
        <Route path = '/win'>
            <WinScreen gold = {gold} setGold = {setGold} character = {character} setCount = {setCount} rowCount={rowCount}/>
          </Route>
          <Route path = '/lose'>
            <LoseScreen setRows={setRows}/>
          </Route>
          <Route path = '/character'>
            <CharacterCreator userID = {userID}/>
          </Route>
          <Route path = '/random'>
            <Random/>
          </Route>
          <Route path = '/fight'>
            <Fight level = {rowCount} setCharHealth = {setCharHealth} charHealth = {charHealth}/>
          </Route>
          <Route path = '/shop'>
            <Shop/>
          </Route>
          <Route path = '/map'>
            <Map rows = {rows} setRows = {setRows} character = {character} rowCount = {rowCount} setCount = {setCount}/>
          </Route>
          <Route path = '/characters'>
            <CharacterList userID = {userID}/>
          </Route>
          <Route path = '/login'>
            <Login setUser = {setUser} setUserID = {setUserID}/>
          </Route>
          <Route path = "/">
            <Start setRows = {setRows} setCharHealth={setCharHealth} started = {started} setStarted = {setStarted} userID = {userID} character={character} setCharacter = {setCharacter}/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
