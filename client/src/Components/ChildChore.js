import React from 'react'
import {Wrapper} from './StyledComponentElements'

const Chore = ({child_chore, allChildChores, setAllChildChores}) => {

    function handleComplete(event){
        event.preventDefault()
        fetch(`child_chores/${child_chore.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                is_completed : !child_chore.is_completed
            })
        })
        .then(response => response.json())
        .then(data => {
            const updatedChildChores = allChildChores.map((childChore) => {
                if (childChore.id === data.id) {
                  return { ...childChore, is_completed: data.is_completed };
                } else {
                  return childChore;
                }})
                setAllChildChores(updatedChildChores)
            })
    }

    function handleChildChoreDelete(event){
        event.preventDefault()
        fetch(`/child_chores/${child_chore.id}`, {
            method: "DELETE"
        })
        const updatedChildChores = allChildChores.filter((childChore) => childChore.id !== child_chore.id);
        setAllChildChores(updatedChildChores)
    }
    
    return (
        <div>
            <h3>{child_chore.chore.chore_name}</h3>
            <h3>{child_chore.chore.description}</h3>
            <h4>{child_chore.time_to_complete}</h4>
            <h5>{child_chore.reward}</h5>
            {child_chore.is_completed ? <h5>Completed <span onClick={handleComplete}>✅</span></h5> : <h5>Completed <span onClick={handleComplete}>✖️</span></h5>}
            <button onClick={handleChildChoreDelete}>Remove Chore</button>
        </div>
    )
}

export default Chore
