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
            <h3 className="subheading-fade">Algorithm Adventures Await!</h3>
        </MtAlgoHeader>
            <PlayNowBtn>
            {user ? <Button onClick={() => navigate('/play')}>PLAY NOW!</Button> : <Button onClick={() => navigate('/login')}>PLAY NOW!</Button> }
            <Instructions>
                <button onClick={() => toggleInstructions()}>
                    INSTRUCTIONS
                </button>
                <InstructionPargph> 
                    {hideInstructions ? "To complete these challenges you will need to open your favorite IDE. We reccomend writing your code in the IDE and then running it in the browser console to test output. Copy the output and paste it into the solution field below." : null}
                </InstructionPargph>               
            </Instructions>
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


const Instructions = styled.p`
   /* position: absolute; */
   /* display:flex;
   margin-top: 400px; */
    button {
        background: papayawhip;
        margin-left: 50px;
        border-radius: 3px;
        cursor: pointer
    }
`

const InstructionPargph = styled.p`
    /* position: absolute; */
    margin: 10px;
    margin-left: 50px;
    display:flex;
    width: 200px;
    margin-top: 30px;
    margin-right: 100px;
    font: bold;
`