import React from "react";
import { shallow } from "enzyme";
import Interests from "./Interests";

describe("Interests", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Interests />);
    expect(wrapper).toMatchSnapshot();
  });
});
