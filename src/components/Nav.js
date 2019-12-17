import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none"
};

const Nav = () => (
  <ul style={navListStyle}>
    <li style={navListItemStyle}>
      <Link style={linkStyle} to="/">
        Home
      </Link>
    </li>
    <li style={navListItemStyle}>
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </li>
    <li style={navListItemStyle}>
      <Link to="/add">Add new task</Link>
    </li>
  </ul>
);

const navListStyle = {
  listStyle: "none",
  padding: "0px",
  fontFamily: "'Roboto', sans-serif"
};

const navListItemStyle = {
  display: "inline-block",
  paddingRight: "15px"
};

export default Nav;

// export function Nav(props) {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <a className="navbar-brand" href="/">
//         ToDo List
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           <li className="nav-item active">
//             <Link className="nav-link" to="/">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/form">
//               New Task
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }
