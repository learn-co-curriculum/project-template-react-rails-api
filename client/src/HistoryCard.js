import React from "react";

const HistoryCard = ({dayData}) => {

    const calories_burnt = dayData.reduce((total, current) => {
        if (current.calories_burnt)
            return total + current.calories_burnt
        else return total
    }, 0)

    const calories_consumed = dayData.reduce((total, current) => {
        if (current.calories)
            return total + current.calories
        else return total
    }, 0)

    const FoodCard = ({name, weight, calories}) => {
        return (
            <div>
                <p className="item-1">{name}</p>
                <p className="item-2">{`${weight} grams`}</p>
                <p className="item-3">{`${calories} calories`}</p>
            </div>
        )
    }

    const ExerciseCard = () => {
        return ( 
            <></>
        )
    }
    const todaysFood = dayData.filter(day => day.calories)
    const foodElements = todaysFood.map(food => <FoodCard name={food.name} weight={food.weight} calories={food.calories}/>)



    return (
        <>
            <h2 id={"title"}>{dayData[0].created_at.slice(0,10)}</h2>
            <div className="calorie-info">
                <p>{`Calories Consumed: ${calories_consumed}`}</p>
                <p>{`Calories Burnt: ${calories_burnt}`}</p>
                <p>{`Net Calories: ${calories_consumed - calories_burnt}`}</p>
            </div>


            <div id="smaller-container">
                <div id="exercise-div">
                    <p className="item-header">Exercises</p>
                </div>

                <div id="food-div">
                    <p className="item-header">Foods</p>
                    {foodElements}
                </div>
            </div>
        </>
    )
}

export default HistoryCard;