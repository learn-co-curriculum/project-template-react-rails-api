import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/Footer";
import HomeNavBar from "./components/HomeNavBar";
import ApplicantNavBar from "./components/ApplicantNavBar"
import Portal from "./components/Portal";
import ApplicantPortal from "./components/ApplicantPortal";
import Login from "./components/Login";
import ApplicantSignUp from "./components/ApplicantSignUp";
import Applications from "./components/Applications"
import AdoptablePets from "./components/AdoptablePets";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [pets, setPets] = useState([]);
  const [applications, setApplications] = useState([]);

  //auto-login for existing users
  useEffect(() => {
    fetch("/me") // "/auth" in Ix's lecture - https://learning.flatironschool.com/courses/4552/pages/video-authorization-client?module_item_id=346181
    .then(res => {
      if(res.ok) {
        res.json().then(user => setCurrentUser(user))
      }
    })
  }, [])

  // set pets
  useEffect(() => {
    fetch("/pets")
    .then(r=>r.json())
    .then(pets => setPets(pets))
  }, [])
  // set applications
  useEffect(() => {
    fetch("/applications")
    .then(r=>r.json())
    .then(apps => setApplications(apps))
  }, [])

  // if there is no current user, direct user to this component
  // if(!currentUser) return <Home />

  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          <HomeNavBar currentUser={currentUser}/>
          <Home />
        </Route>
        <Route exact path="/adoptablepets">
          <HomeNavBar currentUser={currentUser}/>
          <AdoptablePets pets={pets}/>
        </Route>
        <Route exact path="/homeportal">
          <HomeNavBar currentUser={currentUser}/>
          <Portal />
        </Route>
        <Route exact path="/homeportal/login">
          <HomeNavBar currentUser={currentUser}/>
          {/* how check user's type to render correct portal? */}
          <Login />
        </Route>
        <Route exact path="/homeportal/signup">
          <HomeNavBar currentUser={currentUser}/>
          {/* need to only render applicant portal after signup. Fosters/Admins will only render when user is created by admin. */}
          <ApplicantSignUp setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path="/applicantportal/applications">
          <ApplicantNavBar currentUser={currentUser}/>
          <ApplicantPortal currentUser={currentUser}/>
        </Route>
        <Route exact path="/applicantportal/adoptablepets">
          <ApplicantNavBar currentUser={currentUser}/>
          <AdoptablePets pets={pets}/>
        </Route>
      </Switch>
      {/* ensures footer always shows at bottom of page */}
      <Footer />
    </div>
  );
}

export default App;
