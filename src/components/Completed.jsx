import React from "react";
import { connect } from "react-redux";
import Todos from "./Todos";
import { Row, Col } from "reactstrap";

const Completed = (props) => {
  return (
    <div className="todo-list">
      <Row>
        <Col
          sm={{
            offset: 4,
            size: 4,
          }}
        >
          <Todos todos={props.completed} />
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    completed: state.todos.completed,
  };
};

export default connect(mapStateToProps)(Completed);
