import React, { useEffect, useState } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import MyPlants from './components/MyPlantsFolder/MyPlants';
import ReviewPlants from './components/ReviewsFolder/ReviewPlants';
import GlobalPlants from './components/GlobalPlantsFolder/GlobalPlants';
import Login from './components/LoginFolder/Login';
import Signup from './components/LoginFolder/Signup';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    // auto-login if user_id in session
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      <NavBar/>
      <Switch>

        <Route exact path="/login">
          <Login setUser={setUser}/>
        </Route>

        <Route exact path="/signup">
          <Signup setUser={setUser}/>
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/about">
          <About/>
        </Route>

        <Route exact path="/myPlants">
          <MyPlants/>
        </Route>

        <Route exact path="/reviews">
          <ReviewPlants/>
        </Route>

        <Route exact path="/globalPlants">
          <GlobalPlants/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
