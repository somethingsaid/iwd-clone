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
      {/* TODO */}
      <h1>Placeholder for "News, Updates, Insights" section</h1>
      <h1>
        Placeholder for "Need to transform the way you plan, build?" section
      </h1>
      <h1>
        Placeholder for footer section - "Our Services, contact us, social media
        links, copyright"
      </h1>
      {/* end: TODO */}
    </div>
  );
};

export default home;
