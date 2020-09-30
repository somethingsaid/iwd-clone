import React from "react";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import VideoBackground from "../../components/VideoBackground/VideoBackground";
import CdnTechConnection from "../../components/CdnTechConnection/CdnTechConnection";
import Services from "../../components/Services/Services";
import ResolvingComplexity from "../../components/ResolvingComplexity/ResolvingComplexity";
import SuccessStories from "../../components/SuccessStories/SuccessStories";

import classes from "./Home.module.css";

const home = () => {
  return (
    <div className={classes.Home}>
      <Toolbar />
      <VideoBackground />
      <CdnTechConnection />
      <Services />
      <ResolvingComplexity />
      <SuccessStories />
    </div>
  );
};

export default home;
