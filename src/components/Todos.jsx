import React, { Component } from "react";
import { deleteTodo, moveTodo, editTodo } from "../redux/actions/todos";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { GrEdit } from "react-icons/gr";
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
      isReadyToDelete: false,
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
      this.getTabName(this.state.selectedTodo.isCompleted),
      this.state.selectedIndex
    );

    this.notifyUpdated(this.state.selectedTodo.title);
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

  notifyUpdated = (title) => {
    toast.info("TODO : " + title + " Updated ", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  getTabName = (isCompleted) => {
    return isCompleted ? "completed" : "active";
  };

  render() {
    const { todos } = this.props;
    const todoList = todos.map((todo, i) => {
      return (
        <tr key={todo.id} className="todo-list">
          <td>
            <Input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() =>
                this.moveClicked(todo.id, this.getTabName(todo.isCompleted), i)
              }
            />
            {todo.title}
          </td>
          <td>{todo.content}</td>
          <td>
            <span
              style={{ cursor: "pointer", marginRight: 5 }}
              onClick={() =>
                this.deleteClicked(todo, this.getTabName(todo.isCompleted))
              }
            >
              <RiDeleteBinLine />
            </span>
            |
            <span
              style={{ cursor: "pointer", marginLeft: 5 }}
              onClick={() => this.editButtonClicked(i)}
            >
              <GrEdit />
            </span>
          </td>
        </tr>
      );
    });

    return this.props.todos.length ? (
      <Table hover striped responsive>
        <thead>
          <th>Title</th>
          <th>Contents</th>
          <th>Actions</th>
        </thead>
        <tbody>{todoList}</tbody>
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
              </Button>
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
      </Table>
    ) : (
      <Alert color="success" className="center">
        All Caught Up!
      </Alert>
    );
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
