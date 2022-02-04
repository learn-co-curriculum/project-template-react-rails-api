import React from 'react';
import { Route, Switch } from "react-router-dom";
import Applications from "./Applications"
import AdoptablePets from "./AdoptablePets";

export default function ApplicantPortal({ currentUser, applications, pets }) {
  
  
  return (
    <div id="applicant_portal">
       <Switch>
        <Route exact path='/applicantportal'>
          <Applications />
        </Route>
        <Route path="/applicantportal/adoptablepets">
          <AdoptablePets pets={pets}/>
        </Route>
      </Switch>
    </div>
  )
}