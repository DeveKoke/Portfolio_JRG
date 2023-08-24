import React from "react";
import { shallow } from "enzyme";
import Portada from "./Portada";

describe("Portada", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Portada />);
    expect(wrapper).toMatchSnapshot();
  });
});
