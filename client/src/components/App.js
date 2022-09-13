import { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from "./NavBar"
import Login from "./Login"
import AppointmentList from "./AppointmentList";
import SignUp from "./SignUp";

const App = () => {
  const [ currentPatient, setCurrentPatient ] = useState("");

  const updatePatient = (patient) => setCurrentPatient(patient)

  const history = useHistory()

  return (
    <div>
      FFS WORK!
      <NavBar
        updatePatient = {updatePatient}
        currentPatient = {currentPatient}
      />

      {currentPatient ? history.push('/appointments') : history.push('/login')}
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
      </Switch>
    </div>
  );
}

export default App;
