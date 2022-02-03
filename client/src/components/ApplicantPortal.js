import React from 'react';
import { Route, Switch } from "react-router-dom";
import Applications from "./Applications"
import AdoptablePets from "./AdoptablePets";

export default function ApplicantPortal() {
  
  return (
    <div id="portal">
      APPLICANT PORTAL
      <Switch>
        <Route exact path='/applicantportal/' component={Applications} />
        <Route path="/applicantportal/adoptablepets" component={AdoptablePets} />
        {/* <Route path="/applicantportal/meetups" component={ApplicantMeetUps} /> */}
      </Switch>
    </div>
  )
}