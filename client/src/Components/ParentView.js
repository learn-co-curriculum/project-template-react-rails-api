import React, {useState, useEffect} from 'react'
import Parent from './Parent'
import Child from './Child'
import { HomeSubtitle, Wrapper, ParentChildDiv, ParentDiv, ChildDiv } from './StyledComponentElements'

function ParentView({user, chores, household}){    
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
                                    household = {household}
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
                                    household = {household}
                                />
                            )
                        }})}
                </ChildDiv>
            </ParentChildDiv>
        </Wrapper>
    )
}

export default ParentView
