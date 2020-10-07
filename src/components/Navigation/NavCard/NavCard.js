import React from "react";
import "./NavCard.css";

// TODO: implement nav card
const NavCard = ({ className, items }) => {
  return (
    <div className={`NavCard ${className}`}>
      <ul>
        {items.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default NavCard;
