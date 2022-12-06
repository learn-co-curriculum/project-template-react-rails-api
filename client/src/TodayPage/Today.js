import React,{useState, useEffect} from "react";
import NavBar from "../NavBar/NavBar.js"
import AddFoodForm from "./AddFoodForm.js";
import AddExerciseForm from "./AddExerciseForm.js";
import FoodContainer from "./FoodContainer.js";
import ExerciseContainer from "./ExerciseContainer.js";
import "./TodayPage.css"


const TodayPage = () => {

    const [calGoal, setCalGoal] = useState(0)
    const [calConsumed, setCalConsumed] = useState(0)
    const [calBurnt, setCalBurnt] = useState(0)
    const [showAddFood, setShowAddFood] = useState(false)
    const [showAddExercise, setShowAddExercise] = useState(false)
    const [userId, setUserId] = useState(null)
    const [foodList, setFoodList] = useState([])
    const [exerciseList, setExerciseList] = useState([])

    useEffect(() => {
        fetch("/me")
        .then(resp => resp.json())
        .then(userData => {
            setCalGoal(userData.calories_goal)
            setUserId(userData.id)
            setFoodList(userData.foods)
            setExerciseList(userData.exercises)
            })
    }, [])
    
    //keeps track of all the calories 
    useEffect(() => {
        setCalConsumed(
            foodList.reduce((sum, current) => sum + current.calories, 0)
        )
        setCalBurnt(
            exerciseList.reduce((sum, current) => sum + current.calories_burnt, 0)
        )
    }, [foodList, exerciseList])

    const addingFoodForm = showAddFood ? <AddFoodForm userId={userId} setFoodList={setFoodList} foodList={foodList} setShowAdd={setShowAddFood}/> : <></>
    const addingExerciseForm = showAddExercise ? <AddExerciseForm userId={userId} setExerciseList={setExerciseList} exerciseList={exerciseList} setShowAdd={setShowAddExercise}/> : <></>

    return (
        <>
            <NavBar/>
            <div className="calories-display">
                <p>Total Calories Goal: {calGoal}</p>
                <p>Calories Consumed: {calConsumed}</p>
                <p>Burnt calories: {calBurnt}</p>
                <p>Calories Left: {calGoal - calConsumed + calBurnt}</p>
            </div>
            

            <div id="main-container">
                <div id="track-food">
                    <p className="item-header">Track Food</p>
                    <FoodContainer foodList={foodList} setFoodList={setFoodList}/>
                    <button className="add-item" onClick={() => setShowAddFood(true)}>Add Food</button>
                    {addingFoodForm}
                </div>

                <div id="track-exercise">
                    <p className="item-header">Track Exercise</p>
                    <ExerciseContainer exerciseList={exerciseList} setExerciseList={setExerciseList} />
                    <button className="add-item" onClick={() => setShowAddExercise(true)}>Add Exercise</button>
                    {addingExerciseForm}
                </div>
            </div>
        </>
    )
}

export default TodayPage