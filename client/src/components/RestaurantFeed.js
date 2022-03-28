import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import MenuPage from "./MenuPage";
import { Switch, Route } from "react-router-dom";


function RestaurantFeed () {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        fetch("/restaurants")
      .then((r) => r.json())
      .then(setRestaurants)
     }, [])

     console.log(restaurants)
    
        return(
            
            <>
                <div>
                    {restaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
                    ))}
                </div>
            </>
        )

}

export default RestaurantFeed
