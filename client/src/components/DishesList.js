import React from 'react';
import DishCard from "./DishCard"
import { useState, useEffect } from "react"

function DishesList({ dishes, setDishes, reviews, setReviews, search, handleNewReview}) {
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/users")
          .then((resp) => resp.json())
          .then((data) => setUsers(data));
      }, []);
      

    const filterDishes = () => {
        return dishes.filter((dish) =>
        dish.name.toLowerCase().includes(search.toLowerCase())
        || dish.cuisine.toLowerCase().includes(search.toLowerCase()))
    }
    const displayDishes = filterDishes().map((dish, index) => {
        return (
            <DishCard
            users={users}
            setUsers={setUsers}
            dish={dish}
            key={index}
            reviews={reviews.filter( review => dish.id === review.dish_id )}
            handleNewReview={handleNewReview}
            />
        )
    })
    return (
        <ul className="dish-list">
            {displayDishes}
        </ul>
    )
}

export default DishesList;