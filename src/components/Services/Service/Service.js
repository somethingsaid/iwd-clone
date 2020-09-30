import React from "react";

import classes from "./Service.module.css";

const service = (props) => {
  let iconClass = "fa ";
  switch (props.icon) {
    case "Wrench":
      iconClass += "fa-wrench";
      break;
    case "PoliceStation":
      iconClass += "fa-university";
      break;
    case "Hour":
      iconClass += "fa-hourglass-start";
      break;
    case "DollarSign":
      iconClass += "fa-usd";
      break;
    case "ApprovedWindow":
      iconClass += "fa-thumbs-o-up";
      break;
    case "Monitorphone":
      iconClass += "fa-desktop";
      break;
    default:
      iconClass = "fa fa-rocket";
  }

  return (
    <div className={classes.Service}>
      <div className={classes.icon}>
        <i className={iconClass} aria-hidden="true"></i>
      </div>
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
