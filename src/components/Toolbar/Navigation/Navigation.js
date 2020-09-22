import React from "react";
import NavItem from "./NavItem/NavItem";

const navigation = () => {
  const items = [
    "Software Development",
    "Why Intelliware",
    "Resources",
    "Careers",
  ];

  return items.map((item) => {
    return <NavItem key={item} description={item} />;
  });
};

export default navigation;
