import React from "react";
import Todos from "./Todos";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

const All = (props) => {
  return (
    <div className="todo-list">
      <Row>
        <Col
          sm={{
            offset: 4,
            size: 4,
          }}
        >
          <Todos todos={[...props.active, ...props.completed]} />
        </Col>
      </Row>
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
