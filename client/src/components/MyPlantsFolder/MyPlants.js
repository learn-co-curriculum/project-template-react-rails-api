import React, {useEffect, useState} from 'react'
import PlantList from "./PlantList"

const MyPlants = ({user}) => {
  const [search, setSearch]=useState("")
  const userPosts= user.plant_posts
  
  // Filter logic for plant cards: filter by description/user notes if we add that to the database
  // const filterMyPlantCards = myPlantCards.filter((myPlantCard) => {
  //   if (myPlantCard.plant_name.toLowerCase().includes(search.toLowerCase())){
  //     return true
  //   } else if (myPlantCard.state.toLowerCase().includes(search.toLowerCase())){
  //     return true
  //   } else return false
  // })

  return (
    <div>
      <h1>MyPlants</h1>
      <PlantList
        userPosts={userPosts}
        // filterMyPlantCards={filterMyPlantCards} 
      />
    </div>
  )
}

export default MyPlants