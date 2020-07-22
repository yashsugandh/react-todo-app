import React from "react";
import { Input } from 'reactstrap';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.todo ? props.todo.content : "",
      isCompleted: props.todo ? props.todo.isCompleted : false,
      error: "",
    };
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onContentChange = (e) => {
    const content = e.target.value;
    this.setState(() => ({ content }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.content) {
      this.setState(() => ({ error: "Please provide title and content" }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        title: this.state.title,
        content: this.state.content,
        isCompleted: this.state.isCompleted,
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <Input
            placeholder="title"
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <Input
            placeholder="content"
            value={this.state.content}
            onChange={this.onContentChange}
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}
