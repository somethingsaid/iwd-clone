import React from "react";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import VideoBackground from "../../components/VideoBackground/VideoBackground";

import classes from "./Home.module.css";

const home = () => {
  return (
    <div className={classes.Home}>
      <Toolbar />
      <VideoBackground />
    </div>
  );
};

export default home;
