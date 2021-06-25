import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/login/Login';
import { Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Index from './components/login/Index';
import NavBar from './components/NavBar'
import Wellness from './pages/Wellness';
import Therapist from './pages/Therapist';
import Trainers from './pages/Trainers'
import Trainerscheduler from './pages/Trainerscheduler';
import Therapistschedular from './pages/Therapistschedular';
import Blogs from './pages/blogs';
import Psychologist from './pages/Psychologist';
import Profile from './pages/Profile';
import ProfilePage from './pages/ProfilePage';


function App() {
  const[user, setUser] = useState({});
  const [trainers, setTrainers] = useState([]);
  const [psychologists, setPsychologists] = useState([]);
  const [filterGender, setFilterGender] = useState('all')
  const [filterLanguage, setFilterLanguage] = useState('all')
  const [psychologistAppointment, setpsychologistAppointment] = useState([])
  const [profiles, setprofiles] = useState([])
  

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {setUser(user)
        });
      }
    });
  }, []);

//fetch trainers
const onFilterTrainer = () =>{
  let url = '/trainers';
  if (filterGender !== 'all' && filterLanguage !== 'all'){
    url += `?gender=${filterGender}&language=${filterLanguage}`
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
  if (filterGender !== 'all' && filterLanguage !== 'all'){
    url += `?gender=${filterGender}&language=${filterLanguage}`
  }
  
  fetch(url,
    {mode: 'cors',
    credentials: 'include'})
  .then(res => res.json())
  .then(filteredItem => setPsychologists(filteredItem))
  console.log(url)
  }

  //fetch appointments
  useEffect(() => {
    fetch("/psychologist_appointments")
    .then((r) => r.json())
    .then(setpsychologistAppointment);
  }, []);

  function handleAddPsychAppointment(addedPsychAppointment){
    setpsychologistAppointment((psychologistAppointment) => [...psychologistAppointment, addedPsychAppointment]);
  }
  //fetch profile

  
  useEffect(() => {
    fetch("/profiles")
      .then((r) => r.json())
      .then(setprofiles);
  }, []);

  function handleAddProfile(addedProfiles){
    setprofiles((profiles) => [...profiles, addedProfiles]);
  }

  function handleDeleteProfile(deletedProfiles) {
    setprofiles((profiles) =>
      profiles.filter((profile) => profile.id !== deletedProfiles.id)
    );
  }

  const updateProfile = (profileId, newValue) =>{
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
      setprofiles(prev => prev.map(item => (item.id ===profileId ? newValue : item)))
  }

  if (!user) return <Index onLogin={setUser} />;

  return (
    <>
    <NavBar profiles={profiles} user={user} setUser={setUser} />
    <Router>
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/wellness">
          <Wellness 
          onFilterTrainer={onFilterTrainer}
          setFilterGender={setFilterGender}
          setFilterLanguage={setFilterLanguage}
          />
        </Route>
        <Route path="/therapist">
          <Therapist
          onFilter={onFilter}
          setFilterGender={setFilterGender}
          setFilterLanguage={setFilterLanguage}
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
    <Trainerscheduler  />
    </Route>
    <Route path="/therapistschedular">
    <Therapistschedular 
    psychologistAppointment={psychologistAppointment}
    />
    </Route>
    <Route path="/profile">
    <Profile 
    user={user}
    onAddProfile={handleAddProfile}/>
    </Route>
    <Route path="/myprofile">
    <ProfilePage
    user={user}
    updateProfile={updateProfile}
    onDeleteProfile={handleDeleteProfile}
    profiles={profiles}
    />
    </Route>
      </Switch>
    </main>
      </Router>
  </>
  );
}

export default App;
