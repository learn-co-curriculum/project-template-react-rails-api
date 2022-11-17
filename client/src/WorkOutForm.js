import { useState } from "react"

function WorkOutForm() {
    //SEO's API KEY CHANGE WITH YOURS!
    //DON'T USE MINE
    const apiKey = "ErjjhwAdbIlQLzPZu5SUyg==VofMpxvT9NyOnEXZ"
    const [currentWorkOutType, setCurrentWorkOutType] = useState("")
    const [currentMuscleGroup, setCurrentMuscleGroup] = useState("")
    const [currentDifficulty, setCurrentDifficulty] = useState("")
    const [listOfWorkOuts, setListOfWorkOuts] = useState([])

    const changeWorkOutType = (newWorkOut) => {
        setCurrentWorkOutType(newWorkOut)
        console.log(newWorkOut)
    }

    const changeMuscleGroup = (newMuscleGroup) => {
        setCurrentMuscleGroup(newMuscleGroup)
        console.log(newMuscleGroup)

    }

    const changeDifficulty = (newDifficulty) => {
        setCurrentDifficulty(newDifficulty)
        console.log(newDifficulty)
    }

    function callWorkOutApi(event) {

        event.preventDefault()
        const nameParam = event.target.name.value
        console.log(event.target)
        const workoutParam = `&type=${currentWorkOutType}`
        const muscleParam = `&muscle=${currentMuscleGroup}`
        const difficultyParam = `&difficulty=${currentDifficulty}`
        const apiURL = `https://api.api-ninjas.com/v1/exercises?name=${nameParam}`
        const fullApiURL = apiURL + workoutParam + muscleParam + difficultyParam
        console.log(fullApiURL)
        if (nameParam) {
            fetch(fullApiURL, {
                method: "GET",
                headers: { 'X-Api-Key': apiKey },
                contentType: 'application/json',
            })
                .then(res => res.json())
                .then(setListOfWorkOuts)
        } else {
            alert("Please Enter a Search Term!")
        }
    }

    const workOutListFromAPI = listOfWorkOuts.map((workouts) => {
        return (
            <div className="workOutsFromAPI">
                <div className="workOutsINFO" key={workouts.id} id={workouts.id}>
                    <h4>{workouts.name}</h4>
                    <h5>{workouts.equipment}</h5>
                    <p>Level: {workouts.difficulty}</p>
                    <p>Target Muscle Group: {workouts.muscle}</p>
                    <button>Add Workout to Calendar</button>
                </div>
            </div>
        )
    })

    return (
        <div className="workouts-form">
            <form id="workouts-form" onSubmit={callWorkOutApi}>
                <label htmlFor="workoutSearch">Search</label>
                <input type="text" id="workoutSearch" name="name" />
                <div>
                    <label htmlFor="work-out-type">Type</label>
                    <select id="work-out-type-select" onChange={(event) => changeWorkOutType(event.target.value)} value={currentWorkOutType}>
                        <option value="cardio">Cardio</option>
                        <option value="olympic_weightlifting">Olympic Weight Lifting</option>
                        <option value="plyometrics">Plyometrics</option>
                        <option value="powerlifting">Powerlifting</option>
                        <option value="strength">Strength</option>
                        <option value="stretching">Stretching</option>
                        <option value="strongman">Strongman</option>
                    </select>
                    <label htmlFor="muscle-type">What muscle-group would you like to target?</label>
                    <select id="muscle-group" onChange={(event) => changeMuscleGroup(event.target.value)} value={currentMuscleGroup}>
                        <option value="abdominal">Abdominal</option>
                        <option value="abductor">Abductor</option>
                        <option value="adductor">Adductor</option>
                        <option value="biceps">Biceps</option>
                        <option value="calves">Calves</option>
                        <option value="chest">Chest</option>
                        <option value="forearms">Forearms</option>
                        <option value="glutes">Glutes</option>
                        <option value="hamstrings">Hamstrings</option>
                        <option value="lats">Lats</option>
                        <option value="lower Back">Lower Back</option>
                        <option value="middle Back">Middle Back</option>
                        <option value="neck">Neck</option>
                        <option value="quadriceps">Quadriceps</option>
                        <option value="traps">Traps</option>
                        <option value="triceps">Triceps</option>
                    </select>
                    <label htmlFor="difficulty-option">Choose Difficulty</label>
                    <select id="difficulty" onChange={(event) => changeDifficulty(event.target.value)} value={currentDifficulty}>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="expert">Expert</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
            {workOutListFromAPI}
        </div>
    )
}

export default WorkOutForm;