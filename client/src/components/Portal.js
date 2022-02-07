import React from 'react';
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import ApplicantSignUp from "./ApplicantSignUp";

export default function Portal({setCurrentUser, setPortal, currentUserID, setCurrentUserID, setCurrentApplicantID}) {
  
  return (
    <div id="portal">
      <Switch>
        <Route exact path='/homeportal/'>
          <ApplicantSignUp setCurrentUser={setCurrentUser} setPortal={setPortal} currentUserID={currentUserID} setCurrentUserID={setCurrentUserID} setCurrentApplicantID={setCurrentApplicantID}/>
        </Route>
        <Route path="/homeportal/login">
          <Login setCurrentUser={setCurrentUser} setPortal={setPortal} />
        </Route>
        <Route path="/homeportal/signup">
          <ApplicantSignUp setCurrentUser={setCurrentUser} currentUserID={currentUserID} setCurrentUserID={setCurrentUserID} setCurrentApplicantID={setCurrentApplicantID}/>
        </Route>
      </Switch>
    </div>
  )
}