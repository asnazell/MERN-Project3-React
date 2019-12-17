import React from "react";
import { h2, p } from "../styles";

const About = () => {
  return (
    <React.Fragment>
      <h2 style={h2}>About</h2>
      <p style={p}>
        This is the basic ToDo list to save family daily tasks in order not to
        miss anything!{" "}
      </p>
    </React.Fragment>
  );
};

export default About;
