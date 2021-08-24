import React from 'react'
import {ChoreName, ChoreDesc, ChoreDiv, LoginButton} from './StyledComponentElements'
import styled from 'styled-components'

const ChildChore = ({child_chore, allChildChores, setAllChildChores}) => {

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
        <ChoreDiv>
            <ChoreName>{child_chore.chore.chore_name}</ChoreName>
            <ChoreDesc>{child_chore.chore.description}</ChoreDesc>
            <ChoreDesc>Time to Complete: <br/>{child_chore.time_to_complete} minutes</ChoreDesc>
            <ChoreDesc>Reward: ${child_chore.reward}</ChoreDesc>
            {child_chore.is_completed ? <ChoreDesc>Completed <span onClick={handleComplete}>✅</span></ChoreDesc> : <ChoreDesc>Completed <span onClick={handleComplete}>✖️</span></ChoreDesc>}
            <LoginButton onClick={handleChildChoreDelete}>Remove Chore</LoginButton>
        </ChoreDiv>
    )
}

export default ChildChore

