import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";


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
