import React from "react";
import { connect } from "react-redux";
import TodoForm from "./addTodo/TodoForm";
import { editTodo, deleteTodo } from "../redux/actions/todos";

const EditTodo = (props) => {
  return (
    <div>
      <TodoForm
        todo={props.todo}
        onSubmit={(todo) => {
          props.dispatch(editTodo(props.expense.id, todo));
        //   props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(deleteTodo({ id: props.todo.id }));
        //   props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    todo: state.todos.find((todo) => todo.id === props.match.params.id),
  };
};

export default connect(mapStateToProps)(EditTodo);
