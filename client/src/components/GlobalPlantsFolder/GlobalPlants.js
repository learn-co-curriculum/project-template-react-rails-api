import React from 'react'
import GlobalPlantsList  from './GlobalPlantsList'

const GlobalPlants = ({plantPosts}) => {
  return (
    <div>
      <h1>Global Plants</h1>
      <GlobalPlantsList
        plantPosts={plantPosts}
      />
    </div>
  )
}

export default GlobalPlants