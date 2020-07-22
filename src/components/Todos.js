import React from "react";
import { deleteTodo } from "../redux/actions/todos";


const Todos = ({ todos }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.title}
            {todo.content}
            {/* <input type="checkbox" onChange={onCompletedChange} />  */}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">All Caught Up!</p>
  );

  const onCompletedChange = (e) => {
    const isCompleted = e.target.value;
    this.setState(() => ({ isCompleted }));
  };

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
