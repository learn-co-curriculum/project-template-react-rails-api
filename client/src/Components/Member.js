import React, {useState} from 'react'
import Chore from './Chore'

const Member = ({user}) => {
    const [showChildInfo, setShowChildInfo] = useState(false)

    function handleMember(){
        setShowChildInfo(!showChildInfo)
    }

    return (
        <div>
            {user.is_parent 
            ? 
            <h3>{user.first_name}</h3>
            : 
            <h3 onClick={handleMember}>{user.first_name}</h3>
            }
            {showChildInfo && 
                <>
                    <h5 >{user.username}</h5>
                    <h5>{user.email}</h5>
                    {user.chores && user.chores.map(chore => {
                        return(
                        <Chore key={chore.id} chore={chore}/>
                        )
                    })}
                </>
            }
        </div>
    )
}

export default Member
