import React from 'react'
import { ParentTitle } from './StyledComponentElements'

const Parent = ({user}) => {
    return (
        <div>
            <ParentTitle>{user.first_name} - {user.username}</ParentTitle>
        </div>
    )
}

export default Parent
