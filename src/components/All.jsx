import React from "react";
import Todos from "./Todos";
import { connect } from "react-redux";

const All = (props) => {
  return (
    <div className="container">
      <div className="todos">
        <Todos todos={[...props.active, ...props.completed]} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    active: state.todos.active,
    completed: state.todos.completed,
  };
};

export default connect(mapStateToProps)(All);
