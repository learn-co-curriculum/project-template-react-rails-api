import React from "react";

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
      <NavLink to="/SpAbilites">
        <SpAbilites />
      </NavLink>
      <br></br>
      <NavLink to="/Spells">
        <Spells />
      </NavLink>
      <br></br>
    </div>
  );
}
