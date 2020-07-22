import React from "react";
import Todos from "./Todos";
import { connect } from "react-redux";

const All = (props) => {
  return (
    <div className="container">
      <div className="todos">
        <Todos todos={props.todos} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(All);
