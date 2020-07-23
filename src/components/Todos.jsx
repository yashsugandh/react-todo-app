import React, { Component } from "react";
import { deleteTodo, moveTodo, editTodo } from "../redux/actions/todos";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { AiFillEdit } from "react-icons/ai";
import {
  Input,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Alert,
} from "reactstrap";

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      selectedTodo: {},
      displayModal: false,
      selectedIndex: null,
    };
  }

  editButtonClicked = (selectedIndex) => {
    this.setState({
      displayModal: true,
      selectedTodo: this.props.todos[selectedIndex],
      selectedIndex,
    });
  };

  saveEditClicked = (e) => {
    this.props.editTodo(
      this.state.selectedTodo,
      this.props.tabName,
      this.state.selectedIndex
    );

    this.setState({
      selectedIndex: null,
      selectedTodo: {},
      displayModal: false,
    });
  };

  moveClicked = (id, tabName, index) => {
    this.props.moveTodo(id, tabName, index);
    this.notify(tabName);
  };

  notify = (tabName) => {
    // toast("Moved to => " + (tabName === "active" ? "Completed" : "Active"));
    toast.success("Moved to => " + (tabName === "active" ? "Completed" : "Active"), {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };
  render() {
    const { todos, deleteTodo, tabName } = this.props;
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
                  onChange={() => this.moveClicked(todo.id, tabName, i)}
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
                        <span
                          style={{ cursor: "pointer", float: "right" }}
                          // onClick={() => editTodo(todo, tabName, i)}
                          onClick={() => this.editButtonClicked(i)}
                        >
                          <AiFillEdit />
                        </span>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            {this.state.displayModal && (
              <Modal isOpen={this.state.displayModal}>
                <ModalHeader>Edit todo</ModalHeader>
                <ModalBody>
                  <Input
                    value={this.state.selectedTodo.title}
                    onChange={(e) =>
                      this.setState({
                        selectedTodo: {
                          ...this.state.selectedTodo,
                          title: e.target.value,
                        },
                      })
                    }
                  />
                  <Input
                    value={this.state.selectedTodo.content}
                    onChange={(e) =>
                      this.setState({
                        selectedTodo: {
                          ...this.state.selectedTodo,
                          content: e.target.value,
                        },
                      })
                    }
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.saveEditClicked}>
                    Save
                  </Button>{" "}
                  <Button
                    color="secondary"
                    onClick={() =>
                      this.setState({
                        displayModal: false,
                        selectedTodo: {},
                        selectedIndex: null,
                      })
                    }
                  >
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            )}
          </div>
        );
      })
    ) : (
      <Alert color ="success" className="center">All Caught Up!</Alert>
    );

    return <div className="todos collection">{todoList}</div>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      deleteTodo,
      moveTodo,
      editTodo,
    },
    dispatch
  );
};
export default connect(null, mapDispatchToProps)(Todos);
