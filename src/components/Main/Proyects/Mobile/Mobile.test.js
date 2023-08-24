import React from "react";
import { shallow } from "enzyme";
import Mobile from "./Mobile";

describe("Mobile", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Mobile />);
    expect(wrapper).toMatchSnapshot();
  });
});
