import React from "react";
import FoodCard from "./FoodCard";
import ExerciseCard from "./ExerciseCard";

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

    const todaysFood = dayData.filter(day => day.calories)
    const foodElements = todaysFood.map(food => {
        return <FoodCard 
                    name={food.name} 
                    weight={food.weight} 
                    calories={food.calories}
                />
    })
    
    const todaysExercises = dayData.filter(day => day.calories_burnt)
    const exerciseElements = todaysExercises.map(exercise => {
        return <ExerciseCard 
                    name={exercise.name} 
                    duration={exercise.duration} 
                    calories_burnt={exercise.calories_burnt}
                />
    })

    return (
        <div id="big-div">
            <h2 id="day-title">{dayData[0].created_at.slice(0,10)}</h2>
            <div className="calorie-info">
                <p>{`Calories Consumed: ${calories_consumed}`}</p>
                <p>{`Calories Burnt: ${calories_burnt}`}</p>
                <p>{`Net Calories: ${calories_consumed - calories_burnt}`}</p>
            </div>


            <div id="smaller-container">
                <div id="exercise-div">
                    <p className="item-head">Exercises</p>
                    {exerciseElements}
                </div>

                <div id="food-div">
                    <p className="item-head">Foods</p>
                    {foodElements}
                </div>
            </div>
        </div>
    )
}

export default HistoryCard;