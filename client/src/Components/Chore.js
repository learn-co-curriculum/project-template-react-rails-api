import React from 'react'

const Chore = ({child_chore}) => {
    return (
        <div>
            <h3>{child_chore.chore.chore_name}</h3>
            <h3>{child_chore.chore.description}</h3>
            <h4>{child_chore.time_to_complete}</h4>
            <h5>{child_chore.reward}</h5>
            <h5>{child_chore.is_completed ? '✅' : '✔️'}</h5>
        </div>
    )
}

export default Chore
