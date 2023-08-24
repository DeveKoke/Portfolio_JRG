import React from "react";
import { shallow } from "enzyme";
import Proyects from "./Proyects";

describe("Proyects", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Proyects />);
    expect(wrapper).toMatchSnapshot();
  });
});
