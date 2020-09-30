import React from "react";
import classes from "./HamburgerMenuToggle.module.css";

const hamburgerMenuToggle = (props) => {
  return (
    <div className={classes.HamburgerMenuToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default hamburgerMenuToggle;
