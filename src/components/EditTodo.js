import React from "react";
import { Form } from "react-bootstrap";

export default class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      frequency: "",
      status: "",
      user: ""
    };
  }

  async componentDidMount() {
    const record = await fetch(
      `http://localhost:4000/todo/find/${this.props.match.params.id}`
    );
    const todo = await record.json();
    console.log("todo", todo);

    this.setState({
      title: todo.title,
      description: todo.description,
      frequency: todo.frequency,
      status: todo.status,
      user: todo.user
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const post = {
      title: this.state.title,
      description: this.state.description,
      frequency: this.state.frequency,
      status: this.state.status,
      user: this.state.user
    };
    this.updateTodo(post);
  };

  async updateTodo(todo) {
    const url = `http://localhost:4000/todo/update/${this.props.match.params.id}`;

    const response = await fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo)
    })
      .then(res => res.json())
      .catch(e => console.log(e));

    console.log(response);

    if (response) this.props.history.push("/");
  }

  handleChange = event => {
    console.log("handleChange", event);
    console.log("handleChange value", event.currentTarget.value);
    console.log(event.currentTarget.name);
    if (event.currentTarget.name === "status") {
      if (event.currentTarget.value === "on") {
        this.setState({
          [event.currentTarget.name]: true
        });
      } else {
        this.setState({
          [event.currentTarget.name]: false
        });
      }
    } else {
      this.setState({
        [event.currentTarget.name]: event.currentTarget.value
      });
    }
  };
  render() {
    return (
      <div class="container">
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label>Title</label>
            <input
              type="text"
              class="form-control"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div class="form-group">
            <label>Description</label>
            <input
              type="text"
              class="form-control"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
            />
          </div>
          <div class="form-group">
            <label>Frequency</label>
            <input
              type="text"
              class="form-control"
              name="frequency"
              onChange={this.handleChange}
              value={this.state.frequency}
            />
          </div>
          <div class="form-group">
            <label>Status</label>
            <Form.Check
              name="status"
              onChange={this.handleChange}
              checked={this.state.status}
            />
          </div>
          <div class="form-group">
            <label>User</label>
            <input
              type="text"
              class="form-control"
              name="user"
              onChange={this.handleChange}
              value={this.state.user}
            />
          </div>
          <button type="Edit">Edit</button>
        </form>
      </div>
    );
  }
}
