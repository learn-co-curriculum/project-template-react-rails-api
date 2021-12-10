import React, { useState } from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import {Button} from "../styles"

function LandingPage({user}) {
    const navigate = useNavigate();
    const [hideInstructions, setHideInstructions] = useState(false)

    const toggleInstructions = () => {
        setHideInstructions(!hideInstructions)
    }
    return (
        <div>
        <MtAlgoHeader>
            <h1>Mount Algo</h1>
            <h3 class="subheading-fade">Algorithm Adventures Await!</h3>
        </MtAlgoHeader>
            <PlayNowBtn>
            <InstructionPargph> 
                   <text class="subheading-fade">To complete these challenges you will need to open your favorite IDE. We reccomend writing your code in the IDE and then running it in the browser console to test output. Copy the output and paste it into the solution field below. </text>
            </InstructionPargph>    
            {user ? <Button onClick={() => navigate('/play')}>PLAY NOW!</Button> : <Button onClick={() => navigate('/login')}>PLAY NOW!</Button> }           
            </PlayNowBtn>
        </div>
    )
}

const MtAlgoHeader = styled.div`
    margin-top: 150px;
    position: relative;
    height: 100%;
    box-sizing: border-box;
    justify-content: left;
    color: #4f2004;
    font-family: "Copperplate", fantasy
`
const PlayNowBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export default LandingPage

// save for later:
{/* <div>Avatar icons made by <a href="https://www.flaticon.com/authors/maxicons" title="max.icons">max.icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}


const InstructionPargph = styled.p`
    position: absolute; 
    margin-top: 50%;
    margin-left: 50%;
    margin-right: 50%;
    margin-bottom: 25%;
    display: flex;
    width: 1000px;
    font-weight: bold;
    font-color: #eab676;
    font-size: 0.75em;
    text-align: center
`