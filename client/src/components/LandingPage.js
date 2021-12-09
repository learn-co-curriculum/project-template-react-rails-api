import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import { PlayNow } from "../styles";

function LandingPage() {
    const navigate = useNavigate();
    return (
        <div>
        <MtAlgoHeader>
            <h1 class="MtAlgoTitle">Mount Algo</h1>
            <h3 class="subheading-fade">Algorithm Adventures Await!</h3>
        </MtAlgoHeader>
            <PlayNowBtn>
                <PlayNow onClick={() => {navigate('/login')}}>PLAY NOW!</PlayNow>
            </PlayNowBtn>
        </div>
    )
}

const MtAlgoHeader = styled.div`
    margin-top: 150px;
    position: relative;
    display: flex-column;
    height: 100%;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    align-items:center;
    color: #4f2004;
    font-family: "Copperplate", fantasy;
    h1.font-size: 200%
`
const PlayNowBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px
`
export default LandingPage

// save for later:
{/* <div>Avatar icons made by <a href="https://www.flaticon.com/authors/maxicons" title="max.icons">max.icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
