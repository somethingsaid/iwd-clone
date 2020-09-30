import React from "react";
import Aux from "../Aux/Aux";
import "./Layout.css";

function Layout(props) {
  return (
    // <div className="Layout">
    //   <Toolbar />
    //   <Backsplash />
    // </div>
    <Aux>
      <main>{props.children}</main>
    </Aux>
  );
}

export default Layout;
