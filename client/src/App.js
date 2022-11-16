import React, { useEffect, useState } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import MyPlants from './components/MyPlantsFolder/MyPlants';
import ReviewPlants from './components/ReviewsFolder/ReviewPlants';
import GlobalPlants from './components/GlobalPlantsFolder/GlobalPlants';
import LoginContainer from './components/LoginFolder/LoginContainer'
import PlantForm from './components/PlantForm';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([])
  const [plantPosts, setPlantPosts]=useState([])
  console.log(user)

  // auto-login if user_id in session
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((userData) => {
          setUser(userData)
          fetchGlobalPlants();
        });
      }
    });
  }, []);

  // Fetch request for global plants allowing for a user to fetch once when logged in!
  const fetchGlobalPlants = () => {
    fetch (`/plant_posts`)
    .then(res =>{
      if (res.ok){
        res.json().then(setPlantPosts)
      }else{
        res.json().then(data => setErrors(data.error))
      }
    })
  }

  //figure out how to access both login and signup components if user is not logged in

  if (!user) return <LoginContainer fetchGlobalPlants={fetchGlobalPlants} setUser={setUser} />

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <Switch>

        {/* <Route exact path="/login">
          <Login/>
        </Route>

        <Route exact path="/signup">
          <Signup setUser={setUser}/>
        </Route> */}

        <Route exact path="/">
          <Home/>
          <PlantForm 
          user={user}
          />
        </Route>

        <Route exact path="/about">
          <About/>
        </Route>

        <Route exact path="/myPlants">
          <MyPlants user={user}/>
        </Route>

        <Route exact path="/reviews">
          <ReviewPlants reviews={user.reviews}/>
        </Route>

        <Route exact path="/globalPlants">
          <GlobalPlants
            plantPosts={plantPosts}
          />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
