import React from "react";
import classes from "./VideoBackground.module.css";

const videoBackground = () => {
  const src =
    "https://www.intelliware.com/wp-content/uploads/2019/11/Website20Video20Stabalized-21.mp4";
  return (
    <div className={classes.VideoBackground}>
      <video src={src} className={classes.video} muted loop autoPlay></video>
      <div className={[classes.overlay, classes.shade].join(" ")}>&nbsp;</div>
      <div className={[classes.overlay, classes.textContainer].join(" ")}>
        <h1>Intelliware develops enterprise-grade software solutions</h1>
        <h3>
          We build software that enables organizations in complex industries to
          achieve their business objectives. Invest in enterprise-grade software
          solutions that deliver substantive business value and enduring
          competitive advantage.
        </h3>
      </div>
    </div>
  );
};

export default videoBackground;
