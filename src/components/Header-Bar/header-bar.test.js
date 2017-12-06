import React from "react";
import { shallow } from "enzyme";
import { HeaderBar } from "./header-bar";
import configure from "../../setupTests";

describe("<HeaderBar />", () => {
  it("Renders without crashing", () => {
    shallow(<HeaderBar props={{}} />);
  });
});
