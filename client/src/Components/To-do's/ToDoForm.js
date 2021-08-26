import { FaPlus } from "react-icons/fa";


// prettier-ignore
const ToDoForm = ({inputText,setInputText,todos,setToDos,event,user,} ) => {
    
    const newTodo = {
        user_id: user.id,
        thing_to_do: inputText,
        completed: false,
        event_id: event.id,
    };

    function submitTodo(e) {
        e.preventDefault();
        fetch("/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodo),
        }).then(setToDos([...todos, newTodo]))
    }

    return (
        <form onSubmit={(e) => submitTodo(e)}>
        <input
            placeholder="Enter a todo..."
            type="text"
            className="to-do-input"
            onChange={(e) => setInputText(e.target.value)}
        />
        <button class="todo-btn" type="submit">
            <FaPlus />
        </button>
        </form>
    );
};

export default ToDoForm;
