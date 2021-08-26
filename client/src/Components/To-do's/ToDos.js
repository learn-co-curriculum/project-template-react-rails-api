import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { useState, useEffect } from "react";

// prettier-ignore
const ToDos = ({ event, user }) => {
    const [inputText, setInputText] = useState("");
    const [todos, setToDos] = useState([]);

    useEffect(() => {
        fetch("/todos")
        .then((resp) => resp.json())
        .then((data) => setToDos(data));
    },[]);

    return (
        <div>
        <h1>To-Do's</h1>
        <div className='todo-list-container'>
        <ToDoForm
            setInputText={setInputText}
            inputText={inputText}
            todos={todos}
            setToDos={setToDos}
            event={event}
            user={user}
        />
            <ToDoList todos={todos} event={event} user={ user}/>
            </div>
        </div>
    );
    };

export default ToDos;
