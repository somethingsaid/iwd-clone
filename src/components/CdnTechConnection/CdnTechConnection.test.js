import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CdnTechConnection from "./CdnTechConnection";
import ActionButton from "../UI/ActionButton/ActionButton";

configure({ adapter: new Adapter() });

describe("<CdnTechConnection />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CdnTechConnection />);
  });

  it("should render a <h1>, <p>, <ActionButton />, and an <img />", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
    expect(wrapper.find("p")).toHaveLength(1);
    expect(wrapper.find(ActionButton)).toHaveLength(1);
    expect(wrapper.find("img")).toHaveLength(1);
  });
});
