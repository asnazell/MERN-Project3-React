import React from "react";
import Nav from "./Nav";
// import { Navbar, Jumbotron, Button } from "react-bootstrap";

class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  getToDoReact = async () => {
    const todo = await fetch("http://localhost:4000/todo/all");
    const todoList = await todo.json();
    console.log("todoList", todoList);
    this.setState({
      todos: todoList
    });
  };

  componentDidMount() {
    this.getToDoReact();
  }

  handleRemove = async todo => {
    const response = await this.postData(todo._id);
    console.log("response", response);
    this.getToDoReact();
  };

  postData = todoId => {
    return fetch(`http://localhost:4000/todo/delete/${todoId}`, {
      method: "DELETE"
    });
  };

  render() {
    // if (this.state.todo.length < 1) {
    //   return <React.Fragment>Loading</React.Fragment>;
    // }
    return (
      <React.Fragment>
        <h2>Todo List</h2>
        <Nav />
        <ul>
          {this.state.todos.map(todo => {
            return (
              <li key={todo._id}>
                {todo.title}
                <button onClick={() => this.handleRemove(todo)}>Remove</button>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default ToDoList;
