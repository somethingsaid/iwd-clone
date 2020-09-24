import React from "react";
import "./ActionButton.css";

const actionButton = (props) => {
  return (
    <div className="ActionButton">
      <button>{props.btnText}</button>
    </div>
  );
};

export default actionButton;
