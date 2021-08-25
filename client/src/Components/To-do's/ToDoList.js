import ThingToDo from "./ThingToDo";

const ToDoList = ({ todos, event, user }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => {
          console.log("ToDoList Component", todo);
          return <ThingToDo todo={todo} event={event} user={user} />;
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
