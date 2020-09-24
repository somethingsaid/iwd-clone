import React from "react";
import "./Backsplash.css";

const backsplash = () => {
  const src =
    "https://www.intelliware.com/wp-content/uploads/2019/11/Website20Video20Stabalized-21.mp4";
  return <video src={src} className="Backsplash" muted loop autoPlay></video>;
};

export default backsplash;
