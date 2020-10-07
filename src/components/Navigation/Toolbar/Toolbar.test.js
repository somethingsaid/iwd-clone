import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Toolbar from "./Toolbar";
import Logo from "../../Logo/Logo";
import HamburgerMenuToggle from "../../HamburgerMenuToggle/HamburgerMenuToggle";
import Navigation from "../Navigation";
import ActionButton from "../../UI/ActionButton/ActionButton";

configure({ adapter: new Adapter() });

describe("<Toolbar />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Toolbar />);
  });

  it("should render a <Logo />", () => {
    expect(wrapper.find(Logo)).toHaveLength(1);
  });

  it("should render a <HamburgerMenuToggle />", () => {
    wrapper.setState({ showActions: false });
    expect(wrapper.find(HamburgerMenuToggle)).toHaveLength(1);
  });

  it("should render <Navigation /> and <ActionButton />", () => {
    wrapper.setState({ showActions: true });
    expect(wrapper.find(Navigation)).toHaveLength(1);
    expect(wrapper.find(ActionButton)).toHaveLength(1);
  });
});
