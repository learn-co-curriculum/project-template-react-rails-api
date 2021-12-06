import React from 'react'
import styled from 'styled-components'

function LandingPage() {
    return (
        <LandingPageContent>
            <h1>MountAlgo</h1>
        </LandingPageContent>
    )
}
const LandingPageContent = styled.div`
    margin-top: 150px;
    position: relative;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`
export default LandingPage
