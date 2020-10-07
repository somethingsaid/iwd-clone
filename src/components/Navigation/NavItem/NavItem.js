import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import classes from "./NavItem.module.css";

// TODO: create floating navigation cards for secondary headers
const NavItem = ({ description }) => {
  return (
    <Aux>
      <span className={classes.NavItemTitle}>
        {description} <i className="fa fa-chevron-down" aria-hidden="true"></i>
      </span>
    </Aux>
  );
};

export default NavItem;
