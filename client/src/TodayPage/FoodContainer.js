import React,{useEffect} from "react";
import FoodElement from "./FoodElement";

const FoodContainer = ({foodList, setFoodList}) => { 
    
    return (
        <div>
            {foodList.map(food => {
                return (
                    <FoodElement 
                        className="food-container" 
                        key={food.id}
                        name={food.name} 
                        weight={food.weight} 
                        calories={food.calories} 
                        id={food.id}
                        setFoodList={setFoodList}
                        foodList={foodList}
                    />
                )
            })}
        </div>
    )
}

export default FoodContainer