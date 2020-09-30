import React from "react";
import LearnMore from "../../UI/LearnMore/LearnMore";

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
        <LearnMore url={props.url} />
      </div>
    </div>
  );
};

export default service;
