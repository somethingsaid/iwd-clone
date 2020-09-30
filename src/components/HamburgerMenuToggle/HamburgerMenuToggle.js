import React from "react";

const hamburgerMenuToggle = (props) => {
  return (
    <div onClick={props.clicked}>
      <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
    </div>
  );
};

export default hamburgerMenuToggle;
