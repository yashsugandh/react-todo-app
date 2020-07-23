import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TodoForm from "./TodoForm";
import { addTodo } from "../../redux/actions/todos";
import { Container, Row, Col } from "reactstrap";

const AddTodo = (props) => (
  <Container>
    <Row>
      <Col
        sm={{
          offset: 3,
          size: 6,
        }}
      >
        <TodoForm
          onSubmit={(todo) => {
            props.addTodo(todo);
          }}
        />
      </Col>
    </Row>
  </Container>
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
