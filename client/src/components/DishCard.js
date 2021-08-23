import { useState } from "react";
import Dish from "./Dish"

function DishCard ({ users,  setUsers, setReviews, reviews, handleNewReviews, dish }) {

return (
    <Dish 
    id={dish.id}
    name={dish.name}
    cuisine={dish.cuisine}
    price={dish.price}
    image_url={dish.image_url}
    restaurant_name={dish.rtaurant_name}
    city_name={dish.city_name}
    reviews={reviews}
    users={users}
    setUsers={setUsers}
    />
)
}



export default DishCard;