import React from 'react'
import Chore from './Chore'

const Member = ({user}) => {
    return (
        <div>
            <h3>{user.first_name}</h3>
            
            {user.is_parent ? null : 
            <>
                <h5>{user.email}</h5>
                <h5>{user.username}</h5>
                {user.child_chores.map(child_chore => {
                    return(
                    <Chore child_chore={child_chore}/>
                    )
                    })}
            </>
            }
        </div>
    )
}

export default Member
