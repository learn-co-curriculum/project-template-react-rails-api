import React from 'react';
import { Route, Switch } from "react-router-dom";
import Applications from "./Applications"
import AdoptablePets from "./AdoptablePets";
import PetApp from "./PetApp";

export default function ApplicantPortal({ currentUser, applications, setApplications, pets }) {
  return (
    <div id="applicant_portal">
       <Switch>
        <Route exact path='/applicantportal'>
          <Applications />
        </Route>
        <Route path="/applicantportal/adoptablepets">
          <PetApp setApplications={setApplications} pets={pets}/>
          <AdoptablePets pets={pets}/>
        </Route>
      </Switch>
    </div>
  )
}