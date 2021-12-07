import React from 'react'
import styled from 'styled-components'

function LandingPage() {
    return (
        <LandingPageContent>
            <h1>Mount Algo</h1>
            <h3 class="subheading-fade">Algorithm Adventures Await!</h3>
        </LandingPageContent>
    )
}

const LandingPageContent = styled.div`
    margin-top: 150px;
    position: relative;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: left;
    color: #4f2004;
    font-family: "Copperplate", fantasy
`
export default LandingPage

// save for later:
{/* <div>Avatar icons made by <a href="https://www.flaticon.com/authors/maxicons" title="max.icons">max.icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
