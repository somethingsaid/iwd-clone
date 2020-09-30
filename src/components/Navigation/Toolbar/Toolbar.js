import React, { Component } from "react";
import Logo from "../../Logo/Logo";
import Navigation from "../Navigation";
import ActionButton from "../../UI/ActionButton/ActionButton";
import HamburgerMenuToggle from "../../HamburgerMenuToggle/HamburgerMenuToggle";
import "./Toolbar.css";

class Toolbar extends Component {
  state = {
    showActions: true,
  };

  handleWindowResize = () => {
    this.setState({
      showActions: window.innerWidth >= 768,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  render() {
    let navigation = (
      <div className="Toolbar-navigation">
        <Navigation />
      </div>
    );
    let actionBtn = (
      <div className="Toolbar-action-button">
        <ActionButton btnText="CONTACT US" />
      </div>
    );
    let stackedMenuBtn = null;

    if (!this.state.showActions) {
      navigation = null;
      actionBtn = null;
      stackedMenuBtn = (
        <div className="Toolbar-action-button">
          <HamburgerMenuToggle />
        </div>
      );
    }

    return (
      <div className="Toolbar">
        <div className="Toolbar-logo">
          <Logo />
        </div>
        {navigation}
        {actionBtn}
        {stackedMenuBtn}
      </div>
    );
  }
}

export default Toolbar;