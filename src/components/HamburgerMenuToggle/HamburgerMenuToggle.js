import React from "react";

// TODO: use object destructing when you can and dont need the return
const HamburgerMenuToggle = ({ clicked }) => (
  <div onClick={clicked}>
    <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
  </div>
);

export default HamburgerMenuToggle;
