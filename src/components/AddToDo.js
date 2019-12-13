import React from "react";
import Nav from "./Nav";

class AddToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    };
  }

  postData = todo => {
    return fetch("http://localhost:4000/todo/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: todo,
        description: "Family Activity List",
        frequency: "daily",
        status: true,
        user: "Assel"
      })
    });
    // return await response.json(); // parses JSON response into native JavaScript objects
  };

  handleTodoInputChange = event => {
    this.setState({ todo: event.target.value });
  };

  handleTodoAdd = async () => {
    const response = await this.postData(this.state.todo);
    this.setState({ todo: "" });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Add ToDo</h2>
        <Nav />
        <input
          type="text"
          id="todo"
          name="todo"
          placeholder="Enter task"
          value={this.state.todo}
          onChange={this.handleTodoInputChange}
        />
        <button onClick={this.handleTodoAdd}>Add</button>
      </React.Fragment>
    );
  }
}

export default AddToDo;
