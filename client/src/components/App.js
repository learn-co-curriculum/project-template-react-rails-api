import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import logo from '../logo.svg';
import '../App.css';

import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import Profile from "./Profile";
import ScheduleForm from "./ScheduleForm";
import DoctorList from "./DoctorList";
import PatientList from "./PatientList";
import UpcomingAppointmentList from "./UpcomingAppointmentList";
import PastAppointmentList from "./PastAppointmentList";
import IntakeForm from "./IntakeForm";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route path="/profile">
            <Profile user={user} />
          </Route>
          <Route path="/schedule">
            <ScheduleForm user={user} />
          </Route>
          <Route path="/my-doctors">
            <DoctorList user={user} />
          </Route>
          <Route path="/my-patients">
            <PatientList user={user} />
          </Route>
          <Route exact path="/intakes">
            <UpcomingAppointmentList user={user} />
          </Route>
          <Route path="/intakes/:id">
            <IntakeForm user={user} />
          </Route>
          <Route path="/past-appointments">
            <PastAppointmentList user={user} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
