import React from "react";
import { deleteTodo, moveTodo } from "../redux/actions/todos";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  Input,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const Todos = ({ todos, deleteTodo, tabName, moveTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo, i) => {
      return (
        <div className="collection-item" key={todo.id}>
          <Row>
            <Col
              lg={{
                offset: 2,
                size: 2,
              }}
            >
              <Input
                type="checkbox"
                onChange={() => moveTodo(todo.id, tabName, i)}
              />
            </Col>
            <Col
              lg={{
                size: 6,
              }}
            >
              <Card>
                <CardBody>
                  <Row>
                    <CardTitle>{todo.title}</CardTitle>
                    <span
                      style={{ cursor: "pointer", float: "right" }}
                      onClick={() => deleteTodo(todo.id, tabName)}
                    >
                      <RiDeleteBinLine />
                    </span>
                  </Row>
                  <Row>
                    <Col>
                      <CardText>{todo.content}</CardText>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
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
      moveTodo,
    },
    dispatch
  );
};
export default connect(null, mapDispatchToProps)(Todos);
