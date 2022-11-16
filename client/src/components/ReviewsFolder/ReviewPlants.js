import React from 'react'
import ReviewPlantsList from './ReviewPlantsList'

const ReviewPlants = ({ reviews }) => {
 console.log(reviews)
 
  return (
    <div>
      <ReviewPlantsList reviews={reviews}/>
    </div>
  )
}

export default ReviewPlants