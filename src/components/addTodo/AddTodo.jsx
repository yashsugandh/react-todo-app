import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TodoForm from "./TodoForm";
import { addTodo } from "../../redux/actions/todos";
import { Row, Col } from "reactstrap";

const AddTodo = (props) => (
  <div className="add-todo">
    <Row>
      <Col
        sm={{
          offset: 4,
          size: 4,
        }}
      >
        <TodoForm
          onSubmit={(todo) => {
            props.addTodo(todo);
          }}
        />
      </Col>
    </Row>
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
