import React from "react";
import "./NavCard.css";

// TODO: use object destructuring and
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
