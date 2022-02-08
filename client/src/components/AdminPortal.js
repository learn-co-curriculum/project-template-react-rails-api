import React from 'react';
import { Route, Switch } from "react-router-dom";
import AdminSignUp from "./AdminSignUp";
import AdminPets from "./AdminPets";
import AdminApplicants from "./AdminApplicants";
import AdminFosters from "./AdminFosters";
import AdminApplications from "./AdminApplications";

export default function AdminPortal({ 
  setCurrentUser, 
  setPortal,
  pets, setPets,
  users, setUsers,
  fosters, setFosters,
  applicants,setApplicants,
  applications,setApplications
 }) {
  return (
    <div id="admin_portal">
       <Switch>
          <Route exact path="/adminportal/">
            {/* <AdminPortal
              pets={pets} setPets={setPets} 
              users={users} setUsers={setUsers}
              fosters={fosters} setFosters={setFosters}
              applicants={applicants} set={setApplicants}
              applications={applications} setApplications={setApplications}
            /> */}
             <AdminApplications applications={applications} setApplications={setApplications}/>
          </Route>
          <Route exact path="/adminportal/signup">
            <AdminSignUp setCurrentUser={setCurrentUser} setPortal={setPortal} />
          </Route>
          <Route exact path="/adminportal/pets">
            <AdminPets pets={pets} setApplications={setApplications}/>
          </Route>
          <Route exact path="/adminportal/applications">
            <AdminApplications applications={applications} setApplications={setApplications}/>
          </Route>
          <Route exact path="/adminportal/applicants">
            <AdminApplicants pets={pets} applicants={applicants} setApplicants={setApplicants}/>
          </Route>
          <Route exact path="/adminportal/fosters">
            <AdminFosters fosters={fosters} setFosters={setFosters}/>
          </Route>
        </Switch>
    </div>
  )
}