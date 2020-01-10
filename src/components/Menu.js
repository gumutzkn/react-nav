import React from "react";
import "./Menu.css";

const Menu = props => {
  return (
    <div className={props.addClass}>
      <a href="#">Link 1</a>
      <a href="#">Link 1</a>
      <a href="#">Link 1</a>
    </div>
  );
};

export default Menu;
