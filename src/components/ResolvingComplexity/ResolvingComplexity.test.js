import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

import ResolvingComplexity from "./ResolvingComplexity";
import LearnMore from "../UI/LearnMore/LearnMore";

configure({ adapter: new Adapter() });

describe("<ResolvingComplexity/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResolvingComplexity />);
  });

  it("should render a <h1>, <h3>, and a <LearnMore />", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
    expect(wrapper.find("h3")).toHaveLength(1);
    expect(wrapper.find(LearnMore)).toHaveLength(1);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<ResolvingComplexity />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
