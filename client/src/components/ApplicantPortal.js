import React from 'react';
import { Route, Switch } from "react-router-dom";
import Applications from "./Applications"
import AdoptablePets from "./AdoptablePets";

export default function ApplicantPortal({ currentUser, applications, setApplications, pets }) {
  return (
    <div id="applicant_portal">
       <Switch>
        <Route exact path='/applicantportal'>
          <Applications currentUser={currentUser} applications={applications}/>
        </Route>
        <Route path="/applicantportal/adoptablepets">
          <AdoptablePets currentUser={currentUser} pets={pets} setApplications={setApplications}/>
        </Route>
      </Switch>
    </div>
  )
}