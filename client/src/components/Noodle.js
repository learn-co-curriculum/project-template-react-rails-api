import React from "react"

function Noodle ({id, name, cuisine, price, image_url, restaurant_name, city_name, handleNewReviews, reviews}) {

    return (
        <div>
            <h1>{name}</h1>
            <h2>{cuisine}</h2>
            <img src={image_url}/>
            <h3>{price}</h3>
            <h3>{restaurant_name}</h3>
            <h3>{city_name}</h3>
        </div>
    )
}

export default Noodle;