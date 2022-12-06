import React from "react"

const AddExerciseForm = ({userId, setExerciseList, exerciseList, setShowAdd}) => {
    const onSubmitExercise = event => {
        event.preventDefault()
        
        const exerciseObj = {name:event.target[0].value, duration:parseInt(event.target[1].value), calories_burnt:parseInt(event.target[2].value), user_id:userId}
        console.log(exerciseObj)

        fetch("/exercises", {
            method: "POST",
            headers: {"Content-Type":"Application/json"},
            body: JSON.stringify(exerciseObj)
        })
        .then(resp => resp.json())
        .then(createdObject => {
            setExerciseList([...exerciseList,createdObject])
            setShowAdd(false)
        })
    }
    return (
        <div id="add">
            <button onClick={() => setShowAdd(false)}>X</button>
            <form onSubmit={onSubmitExercise}>
                <input type="text" name="name" placeholder="Exercise"/>
                <br/>
                <input type="text" name="duration" placeholder="duration (min)"/>
                <br/>
                <input type="text" name="calories" placeholder="calories (kcal)"/>
                <br/>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default AddExerciseForm