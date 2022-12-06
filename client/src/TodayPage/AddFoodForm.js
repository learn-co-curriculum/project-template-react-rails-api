import React from "react"

const AddFoodForm = ({userId, setFoodList, foodList, setShowAdd}) => {
    const onSubmitFood = event => {
        event.preventDefault()
        
        const foodObj = {name:event.target[0].value, weight:parseInt(event.target[1].value), calories:parseInt(event.target[2].value), user_id:userId}
        
        fetch("/foods", {
            method: "POST",
            headers: {"Content-Type":"Application/json"},
            body: JSON.stringify(foodObj)
        })
        .then(resp => resp.json())
        .then(createdObject => {
            setFoodList([...foodList,createdObject])
            setShowAdd(false)
        })
    }
    return (
        <div id="add">
            <button onClick={() => setShowAdd(false)}>X</button>
            <form onSubmit={onSubmitFood}>
                <input type="text" name="name" placeholder="Food"/>
                <br/>
                <input type="text" name="weight" placeholder="weight (g)"/>
                <br/>
                <input type="text" name="calories" placeholder="calories (kcal)"/>
                <br/>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default AddFoodForm