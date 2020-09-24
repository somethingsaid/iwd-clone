import React from "react";
import NavItem from "./NavItem/NavItem";
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
        return <NavItem key={item.main} description={item.main} />;
      })}
    </ul>
  );
};

export default navigation;
