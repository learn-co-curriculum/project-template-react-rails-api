import React from 'react'
import { useState } from 'react'


const ThingToDo = ({ todo }) => {

    const [className,setClassName] = useState('')
 
    function handleCompleted(){
        setClassName('completed')
    }

    return (
        <>
        <li className={className}>
            {todo}
        </li>
            <button onClick={handleCompleted}>Check</button>
        </>
    )
}

export default ThingToDo
