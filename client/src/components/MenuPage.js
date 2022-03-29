import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MenuItem from "./MenuItem"


function MenuPage ({restaurants}) {
    const {restaurantId} = useParams()
    const restaurant = restaurants.find((restaurant) => restaurant.id === parseInt(restaurantId))
    const {menu_items} = restaurant
    const [menuItems, setMenuItems] = useState(menu_items)

    function handleDeleteItem(id) {
        const updatedItems = menu_items.filter(item => item.id !== id)
        setMenuItems(updatedItems)
    }

    const singleMenuItem = menuItems?.map((item) => (
         <div> 
             <MenuItem item={item} handleDeleteItem={handleDeleteItem}/>
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