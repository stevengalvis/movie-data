import React from "react";
import { shallow } from "enzyme";
import { Login } from "./login";
import configure from "../../setupTests";

describe("<Login />", () => {
  it("Renders without crashing", () => {
    shallow(<Login props={{}} />);
  });
});
