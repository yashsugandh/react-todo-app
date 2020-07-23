import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TodoForm from "../TodoForm";
import { addTodo } from "../../redux/actions/todos";

const AddTodo = (props) => (
  <div className="container todos">
    <TodoForm
      onSubmit={(todo) => {
        props.addTodo(todo);
      }}
    />
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addTodo,
    },
    dispatch
  );
};
export default connect(null, mapDispatchToProps)(AddTodo);
