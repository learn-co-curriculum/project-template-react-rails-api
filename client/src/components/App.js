import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from "./NavBar"
import SignUp from "./SignUp";
import Login from "./Login"
import AppointmentList from "./AppointmentList";
import AppointmentDetails from "./AppointmentDetails";
import CreateAppointment from "./CreateAppointment";
import EditAppointment from "./EditAppointment";

export const TIMES = ['8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30', '12:00', '12:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30']

export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

const App = () => {
  const [ currentPatient, setCurrentPatient ] = useState("");
  const [appointments, setAppointments] = useState([])

  useEffect( () => {
    fetch(`/auto-login`)
    .then((r) => {
      if (r.ok) {
        r.json().then((patient) => setCurrentPatient(patient))
      }
    })
  }, [])

  const updatePatient = (patient) => setCurrentPatient(patient)

  const history = useHistory()

  const addNewAppointment = (newAppt) => {
		setAppointments(oldAppts => [...oldAppts, newAppt])
	}

  return (
    <div>
      FFS WORK!
      <NavBar
        updatePatient = {updatePatient}
        currentPatient = {currentPatient}
      />

      {/* {currentPatient ? history.push('/appointments') : history.push('/login')} */}
      <Switch>        
        <Route exact path = "/appointments">
          <AppointmentList setAppointments={setAppointments} appointments= { appointments } />
        </Route> 
        <Route exact path = "/login">
          <Login updatePatient = {updatePatient}/>
        </Route>
        <Route exact path = "/signup">
          <SignUp />
        </Route>
        <Route exact path = "/appointments/create">
          <CreateAppointment addNewAppointment={addNewAppointment}/>
        </Route>
        <Route exact path = "/appointments/:id">
          <AppointmentDetails />
        </Route>
        <Route exact path = "/edit-appointment">
          <EditAppointment />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
