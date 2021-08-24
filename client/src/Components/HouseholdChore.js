import React from 'react'
import styled from 'styled-components'

const ChoreDiv = styled.div`
    padding: .5em;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
`

const ChoreName = styled.h3`
    text-transform: capitalize;
    text-decoration: underline;
    text-align: center;
`

const ChoreDesc = styled.p`
    text-align: center;
`

const ChoreDelButton = styled.button`
    text-align: center;
`

const HouseholdChore = ({chore, handleDelete, id}) => {    
    return (
        <ChoreDiv>
            <ChoreName>{chore.chore_name}</ChoreName>
            <ChoreDesc>description: {chore.description}</ChoreDesc>
            <ChoreDelButton id={id} onClick={handleDelete}>Delete Chore</ChoreDelButton>
        </ChoreDiv>
    )
}

export default HouseholdChore
