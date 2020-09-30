import React from "react";
import classes from "./ResolvingComplexity.module.css";

const resolvingComplexity = () => {
  return (
    <div className={classes.ImageBackground}>
      <div className={classes.description}>
        <h2>Resolving complexity is our specialty</h2>
        <p>
          The quality of Intelliware’s work delivers meaningful business value
          and enduring competitive advantage for the clients we serve. Join our
          roster of clients and modernize the way you do business.
        </p>
        <a
          href="https://www.intelliware.com/focus-areas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
      <div className={classes.placeholder}></div>
    </div>
  );
};

export default resolvingComplexity;
