import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import {Button} from "../styles"

function LandingPage({user}) {
    const navigate = useNavigate();
    return (
        <div>
        <MtAlgoHeader>
            <h1>Mount Algo</h1>
            <h3 className="subheading-fade">Algorithm Adventures Await!</h3>
        </MtAlgoHeader>
            <PlayNowBtn>
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
