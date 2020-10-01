import React from "react";
import LearnMore from "../../UI/LearnMore/LearnMore";

import classes from "./SuccessStory.module.css";

const SuccessStory = (props) => {
  return (
    <div className={classes.SuccessStory}>
      <div className={classes.imageContainer}>
        <picture>
          <source type="image/png" />
          <img src={props.img} alt={props.text} />
        </picture>
      </div>
      <div className={classes.textContainer}>
        <h1>{props.text}</h1>
        <LearnMore url={props.url} />
      </div>
    </div>
  );
};

export default SuccessStory;
