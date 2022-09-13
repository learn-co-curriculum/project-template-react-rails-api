import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Navbar"
import Login from "./Login"
import AppointmentList from "./AppointmentList";

const App = () => {
  const [ currentPatient, setCurrentPatient ] = useState("");

  const updatePatient = (patient) => setCurrentPatient(patient)

  return (
    <div>
      <NavBar
        updatePatient = {updatePatient}
        currentPatient = {currentPatient}
      />
      <Routes>
       {currentPatient ? 
       <Route path = "/appointments">
        <AppointmentList />
       </Route> :
        <Route path = "/login">
          <Login />
        </Route> 
        }   
      </Routes>
    </div>
  );
}

export default App;
