import React from "react";

import classes from "./Service.module.css";

const service = (props) => {
  let icon = <i className="fa fa-rocket"></i>;

  return (
    <div className={classes.Service}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.text}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default service;
