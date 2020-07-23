import React from "react";
import { connect } from "react-redux";
import Todos from "./Todos";

const Completed = (props) => {
  return (
    <div className="container">
      <div className="todos">
        <Todos todos={props.completed} tabName="completed" />{" "}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    completed: state.todos.completed,
  };
};

export default connect(mapStateToProps)(Completed);
