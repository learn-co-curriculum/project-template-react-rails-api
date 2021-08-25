import { useState } from 'react' 

const ToDoForm = ({ inputText, setInputText, todos, setToDos }) => {


    function submitTodo(e){
        e.preventDefault()
        setToDos([...todos, inputText])
    }

    return (
        <form onSubmit={(e) => submitTodo(e)}>
            <input type='text' class='to-do-input' onChange={(e) => setInputText(e.target.value)}/>
            <button class='todo-button' type='submit'>Add a To Do</button>
        </form>
    )
}

export default ToDoForm
