import ThingToDo from "./ThingToDo"

const ToDoList = ({ todos }) => {
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {todos.map(todo => {
                    console.log(todo)
                    return (
                        <ThingToDo todo={todo}/>
                    )
                })}

            </ul>
        </div>
    )
}

export default ToDoList
