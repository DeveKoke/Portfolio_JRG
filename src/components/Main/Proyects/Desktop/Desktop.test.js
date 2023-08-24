import React from "react";
import { shallow } from "enzyme";
import Desktop from "./Desktop";

describe("Desktop", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Desktop />);
    expect(wrapper).toMatchSnapshot();
  });
});
