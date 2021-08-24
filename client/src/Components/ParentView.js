import React, {useState} from 'react'
import ChoreForm from './ChoreForm'
import Member from './Member'
import ChoreError from './ChoreError'

function ParentView({user, householdChores}){
    const [choreErrors, setChoreErrors] = useState([])
    const [chores, setChores] = useState(householdChores)
    console.log(chores)
    

    return (
        <div>
            {user.household.users.map(user => {
                return (
                    <Member key={user.id} user={user} chores={chores}/>
                    )
                })}
            <ChoreForm user={user} chores={chores} setChores={setChores} setChoreErrors={setChoreErrors}/>
            {choreErrors.map((err) => (
                <ChoreError key={err}>{err}</ChoreError>
            ))}
        </div>
    )
}

export default ParentView
