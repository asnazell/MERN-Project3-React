import React from "react";
import Nav from "./Nav";

const Header = () => (
  <header style={headerStyle}>
    <h1 style={h1Style}>React Todo Application</h1>
    <Nav />
  </header>
);

const headerStyle = {
  margin: "0 0 10px"
};

const h1Style = {
  margin: "0 0 10px",
  fontFamily: "'Courier Prime', monospace"
};

export default Header;
