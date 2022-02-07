import React from 'react';
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import ApplicantSignUp from "./ApplicantSignUp";

export default function Portal({setCurrentUser, setPortal}) {
  
  return (
    <div id="portal">
      <Switch>
        <Route exact path='/homeportal/'>
          <ApplicantSignUp setCurrentUser={setCurrentUser} setPortal={setPortal}/>
        </Route>
        <Route path="/homeportal/login">
          <Login setCurrentUser={setCurrentUser} setPortal={setPortal} />
        </Route>
        <Route path="/homeportal/signup">
          <ApplicantSignUp setCurrentUser={setCurrentUser} setPortal={setPortal}/>
        </Route>
      </Switch>
    </div>
  )
}