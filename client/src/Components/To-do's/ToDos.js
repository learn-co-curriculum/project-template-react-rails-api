import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import { useState } from 'react'

const ToDos = () => {
    const [inputText, setInputText] = useState("")
    const [todos, setToDos] = useState([])

    return (
        <div>
             <h1>To-Do's</h1>
             <ToDoForm  setInputText={setInputText} inputText={inputText} todos={todos} setToDos={setToDos}/>
             <ToDoList todos={todos}/>
        </div>
    )
}

export default ToDos
