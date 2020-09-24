import React from "react";
import "./NavItem.css";

const navItem = (props) => {
  const chevron = "&#9662;";

  return (
    <li className="NavItem">
      <span className="description">{props.description}</span>
      <span> &#9662;</span>
    </li>
  );
};

export default navItem;
