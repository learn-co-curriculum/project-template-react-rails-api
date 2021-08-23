import React from "react";

function Dish ({ id, name, cuisine, price, image_url, restaurant_name, city_name, reviews, users, setUsers }) {

    return (
        <div>
            <h3>{name}</h3>
            <img src={image_url} />
        </div>
    )
}
export default Dish;