import React from "react";
import { connect } from "react-redux";
import Todos from "./Todos";

const Active = (props) => {
  return (
    <div className="container">
      <div className="todos">
        <Todos todos={props.active} tabName="active"/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    active: state.todos.active,
  };
};

export default connect(mapStateToProps)(Active);
