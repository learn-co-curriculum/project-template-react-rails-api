import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar"
import SignUp from "./SignUp";
import Login from "./Login"
import AppointmentList from "./AppointmentList";
import AppointmentDetails from "./AppointmentDetails";
import CreateAppointment from "./CreateAppointment";
import EditAppointment from "./EditAppointment";
import CreateProvider from "./CreateProvider";
import ProviderList from "./ProviderList";

import GlobalStyles from "../GlobalStyles.style";
import MainGrid from "../styles/Grid.style";

export const TIMES = ['8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30', '12:00', '12:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30']

export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

const App = () => {
  const [ currentUser, setCurrentUser ] = useState("");
  const [appointments, setAppointments] = useState([])

  console.log(currentUser)

  useEffect( () => {
    fetch(`/auto-login`)
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user))
      }
    })
  }, [])

  const updateUser = (user) => setCurrentUser(user)

  const addNewAppointment = (newAppt) => {
		setAppointments(oldAppts => [...oldAppts, newAppt])
	}

  const updateAppointment = (updatedAppt) => {
    const newAppts = appointments.map(appt => appt.id === updatedAppt.id? updatedAppt : appt)
    setAppointments(newAppts)
  }

  const deleteAppointment = (deletedApptId) => {
    setAppointments(oldAppts => oldAppts.filter(appt => !(appt.id === deletedApptId)))
  }

  return (
    <MainGrid>
      <GlobalStyles />
      <NavBar
        updateUser = {updateUser}
        currentUser = {currentUser}
      />
      <Switch>        
        <Route exact path = "/appointments">
          <AppointmentList 
            setAppointments={setAppointments} 
            appointments= {appointments}
            currentUser= {currentUser}
          />
        </Route> 
        <Route exact path = "/login">
          <Login updateUser = {updateUser}/>
        </Route>
        <Route exact path = "/signup">
          <SignUp />
        </Route>
        <Route exact path = "/appointments/create">
          <CreateAppointment addNewAppointment={addNewAppointment}/>
        </Route>
        <Route exact path = "/appointments/:id">
          <AppointmentDetails deleteAppointment = {deleteAppointment}/>
        </Route>
        <Route exact path = "/appointments/:id/edit">
          <EditAppointment updateAppointment = {updateAppointment}/>
        </Route>
        <Route exact path = "/providers">
          <ProviderList />
        </Route>
        <Route exact path = "/providers/create">
          <CreateProvider/>
        </Route>
      </Switch>
    </MainGrid>
  );
}

export default App;
