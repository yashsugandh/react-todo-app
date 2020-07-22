import React from "react";
import { deleteTodo } from "../redux/actions/todos";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RiDeleteBinLine } from "react-icons/ri";

const Todos = ({ todos, deleteTodo, key }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          {todo.title}
          {todo.content}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => deleteTodo(todo.id, key)}
          >
            <RiDeleteBinLine />
          </span>
          {/* <input type="checkbox" onChange={onCompletedChange} />  */}
        </div>
      );
    })
  ) : (
    <p className="center">All Caught Up!</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      deleteTodo,
    },
    dispatch
  );
};
export default connect(null, mapDispatchToProps)(Todos);
