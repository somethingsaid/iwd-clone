import React from "react";
import classes from "./ActionButton.module.css";

const actionButton = (props) => {
  return (
    <div className={classes.ActionButton}>
      <button>{props.btnText}</button>
    </div>
  );
};

export default actionButton;
