import React from 'react'

function Restaurant({restaurant}){
    console.log(restaurant.menu)
    const menuItems = restaurant.menu.map(m =>{
        return(
            <div key = {m.id}>
                <img src = {m.image} alt = {m.name}></img>
                <p>ksh.{m.price}</p>
            </div>
        )
    }) 
    return(
        <div key = {restaurant.id}>
            <p>{restaurant.name}</p>
            {menuItems}
            <p>{restaurant.location}</p>
            <p>{restaurant.review}</p>


        </div>
    )

}

export default Restaurant;