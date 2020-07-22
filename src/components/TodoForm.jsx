import React from "react";
import { FormGroup, Input, Button } from "reactstrap";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.todo ? props.todo.content : "",
      title: props.todo ? props.todo.title : "",
      isCompleted: props.todo ? props.todo.isCompleted : false,
      error: "",
    };
  }

  onInputChange = (e, key) => {
    this.setState({
      [key]: e.target.value,
    });
  };

  onSubmit = (e) => {
    const { title, content, isCompleted } = this.state;
    if (!title || !content) {
      this.setState(() => ({ error: "Please provide title and content" }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        title,
        content,
        isCompleted,
      });
      this.setState({
        title: "",
        content: "",
      });
    }
  };

  render() {
    const { error, title, content } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <FormGroup>
          <Input
            type="text"
            placeholder="title"
            autoFocus
            value={title}
            onChange={(e) => this.onInputChange(e, "title")}
          />

          <Input
            type="text"
            placeholder="content"
            value={content}
            onChange={(e) => this.onInputChange(e, "content")}
          />
        </FormGroup>
        <Button onClick={this.onSubmit} color="primary">
          Add Todo
        </Button>
      </div>
    );
  }
}
