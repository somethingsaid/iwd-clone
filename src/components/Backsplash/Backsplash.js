import React from "react";
import "./Backsplash.css";

const backsplash = () => {
  const src =
    "https://www.intelliware.com/wp-content/uploads/2019/11/Website20Video20Stabalized-21.mp4";
  return (
    <div className="Backsplash">
      <video src={src} className="Video" muted loop autoPlay></video>
      <div className="overlay">
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

export default backsplash;
