import React from 'react'

const PlantCard = ({name, image, indoor, pet_safe,state}) => {
  return (
    <div className="plant-card">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{indoor}</p>
      <p>{pet_safe}</p>
      <p>{state}</p>

    </div>
  )
}

export default PlantCard