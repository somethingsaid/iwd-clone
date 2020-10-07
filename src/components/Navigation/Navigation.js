import React from "react";
import NavItem from "./NavItem/NavItem";

import classes from "./Navigation.module.css";

import { navigationItems } from "./NavigationContents";

const Navigation = () => {
  return (
    <ul className={classes.Navigation}>
      {navigationItems.map((item) => {
        return (
          <li key={item.main} className={classes.li}>
            <NavItem className="dropdown" description={item.main} />
            {/* TODO: <NavCard className="dropdown-content" items={item.secondary} /> */}
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
