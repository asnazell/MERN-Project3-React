import React from "react";

class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: []
    };
  }

  getToDoReact = async () => {
    const todo = await fetch("http://localhost:4000/todo/all");
    const todoList = await todo.json();
    console.log("todoList", todoList);
    this.setState({
      todo: todoList
    });
  };

  componentDidMount() {
    this.getToDoReact();
  }

  render() {
    // if (this.state.todo.length < 1) {
    //   return <React.Fragment>Loading</React.Fragment>;
    // }
    return (
      <React.Fragment>
        <h2>ToDoReact List</h2>
        <ul>
          {/* {this.state.todo.map(crime => {
            return (
              <li key={todo.id}>
                {crime.primary_type} -
                <button data-id={todo.id} onClick={this.handleRemove}>
                  Remove
                </button>
              </li>
            );
          })} */}
        </ul>
      </React.Fragment>
    );
  }
}

export default ToDoList;
