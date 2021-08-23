import React from 'react';

function DishesList({ dishes, setDishes, reviews, setReviews, search, handleNewReview}) {
    const filterDishes = () => {
        return dishes.filter((dish) =>
        dish.name.toLowerCase().includes(search.toLowerCase())
        || dish.cuisine.toLowerCase().includes(search.toLowerCase()))
    }
    const displayDishes = filterDishes().map((dishes, index) => {
        return (
            <Dish
            key={index}
            dish={dish}
            reivews={reviews.filter( review => dish.id === review.dish_id )}
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