import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/login/Login';
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Index from './components/login/Index';
import NavBar from './components/NavBar'
import Wellness from './pages/Wellness';
import Therapist from './pages/Therapist';
import Trainers from './pages/Trainers'
import Trainerscheduler from './pages/Trainerscheduler';
import Therapistschedular from './pages/Therapistschedular';
import Blogs from './pages/blogs';


function App() {
  const[user, setUser] = useState(null);
  const [specialists, setSpecialists] = useState([]);
  const [filters, setFilters] = useState({specialty: 'all'})

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/specialists/?specialty=Trainer")
      .then((r) => r.json())
      .then(setSpecialists);
  }, []);

  //update rating
  function handleUpdateSpecialist(updatedSpecialist) {
    setSpecialists((specialists) =>
      specialists.map((specialist) => {
        return specialist.id === updatedSpecialist.id ? updatedSpecialist : specialist;
      })
    );
  }

 const onFilterSpecialist = () =>{
  let url = '/specialists';
  if (specialists.filters.specialty !== 'all'){
    url += `?specialty=${specialists.filters.specialty}`
  }
  fetch(url)
  .then(res => res.json())
  .then(specialists => setSpecialists({ specialists: specialists}))
  }
 const onChangeType = ({target: {value} }) =>{
    setFilters( {filters: {type: value}})
  }

  if (!user) return <Index onLogin={setUser} />;

  return (
    <>
    <NavBar user={user} setUser={setUser} />
    <Router>
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/wellness">
          <Wellness 
          filters = {onFilterSpecialist}
           onChangeType={onChangeType}
          />
        </Route>
        <Route path="/therapist">
          <Therapist />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/trainers">
      <Trainers 
      onUpdatedSpecialist={handleUpdateSpecialist}
      specialists={specialists} />
      </Route>
    <Route path="/trainerschedular">
    <Trainerscheduler />
    </Route>
    <Route path="/therapistschedular">
    <Therapistschedular />
    </Route>
      </Switch>
    </main>
      </Router>
  </>
  );
}

export default App;
