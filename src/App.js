import React from "react";
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";
import Edit from "./components/EditTodo";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={ToDoList} />
      <Route path="/add" component={AddToDo} />
      <Route path="/about" component={About} />
      <Route path="/edit/:id" component={Edit} />
      <Footer />
    </BrowserRouter>
  );
}

// {/* <Router>
// <div className="container">
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <Link to={'/'} className="navbar-brand">ToDo List</Link>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav mr-auto">
//       <li className="nav-item">
//           <Link to={'/'} className="nav-link">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link to={'/create'} className="nav-link">Create</Link>
//         </li>

//       </ul>
//     </div>
//   </nav> <br/>

export default App;
