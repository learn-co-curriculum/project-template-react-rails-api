import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import FosterSignUp from "./FosterSignUp";
import FosterPets from "./FosterPets";

export default function FosterPortal({ 
  setCurrentUser, 
  useres, setUsers,
  portal, setPortal, 
  pets, setPets
}) {

  return (
    <div id="foster_portal">
       <Switch>
          <Route exact path="/fosterportal/signup">
            <FosterSignUp setCurrentUser={setCurrentUser} setPortal={setPortal} />
          </Route>
          <Route exact path="/fosterportal/pets">
            <FosterPets pets={pets} setPets={setPets}/>
          </Route>
        </Switch>
    </div>
  );
}