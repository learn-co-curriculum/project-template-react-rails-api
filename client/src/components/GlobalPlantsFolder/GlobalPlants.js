import React from 'react'
import GlobalPlantsList  from './GlobalPlantsList'

const GlobalPlants = ({plantPosts, errors}) => {

  return (
    <div>
      <h1>Global Plants</h1>
      <GlobalPlantsList
        plantPosts={plantPosts}
      />

      <h3>
        Sorry we could not load the plant posts. {errors}
      </h3>
      
    </div>
  )
}

export default GlobalPlants