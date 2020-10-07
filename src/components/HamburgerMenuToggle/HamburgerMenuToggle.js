import React from "react";

// TODO: still need to implement logic that will  toggle the full menu dropdown when clicking this
// right now, onCLick does nothing
const HamburgerMenuToggle = ({ clicked }) => (
  <div onClick={clicked}>
    <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
  </div>
);

export default HamburgerMenuToggle;
