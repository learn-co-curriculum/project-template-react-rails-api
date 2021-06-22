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
import Psychologist from './pages/Psychologist';


function App() {
  const[user, setUser] = useState(null);
  const [trainers, setTrainers] = useState([]);
  const [psychologists, setPsychologists] = useState([]);
  const [filter, setFilter] = useState({gender: 'all'})

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

//fetch trainers
useEffect(() => {
  fetch("/trainers")
    .then((r) => r.json())
    .then(setTrainers);
}, []);
//fetch psychologists without useEffect

  // const onSubmitPsychologist = () => {
  //   fetch("http://localhost:3000/psychologists")
  //     .then((r) => r.json())
  //     .then(psychologists => setPsychologists({ psychologists}));
  // };

  //fetch psychologist with useEffect
  useEffect(() => {
    fetch("/psychologists")
      .then((r) => r.json())
      .then(setPsychologists);
  }, []);

  //update rating
  function handleUpdateSpecialist(updatedSpecialist) {
    setTrainers((trainers) =>
      trainers.map((trainer) => {
        return trainer.id === updatedSpecialist.id ? updatedSpecialist : trainer;
      })
    );
  }


  // const onFilterSpecialist = () =>{
  //   let url = '/specialists';
  //   if ("http://localhost:4000//wellness" && ) {
  //     "http://localhost:4000//trainer"
  //     specialists.filters.specialty = 'Trainer'
  //   }
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(specialists => setSpecialists({ specialists: specialists}))
  //   }
  //  const onChangeType = ({target: {value} }) =>{
  //     setFilters( {filters: {type: value}})
  //   }

 const onFilter = () =>{
  let url = 'http://localhost:3000/psychologists';
  if (filter.gender !== 'all'){
    url += `?gender=${filter.gender}`
  }
  fetch(url, {crossDomain: true}, {withCredentials: true})
  .then(res => res.json())
  .then(filteredItem => setPsychologists({filteredItem}))
  }
 const onChangeType = ({target: {value} }) =>{
    setFilter( {gender: value} )
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
          />
        </Route>
        <Route path="/therapist">
          <Therapist
          onFilter={onFilter}
          onChangeType={onChangeType}
          />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/psychologists">
          <Psychologist
          onUpdatedSpecialist={handleUpdateSpecialist}
          psychologists={psychologists} />
        </Route>
        <Route path="/trainers">
      <Trainers 
      onUpdatedSpecialist={handleUpdateSpecialist}
      trainers={trainers} />
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
