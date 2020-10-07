import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import HamburgerMenuToggle from "./HamburgerMenuToggle";

configure({ adapter: new Adapter() });

describe("<HamburgerMenuToggle />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HamburgerMenuToggle />);
  });

  it("should render a font-awesome icon with fa-bars class", () => {
    expect(wrapper.find("i.fa-bars")).toHaveLength(0);
  });
});
