import React from "react";
import Logo from "./Logo/Logo";
import NavItem from "./NavItem/NavItem";
import ActionButton from "../ActionButton/ActionButton";

const toolbar = () => {
  return (
    <div>
      <Logo />
      <NavItem description="Software Development" />
      <NavItem description="Why Intelliware" />
      <NavItem description="Resourece" />
      <NavItem description="Careers" />
      <ActionButton btnText="Contact Us" />
    </div>
  );
};

export default toolbar;
