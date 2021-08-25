import React from "react";
import { useState } from "react";

// prettier-ignore
const ThingToDo = ({ todo, event, user }) => {
    const [className, setClassName] = useState("");

    const completedTodo = {
        user_id: user.id,
        thing_to_do: todo.thing_to_do,
        completed: true,
        event_id: event.id,
    };

    function handleCompleted() {
        
        fetch(`/todos/${todo.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(completedTodo),
        }).then(setClassName("completed"))

    }

    return (
        <>
        {todo.completed ? (<li className='completed'>{todo.thing_to_do}</li>) : (<li className={className}>{todo.thing_to_do}</li>)}
        <button onClick={handleCompleted}>Check</button>
        </>
    );
    };

export default ThingToDo;
