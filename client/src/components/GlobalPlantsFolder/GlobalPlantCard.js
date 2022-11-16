import React from 'react'

const GlobalPlantCard = ({name, image,indoor, pet_safe, state, username}) => {
  return (
    <div className="plant-card">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{username}</p>
      <p>{indoor}</p>
      <p>{pet_safe}</p>
      <p>{state}</p>

  </div>
  )
}

export default GlobalPlantCard