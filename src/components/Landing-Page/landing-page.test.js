import React from "react";
import { shallow } from "enzyme";
import { LandingPage } from "./landing-page";
import configure from "../../setupTests";

describe("<LandingPage />", () => {
  it("Renders without crashing", () => {
    shallow(<LandingPage />);
  });
});
