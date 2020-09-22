import React from "react";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import ActionButton from "../ActionButton/ActionButton";
import "./Toolbar.css";

const toolbar = () => {
  return (
    <div className="Toolbar">
      <Logo />
      <Navigation />
      <ActionButton btnText="Contact Us" />
    </div>
  );
};

export default toolbar;
