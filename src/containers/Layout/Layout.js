import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Backsplash from "../../components/Backsplash/Backsplash";
import "./Layout.css";

function Layout() {
  return (
    <div className="Layout">
      <Toolbar />
      <Backsplash />
    </div>
  );
}

export default Layout;
