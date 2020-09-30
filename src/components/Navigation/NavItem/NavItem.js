import React from "react";
import "./NavItem.css";

const navItem = (props) => {
  return (
    <li className={`NavItem ${props.className}`}>
      <span className="description">{props.description}</span>
      <span>
        {" "}
        <i className="fa fa-chevron-down" aria-hidden="true"></i>
      </span>
    </li>
  );
};

export default navItem;
