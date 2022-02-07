import React from 'react';
import { Route, Switch } from "react-router-dom";
import AdminPets from "./AdminPets";

export default function AdminPortal({ currentUser, applications, setApplications, pets }) {
  return (
    <div id="admin_portal">
       <Switch>
        <Route exact path='/adminportal'>

        </Route>
        <Route path="/adminportal/pets">
          <AdminPets currentUser={currentUser} pets={pets} setApplications={setApplications}/>
        </Route>
        <Route path="/adminportal/applicants">
          <div></div>
        </Route>
        <Route path="/adminportal/fosters">
          <div></div>
        </Route>
      </Switch>
    </div>
  )
}