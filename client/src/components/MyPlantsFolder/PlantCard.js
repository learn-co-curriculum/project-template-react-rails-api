import React from 'react'

const PlantCard = ({name, image, indoor, pet_safe,state}) => {
  console.log("indoor", indoor)
  
  return (
    <div className="plant-card">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{indoor ? "Indoor Plant" : "Outdoor Plant"}</p>
      <p>{pet_safe ? "Pet Safe ✅" : "Unsafe for Pets"}</p>
      <p>Location: {state} </p>
    </div>
  )
}

export default PlantCard