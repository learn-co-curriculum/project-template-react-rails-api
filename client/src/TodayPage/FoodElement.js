import React from "react";

const FoodElement = ({name, weight, calories, id, setFoodList, foodList}) => {
    const handleDelete = event => {
        fetch(`/foods/${id}`, {method:"DELETE"})
        setFoodList(foodList.filter(food => food.id !== parseInt(event.target.id)))
    }

    return (
        <div id="row">
            <p className="item-1">{name}</p>
            <p className="item-2">{`${weight} grams`}</p>
            <p className="item-3">{`${calories} calories`}</p>
            <button 
                id={id} 
                onClick={handleDelete}
            >Delete Food</button>
        </div>
    )
}

export default FoodElement