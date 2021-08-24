import React, {useState, useEffect} from 'react'
import ChoreForm from './ChoreForm'
import Member from './Member'
import ChoreError from './ChoreError'

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
