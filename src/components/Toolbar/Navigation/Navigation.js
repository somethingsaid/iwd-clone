import React from "react";
import Aux from "../../../hoc/Aux";
import NavItem from "./NavItem/NavItem";
import NavCard from "./NavCard/NavCard";
import "./Navigation.css";

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
    <ul className="Navigation">
      {items.reverse().map((item) => {
        return (
          <Aux key={item.main}>
            <NavItem className="dropdown" description={item.main} />
            <NavCard className="dropdown-content" items={item.secondary} />
          </Aux>
        );
      })}
    </ul>
  );
};

export default navigation;
