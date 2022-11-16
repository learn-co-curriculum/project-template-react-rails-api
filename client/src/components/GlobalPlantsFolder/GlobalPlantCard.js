import React from 'react'

const GlobalPlantCard = ({name, image,indoor, pet_safe, state, username}) => {
  return (
    <div className="plant-card">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{username}</p>
      <p>{indoor ? "Indoor Plant" : "Outdoor Plant"}</p>
      <p>{pet_safe ? "Pet Safe ✅" : "Unsafe for Pets"}</p>
      <p>Location: {state}</p>

  </div>
  )
}

export default GlobalPlantCard