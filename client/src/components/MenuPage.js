import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function MenuPage ({restaurants}) {
    const {restaurantId} = useParams()
    const restaurant = restaurants.find((restaurant) => restaurant.id === parseInt(restaurantId))
    const {menu_items} = restaurant
    const singleMenuItem = menu_items.map((item) => (
         <div> 
             <p>{item.name}</p> 
             <p>{item.description}</p> 
             <p>${item.price}</p> 
             <img src={item.image_url} alt={item.name}></img>  
        </div>
    ))



    return(
        <div>
            <div>{singleMenuItem}</div>
            <div>Hi from menu page</div>
        </div>
    )
}

export default MenuPage