import React from "react"
import Noodle from "./Noodle"

function NoodleCard ({noodle, reviews, handleNewReviews}) {

    return (
        <Noodle 
        id={noodle.id}
        name={noodle.name}
        cuisine={noodle.cuisine}
        price={noodle.price}
        image_url={noodle.image_url}
        restaurant_name={noodle.restaurant_name}
        city_name={noodle.city_name}
        handleNewReviews={handleNewReviews}
        reviews={reviews}
        />
    )
}

export default NoodleCard;