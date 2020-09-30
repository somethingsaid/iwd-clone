import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import classes from "./NavItem.module.css";

// TODO: use object destructing
const NavItem = (props) => {
  return (
    <Aux>
      <span className={classes.NavItemTitle}>
        {props.description}{" "}
        <i className="fa fa-chevron-down" aria-hidden="true"></i>
      </span>
    </Aux>
  );
};

export default NavItem;
