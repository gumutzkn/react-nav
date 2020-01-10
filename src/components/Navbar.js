import React from "react";
import "./Navbar.css";

const Navbar = props => {
  return (
    <div className={props.Class} onClick={props.open}>
      <span></span>
    </div>
  );
};

export default Navbar;
