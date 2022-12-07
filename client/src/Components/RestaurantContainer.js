import React from 'react'
import { useState, useEffect } from 'react'
import Restaurant from './Restaurant'

function RestaurantContainer(){
const[restaurantsData, setRestaurantsData ] = useState([])
    useEffect(()=>{
        fetch ('http://localhost:3000/restaurants')
        .then(resp => resp.json())
        .then(data => setRestaurantsData(data))
     }, [])
    const restaurantsList = restaurantsData.map(r => {
        return(
            <Restaurant restaurant = {r} />
        )
    })
    return(
        <div>
            {restaurantsList}

        </div>
    )
}
export default RestaurantContainer;
