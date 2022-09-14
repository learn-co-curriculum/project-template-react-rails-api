import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from "./NavBar"
import SignUp from "./SignUp";
import Login from "./Login"
import AppointmentList from "./AppointmentList";
import AppointmentDetails from "./AppointmentDetails";
import CreateAppointment from "./CreateAppointment";
import EditAppointment from "./EditAppointment";

const App = () => {
  const [ currentPatient, setCurrentPatient ] = useState("");

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

  console.log(currentPatient)

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
          <AppointmentList />
        </Route> 
        <Route exact path = "/login">
          <Login updatePatient = {updatePatient}/>
        </Route>
        <Route exact path = "/signup">
          <SignUp />
        </Route>
        <Route exact path = "/appointments/create">
          <CreateAppointment />
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
