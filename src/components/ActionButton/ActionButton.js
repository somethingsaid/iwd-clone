import React from "react";
import "./ActionButton.css";

const actionButton = (props) => {
  return <button className="ActionButton">{props.btnText}</button>;
};

export default actionButton;
