import React from "react";
import NavItem from "./NavItem/NavItem";
import "./Navigation.css";

const navigation = () => {
  const items = [
    "Software Development",
    "Why Intelliware",
    "Resources",
    "Careers",
  ];

  return (
    <ul className="Navigation">
      {items.reverse().map((item) => {
        return <NavItem key={item} description={item} />;
      })}
    </ul>
  );
};

export default navigation;
