import React from "react";
import { shallow } from "enzyme";
import Input from "./input";
import configure from "../../setupTests";

describe("<Input />", () => {
  it("Renders without crashing", () => {
    const touched = true;
    const name = "firstName";
    shallow(<Input meta={{ touched: touched }} input={{ name: name }} />);
  });
});
