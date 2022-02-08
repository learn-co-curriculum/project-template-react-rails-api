import React from 'react';
import { Route, Switch } from "react-router-dom";
import AdminPets from "./AdminPets";
import AdminApplications from "./AdminApplications";

export default function AdminPortal({ 
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
          <AdminPortal 
              pets={pets} setPets={setPets} 
              users={users} setUsers={setUsers}
              fosters={fosters} setFosters={setFosters}
              applicants={applicants} set={setApplicants}
              applications={applications} setApplications={setApplications}
            />
        </Route>
        <Route path="/adminportal/pets">
          <AdminPets pets={pets} setApplications={setApplications}/>
        </Route>
        <Route exact path="/adminportal/applications">
            <AdminApplications pets={pets} applicants={applicants} setApplicants={setApplicants}/>
          </Route>
        <Route path="/adminportal/fosters">
          <div></div>
        </Route>
      </Switch>
    </div>
  )
}