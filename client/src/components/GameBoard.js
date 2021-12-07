import React, {useState} from 'react'
import styled from 'styled-components'
 
function GameBoard({user, setUser}) {
    const [solution, setSolution] = useState('')

    const checkAnswer = (e) => {
        e.preventDefault();
        console.log(user)
        if(solution === '233168') {
            fetch(`/users/${user.id}`, {
                
                method: "PATCH",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({
                    score: user.score
                })
            })
            .then(response => response.json())
            .then(data => user.score = data.score)
        } else {
            // need to display message of incorrect here
            console.log('Incorrect')
        }
    }



    return (
        <Board>
            <h3>{`Welcome user_name, the avatar_name.`}</h3>
            <Instructions>
                To complete these challenges you will need to open your favorite IDE. We reccomend writing your code in the IDE and then running it in the browser console to test output. Copy the output and paste it into the solution field below. 
            </Instructions>
            <Prompt>
            If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
            </Prompt>
            <form className="form" onSubmit={checkAnswer}>
            <SolutionInput type="text"
            id="solution"
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            />
            <InputButton type="submit">
             SUBMIT
            </InputButton>
            </form>
        </Board>
    )
}
const Board = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    margin-top: 100px;
    margin-left: 50px;
    height: 50%
`

const Instructions = styled.p`
    margin: 0px;
    position: absolute;
    margin-top: 110px;
    width: 450px
`

const Prompt = styled.h4`
    margin: 0px;
    position: absolute; 
    margin-top: 270px;
    width: 500px
`

const SolutionInput = styled.input`
    font-size: 13px;
    position: absolute;
    padding: 10px;
    margin: 10px;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    margin-left: 0px;
    margin-top: 200px
`
const InputButton = styled.button`
    font-size: 13px;
    position: absolute;
    padding: 10px;
    margin: 10px;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    margin-left: 0px;
    margin-top: 245px
    
`

export default GameBoard
