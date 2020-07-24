import React, { Component } from "react";
import { deleteTodo, moveTodo, editTodo } from "../redux/actions/todos";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { AiFillEdit } from "react-icons/ai";
import {
  Input,
  Table,
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
    this.notifyMoved(tabName);
  };

  notifyMoved = (tabName) => {
    toast.success(
      "Moved to => " + (tabName === "active" ? "Completed" : "Active"),
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  };

  deleteClicked = (todo, tabName) => {
    this.props.deleteTodo(todo.id, tabName);
    this.notifyDeleted(todo.title);
  };

  notifyDeleted = (title) => {
    toast.error("TODO : " + title + " Deleted ", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  render() {
    const { todos, tabName } = this.props;
    const todoList = todos.length ? (
      todos.map((todo, i) => {
        return (
          <Table bordered hover striped responsive>
            <div key={todo.id}>
              <thead>
                <th>
                  Mark as {this.tabName === "active" ? "Complete" : "Active"}
                </th>
                <th>Title</th>
                <th>Contents</th>
                <th>Delete</th>
                <th>Edit</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Input
                      type="checkbox"
                      onChange={() => this.moveClicked(todo.id, tabName, i)}
                    />
                  </td>
                  <td>{todo.title}</td>
                  <td>{todo.content}</td>
                  <td>
                    <span
                      style={{ cursor: "pointer", float: "right" }}
                      onClick={() => this.deleteClicked(todo, tabName)}
                    >
                      <RiDeleteBinLine />
                    </span>
                  </td>
                  <td>
                    <span
                      style={{ cursor: "pointer", float: "right" }}
                      onClick={() => this.editButtonClicked(i)}
                    >
                      <AiFillEdit />
                    </span>
                  </td>
                </tr>
              </tbody>
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
          </Table>
        );
      })
    ) : (
      <Alert color="success" className="center">
        All Caught Up!
      </Alert>
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
