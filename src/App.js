import React from "react";
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ToDoList} />
      <Route path="/add" component={AddToDo} />
    </BrowserRouter>
  );
}

export default App;
