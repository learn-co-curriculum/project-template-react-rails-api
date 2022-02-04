import React from 'react';
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import ApplicantSignUp from "./ApplicantSignUp";

export default function Portal({onLogIn}) {
  
  return (
    <div id="portal">
      <Switch>
        <Route exact path='/homeportal/'>
          <ApplicantSignUp />
        </Route>
        <Route path="/homeportal/login">
          <Login onLogIn={onLogIn}/>
        </Route>
        <Route path="/homeportal/signup">
          <ApplicantSignUp />
        </Route>
      </Switch>
    </div>
  )
}