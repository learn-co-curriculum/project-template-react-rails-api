import React from 'react';
import { Route, Switch } from "react-router-dom";
import AdminPets from "./AdminPets";
import AdminApplicants from "./AdminApplicants";
import AdminFosters from "./AdminFosters";
import AdminApplications from "./AdminApplications";

export default function AdminPortal({ 
  setCurrentUser, 
  portal,setPortal,
  pets, setPets,
  petFosters, setPetFosters,
  users, setUsers,
  fosters, setFosters,
  applicants, setApplicants,
  applications, setApplications
 }) {
  return (
    <div id="admin_portal">
       <Switch>
          <Route exact path="/adminportal/pets">
            <AdminPets pets={pets} setPets={setPets} fosters={fosters} setFosters={setFosters} petFosters={petFosters} setPetFosters={setPetFosters}/>
          </Route>
          <Route exact path="/adminportal/applications">
            <AdminApplications applications={applications} setApplications={setApplications}/>
          </Route>
          <Route exact path="/adminportal/applicants">
            <AdminApplicants pets={pets} applicants={applicants} setApplicants={setApplicants}/>
          </Route>
          <Route exact path="/adminportal/fosters">
            <AdminFosters fosters={fosters} setFosters={setFosters} pets={pets} setPets={setPets} petFosters={petFosters} setPetFosters={setPetFosters} />
          </Route>
        </Switch>
    </div>
  )
}