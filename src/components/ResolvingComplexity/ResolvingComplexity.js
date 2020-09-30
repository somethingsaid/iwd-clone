import React from "react";
import LearnMore from "../UI/LearnMore/LearnMore";
import classes from "./ResolvingComplexity.module.css";

const resolvingComplexity = () => {
  return (
    <div className={classes.ImageBackground}>
      <div className={classes.description}>
        <h1>Resolving complexity is our specialty</h1>
        <h3>
          The quality of Intelliware’s work delivers meaningful business value
          and enduring competitive advantage for the clients we serve. Join our
          roster of clients and modernize the way you do business.
        </h3>
        <LearnMore url="https://www.intelliware.com/focus-areas/" />
      </div>
      <div className={classes.placeholder}></div>
    </div>
  );
};

export default resolvingComplexity;
