import React from "react";

function Dish ({ id, name, cuisine, price, image_url, restaurant_name, city_name, reviews, users, setUsers }) {

    return (
        <div>
            <h2>{name}</h2>
            <h2>{restaurant_name}</h2>
            <h3>${price}</h3>
            <h4>{cuisine}</h4>
            <img src={image_url} />
            <h5>Location: {city_name}</h5>
            <p>{reviews}</p>
            
        </div>
    )
}
export default Dish;