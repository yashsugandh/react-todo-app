import React from "react";
import { connect } from "react-redux";
import Todos from "./Todos";
import {  Row, Col } from "reactstrap";

const Active = (props) => {
  return (
    <div className="todo-list">
      <Row>
        <Col
          sm={{
            offset: 4,
            size: 4,
          }}
        >
          <Todos todos={props.active} />
        </Col>
      </Row>
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    active: state.todos.active,
  };
};

export default connect(mapStateToProps)(Active);
