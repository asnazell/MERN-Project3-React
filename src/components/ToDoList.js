import React from "react";
import { Link } from "react-router-dom";
// import { Navbar, Jumbotron, Button } from "react-bootstrap";
import { h2 } from "../styles";
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
        <h2 style={h2}>View all tasks</h2>
        <table style={table}>
          <tr style={tr}>
            <th style={listItem}>Task</th>
            <th style={listItem}>Description</th>
            <th style={listItem}>Frequency</th>
            <th style={listItem}>Status</th>
            <th style={listItem}>User</th>
            <th style={listItem}>Actions</th>
          </tr>
          {this.state.todos.map(todo => {
            return (
              <tr style={tr} key={todo._id}>
                <td style={listItem}>{todo.title}</td>
                <td style={listItem}>{todo.description}</td>
                <td style={listItem}>{todo.frequency}</td>
                <td style={listItem}>{todo.status ? "done" : "-"}</td>
                <td style={listItem}>{todo.user}</td>
                <td style={listItem}>
                  <Link to={`/edit/${todo._id}`}>Edit</Link>&nbsp;
                  <a href="#" onClick={() => this.handleRemove(todo)}>
                    Remove
                  </a>
                </td>
                {/* 
                <button >Remove</button> */}
              </tr>
            );
          })}
        </table>
      </React.Fragment>
    );
  }
}

const table = {
  width: "100%",
  borderTop: "dotted 1px #add8e6",
  fontFamily: "'Roboto', sans-serif",
  fontSize: "14px"
};

const tr = {
  borderBottom: "dotted 1px #add8e6"
};

const listItem = {
  padding: "5px"
};

export default ToDoList;
