import React from "react";
import "./NavItem.css";

const navItem = (props) => {
  return (
    <li className="NavItem">
      <span className="description">{props.description}</span>
      <span> &#9662;</span>
    </li>
  );
};

export default navItem;
