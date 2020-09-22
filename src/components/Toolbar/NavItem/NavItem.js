import React from "react";
import "./NavItem.css";

const navItem = (props) => {
  return <p className="NavItem">{props.description}</p>;
};

export default navItem;
