import React from "react";
import "./NavCard.css";

const navCard = (props) => {
  return (
    <div className={`NavCard ${props.className}`}>
      <ul>
        {props.items.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default navCard;
