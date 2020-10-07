import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Logo from "./Logo";

configure({ adapter: new Adapter() });

describe("<Logo />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Logo />);
  });

  it("should render a <picture>", () => {
    expect(wrapper.find("picture")).toHaveLength(1);
  });

  it("should render a <source> and an <img /> within <picture", () => {
    let picture = wrapper.find("picture");
    expect(picture.find("source")).toHaveLength(1);
    expect(picture.find("img")).toHaveLength(1);
  });
});
