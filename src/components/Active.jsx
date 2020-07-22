import React from "react";
import { connect } from "react-redux";
import Todos from "./Todos";

const Active = (props) => {
  return (
    <div className="container">
      <div className="todos">
        <Todos todos={props.todos} tabName="active"/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.active.filter((todo) => !todo.isCompleted),
  };
};

export default connect(mapStateToProps)(Active);
