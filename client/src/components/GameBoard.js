import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {prompts} from './prompts n solution/prompt.js'
import {solutions} from './prompts n solution/solution.js'
import VictoryPage from './VictoryPage.js'
import {useNavigate} from 'react-router-dom'

function GameBoard({user, setUser}) {
    let navigate = useNavigate()
    const [solution, setSolution] = useState('')
    const [hideInstructions, setHideInstructions] = useState(true)
   
      
    const checkAnswer = (e) => {    
        e.preventDefault()
        if(solution === `${solutions[user.score]}`) {
            navigate('/play')
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
            .then(data => setUser(data))
        } else {
            // need to display message of incorrect here
            console.log('Incorrect Solution: ' + solution )
        }
    }

    const toggleInstructions = () => {
        setHideInstructions(!hideInstructions)
    }
    return (
        <>
        <Instructions>
                <button onClick={() => toggleInstructions()}>
                    INSTRUCTIONS
                </button>
            <InstructionPargph> 
                {hideInstructions ? "To complete these challenges you will need to open your favorite IDE. We reccomend writing your code in the IDE and then running it in the browser console to test output. Copy the output and paste it into the solution field below." : null}
            </InstructionPargph>               
        </Instructions>
        <Board>
            <h3>
                {`Welcome ${user.username}, the ${user.avatar.name}.`}
            </h3>

            
            
            <Prompt>
                {user.score < 5 ? `Quest ${user.score + 1}: ${prompts[user.score]}` : <VictoryPage />}
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
        </>
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
   position: absolute;
   display:flex;
   margin-top: 400px;
    button {
        background: papayawhip;
        margin-left: 50px;
        border-radius: 3px;
        cursor: pointer
    }
`

const InstructionPargph = styled.p`
    position: absolute;
    margin: 10px;
    margin-left: 50px;
    display:flex;
    width: 200px;
    margin-top: 30px;
    margin-right: 100px;
    font: bold;
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
    border-radius: 3px;
    margin-left: 0px;
    margin-top: 245px;
    cursor: pointer
`

export default GameBoard
