import React from 'react'
import ParentView from './ParentView'
import ChildView from './ChildView'

function Home({user}){
    console.log(user.chores)
    return (
        <div>
            <h3>Hi {user.first_name}</h3>
            <h2>Your are a {user.is_parent ? "Parent" : "Child"} in the {user.household.last_name} household!</h2>
            
            {user.is_parent ? 
            <ParentView user={user} householdChores={user.chores}/>
            :
            <ChildView />
            }
        </div>
    )
}

export default Home
