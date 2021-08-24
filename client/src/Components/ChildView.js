import React, {useState, useEffect} from 'react'
import ChildChore from './ChildChore'
import {Wrapper, HomeSubtitle} from './StyledComponentElements'
import styled from 'styled-components'

const ChildChoresDiv = styled.div`
    display: grid;
    justify-items: center;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fill, 15rem) 20%; 
    grid-gap: 20px; 
`

const MoneyEarned = styled.h2`
    text-align: center;
`

const SingleChoreDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

function ChildView({user}){
    const [myChores, setMyChores] = useState([])
    const [completed, setCompleted] = useState(false)


    useEffect(() => {
        fetch(`/child_chores/${user.id}`)
        .then(response => response.json())
        .then(data => setMyChores(data))
    }, [])



    // function handleFinished(event){
    //     event.preventDefault()
    //     console.log(event.target.value)
    //     setCompleted(!completed)
    //     fetch(`child_chores/${event.target.id}`,{
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type" : "application/json"
    //         },
    //         body: JSON.stringify({
    //             is_completed : event.target.value
    //         })
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         const updatedMyChores = myChores.map((childChore) => {
    //             if (childChore.id === data.id) {
    //               return { ...childChore, is_completed: data.is_completed };
    //             } else {
    //               return childChore;
    //             }})
    //             setMyChores(updatedMyChores)
    //         })
    // }
    
    return (
        <Wrapper>
            <MoneyEarned>Money Earned: ${user.total_earnings}</MoneyEarned>
            <HomeSubtitle>Assigned Chores</HomeSubtitle>
            <ChildChoresDiv>
            {myChores && myChores.map(child_chore => {
                return(
                    <ChildChore
                        child_chore = {child_chore}
                        myChores = {myChores}
                        setMyChores = {setMyChores}
                    />
                )
            })}
            </ChildChoresDiv>
        </Wrapper>
    )
}

export default ChildView
