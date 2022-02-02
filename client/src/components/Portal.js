import React from 'react';
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import ApplicantSignUp from "./ApplicantSignUp";

export default function HomePortal() {
  
  return (
    <div id="portal">
      <Switch>
        <Route exact path='/homeportal/' component={ApplicantSignUp} />
        <Route path="/homeportal/login" component={Login} />
        <Route path="/homeportal/signup" component={ApplicantSignUp} />
      </Switch>
    </div>
  )
}