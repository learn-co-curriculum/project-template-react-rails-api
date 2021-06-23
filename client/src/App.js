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
  const [filterGenderTrainer, setFilterGenderTrainer] = useState('all')
  const [filterLanguageTrainer, setFilterLanguageTrainer] = useState('all')
  const [filterGenderPsych, setFilterGenderPsych] = useState('all')
  const [filterLanguagePsych, setFilterLanguagePsych] = useState('all')

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

//fetch trainers
const onFilterTrainer = () =>{
  let url = '/trainers';
  if (filterGenderTrainer !== 'all' && filterLanguageTrainer !== 'all'){
    url += `?gender=${filterGenderTrainer}&language=${filterLanguageTrainer}`
  }
  
  fetch(url,
    {mode: 'cors',
    credentials: 'include'})
  .then(res => res.json())
  .then(filteredItem => setTrainers(filteredItem))
  console.log(url)
  }

  //update rating
  function handleUpdateSpecialist(updatedSpecialist) {
    setTrainers((trainers) =>
      trainers.map((trainer) => {
        return trainer.id === updatedSpecialist.id ? updatedSpecialist : trainer;
      })
    );
  }

//fetch psychologists with filter
 const onFilter = () =>{
  let url = '/psychologists';
  if (filterGenderPsych !== 'all' && filterLanguagePsych !== 'all'){
    url += `?gender=${filterGenderPsych}&language=${filterLanguagePsych}`
  }
  
  fetch(url,
    {mode: 'cors',
    credentials: 'include'})
  .then(res => res.json())
  .then(filteredItem => setPsychologists(filteredItem))
  console.log(url)
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
          onFilterTrainer={onFilterTrainer}
          setFilterGenderTrainer={setFilterGenderTrainer}
          setFilterLanguageTrainer={setFilterLanguageTrainer}
          />
        </Route>
        <Route path="/therapist">
          <Therapist
          onFilter={onFilter}
          setFilterGenderPsych={setFilterGenderPsych}
          setFilterLanguagePsych={setFilterLanguagePsych}
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
