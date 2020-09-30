import React from "react";
import NavItem from "./NavItem/NavItem";
import classes from "./Navigation.module.css";

const navigation = () => {
  const items = [
    {
      main: "Software Development",
      secondary: [
        "Our Services",
        "Focus Areas",
        "The Intelliware Approach",
        "Success Stories",
      ],
    },
    {
      main: "Why Intelliware",
      secondary: [
        "Our Agile Journey",
        "Technology Leadership",
        "Community Initiatives",
        "Leadership Team",
      ],
    },
    {
      main: "Resources",
      secondary: [
        "News, Updates and Insights",
        "Agile Resources",
        "Our Research",
      ],
    },
    {
      main: "Careers",
      secondary: ["Why Work Here", "Current Opportunities", "Applicant FAQs"],
    },
  ];

  return (
    <ul className={classes.Navigation}>
      {items.map((item) => {
        return (
          <li key={item.main} className={classes.li}>
            <NavItem className="dropdown" description={item.main} />
            {/* <NavCard className="dropdown-content" items={item.secondary} /> */}
          </li>
        );
      })}
    </ul>
  );
};

export default navigation;
