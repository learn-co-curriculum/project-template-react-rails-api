import React from 'react';
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import ApplicantSignUp from "./ApplicantSignUp";

export default function Portal() {
  
  return (
    <div id="portal">
      THIS IS THE PORTAL COMPONENT
      <Switch>
        <Route exact path='/portal/' component={ApplicantSignUp} />
        <Route path="/portal/login" component={Login} />
        <Route path="/portal/signup" component={ApplicantSignUp} />
      </Switch>

    </div>
  )
}