import React from 'react'
import ParentView from './ParentView'
import ChildView from './ChildView'
import { Title, HomeSubtitle, Wrapper } from './StyledComponentElements'

function Home({user, chore}){
    
    return (
        <Wrapper>
            <Title>Hi {user.first_name}</Title>
            <HomeSubtitle>Your are a {user.is_parent ? "Parent" : "Child"} in the {user.household.last_name} household!</HomeSubtitle>
            
            {user.is_parent ? 
            <ParentView user={user} chore={chore} />
            :
            <ChildView />
            }
        </Wrapper>
    )
}

export default Home
