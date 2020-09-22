import React from "react";
import Logo from "./Logo/Logo";
import NavItem from "./NavItem/NavItem";
import ContactUs from "../ContactUs/ContactUs";

const toolbar = () => {
  return (
    <div>
      <Logo />
      <NavItem description="Software Development" />
      <NavItem description="Why Intelliware" />
      <NavItem description="Resourece" />
      <NavItem description="Careers" />
      <ContactUs />
    </div>
  );
};

export default toolbar;
