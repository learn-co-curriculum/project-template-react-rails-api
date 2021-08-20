import React from 'react'
import ChoreForm from './ChoreForm'
import Member from './Member'

function ParentView({user}){
    console.log(user)

    return (
        <div>
            {user.household.users.map(user => {
                return (
                    <Member user={user}/>
                    )
                })}
            <h2>New Chore</h2>
            <ChoreForm />
        </div>
    )
}

export default ParentView
