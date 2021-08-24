import React from 'react'
import styled from 'styled-components'

const ChoreDiv = styled.div`
    padding: .5em;
`

const ChoreName = styled.h3`
    text-transform: capitalize;
    text-decoration: underline;
    text-align: center;
    flex-wrap: wrap;
`

const ChoreDesc = styled.p`
    text-align: center;
`

const HouseholdChore = ({chore}) => {    
    return (
        <ChoreDiv>
            <ChoreName>{chore.chore_name}</ChoreName>
            <ChoreDesc>description: {chore.description}</ChoreDesc>
        </ChoreDiv>
    )
}

export default HouseholdChore
