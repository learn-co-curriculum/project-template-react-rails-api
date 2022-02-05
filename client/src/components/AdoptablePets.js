import React from 'react';
import Pet from "./Pet";

export default function AdoptablePets({ currentUser, pets }) {
  // console.log("PETS NEEDING HOMES", pets)
  return (
    <div id="adoptable_pets">
      {
        pets.map(p => (
          <Pet key={p.id} pet={p} currentUser={currentUser}/>
        ))
      }
    </div>
  )
}