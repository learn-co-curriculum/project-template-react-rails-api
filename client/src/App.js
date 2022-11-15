import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import Homepage from './Homepage';
import LoginPage from './LoginPage'

function App() {

  const [user, setUser] = useState(null)
  

  // useEffect(()=> {
  //   fetch("https://wger.de/api/v2/exercise", {
  //     // headers: {"Authorization" : "Token ebbb6fb7b71c5ed178b475dbd856d9d3339b16b4"}
  //   })
  //   .then(res => res.json())
  //   .then(console.log)
  // })
  
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);


  if (!user) {
    return <LoginPage onLogin={setUser} />;
  }

  // const [showStuff, setStuff] = useState([])

  //TEST CALL TO THE API AND GETTING DATA BACK COMPLETE

  // useEffect(() => {
  //   fetch('https://wger.de/api/v2/equipment', {
  //     headers: { 'Content-Type' : 'application/json' },
  //     method: 'GET'
  //   })
  //   .then(res => {
  //     // console.log(res)
  //     return res.json()
  //   })
  //   .then(data => {
  //     console.log(data.results)
  //     setStuff(data.results)
  //   })
  // }, [])

  // function showEqipment(item) {
  //   return (
  //     <li>{item.name}</li>
  //   )
  // }

  return (
    <div> 
    <h2>Welcome {user.username}!</h2>
      <Homepage />
    </div>
  );
}

export default App;
