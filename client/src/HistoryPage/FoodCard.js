import React from "react";

const FoodCard = ({name, weight, calories}) => {
    return (
        <div className="item-elements">
            <p>{name}</p>
            <p>{`${weight} grams`}</p>
            <p>{`${calories} calories`}</p>
        </div>
    )
}

export default FoodCard