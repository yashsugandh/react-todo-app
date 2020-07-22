import React from "react";
import { connect } from "react-redux";
import Todos from "./Todos";

const Completed = (props) => {
  return (
    <div className="container">
      <div className="todos">
        <Todos todos={props.todos} key="completed" />{" "}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.completed.filter((todo) => todo.isCompleted),
  };
};

export default connect(mapStateToProps)(Completed);