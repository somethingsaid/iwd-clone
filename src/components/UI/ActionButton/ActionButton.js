import React from "react";
import classes from "./ActionButton.module.css";

const actionButton = (props) => {
  const arrow = props.arrow ? <i className="fa fa-arrow-right"></i> : null;
  return (
    <div className={classes.ActionButton}>
      <button className={classes[props.className]}>
        {props.btnText} {arrow}
      </button>
    </div>
  );
};

export default actionButton;
