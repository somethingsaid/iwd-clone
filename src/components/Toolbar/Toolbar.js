import React from "react";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import ActionButton from "../ActionButton/ActionButton";
import "./Toolbar.css";

const toolbar = () => {
  return (
    <div className="Toolbar">
      <div className="Toolbar-logo">
        <Logo />
      </div>
      <div className="Toolbar-navigation">
        <Navigation />
      </div>
      <div className="Toolbar-action-button">
        <ActionButton btnText="CONTACT US" />
      </div>
    </div>
  );
};

export default toolbar;
