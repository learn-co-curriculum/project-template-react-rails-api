import React from "react";
import { NavLink } from "react-router-dom";
import Character from "./Character";
import Equipment from "./Equipment";
import HomePage from "./Homepage";
import Minions from "./Minions";
import NewCharacterForm from "./NewCharacterForm";
import Outfits from "./Outfits";
import Spells from "./Spells";

function NavBar() {
  return (
    <div class="navbar">
      <NavLink to="/Character">
        <Character />
      </NavLink>
      <br></br>
      <NavLink to="/NewCharacterForm">
        <NewCharacterForm />
      </NavLink>
      <br></br>
      <NavLink to="/Equipment">
        <Equipment />
      </NavLink>
      <br></br>
      <NavLink to="/HomePage">
        <HomePage />
      </NavLink>
      <br></br>
      <NavLink to="/Minions">
        <Minions />
      </NavLink>
      <br></br>
      <NavLink to="/Outfits">
        <Outfits />
      </NavLink>
      <br></br>
      <NavLink to="/Spells">
        <Spells />
      </NavLink>
      <br></br>
    </div>
  );
}

export default NavBar;
