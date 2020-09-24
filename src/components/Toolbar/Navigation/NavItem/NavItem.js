import React from "react";
import "./NavItem.css";

const navItem = (props) => {
  return (
    <li className="NavItem">
      <span>{props.description}</span>
    </li>
  );
};

export default navItem;
