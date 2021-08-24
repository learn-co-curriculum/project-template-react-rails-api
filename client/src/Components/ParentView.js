import React, {useState, useEffect} from 'react'
import ChoreForm from './ChoreForm'
import Parent from './Parent'
import Child from './Child'
import ChoreError from './ChoreError'
import { HomeSubtitle, Wrapper, ParentChildDiv, ParentDiv, ChildDiv } from './StyledComponentElements'

function ParentView({user}){
    const [choreErrors, setChoreErrors] = useState([])
    const [chores, setChores] = useState([])
    
    useEffect(() => {
        fetch(`/chores`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setChores(data)
        })
    },[])
    
    return (
        <Wrapper>
            <ParentChildDiv>
                <ParentDiv>
                    <HomeSubtitle>Household Parents</HomeSubtitle>
                    {user.household.users.map(user => {
                        if (user.is_parent === true) {
                            return (
                                <Parent 
                                    key = {user.id}
                                    user = {user}
                                />
                            )
                        }})}
                </ParentDiv>
                <ChildDiv>
                    <HomeSubtitle>Household Children</HomeSubtitle>
                    {user.household.users.map(user => {
                        if (user.is_parent === false) {
                            return (
                                <Child 
                                    key={user.id} 
                                    user={user} 
                                    chores={chores}
                                />
                            )
                        }})}
                </ChildDiv>
            </ParentChildDiv>
            <ChoreForm user={user} chores={chores} setChores={setChores} setChoreErrors={setChoreErrors}/>
            {choreErrors.map((err) => (
                <ChoreError key={err}>{err}</ChoreError>
            ))}
        </Wrapper>
    )
}

export default ParentView
