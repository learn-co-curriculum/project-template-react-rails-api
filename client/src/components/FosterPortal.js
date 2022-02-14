import React from 'react';
import { Route, Switch } from "react-router-dom";
import FosterSignUp from "./FosterSignUp";
import FosterPets from "./FosterPets";


export default function FosterPortal({ 
  currentUser, setCurrentUser, 
  users, setUsers,
  portal, setPortal, 
  pets, setPets
}) {

  return (
    <div id="foster_portal">
      <Switch>
        <Route exact path="/fosterportal">
          <FosterPortal 
            currentUser={currentUser} setCurrentUser={setCurrentUser} 
            users={users} setUsers={setUsers}
            portal={portal} setPortal={setPortal} 
            pets={pets} setPets={setPets}
          />
        </Route>
        <Route exact path="/fosterportal/pets">
          <FosterPets currentUser={currentUser} pets={pets} setPets={setPets}/>
        </Route>
        <Route exact path="/fosterportal/signup">
          <FosterSignUp setCurrentUser={setCurrentUser} setPortal={setPortal} />
        </Route>
      </Switch> 
    </div>
  );
}