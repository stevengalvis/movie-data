import React from "react";
import { shallow } from "enzyme";
import { UserScore } from "./user-score";
import configure from "../../setupTests";

describe("<UserScore />", () => {
  it("Renders without crashing", () => {
    shallow(<UserScore />);
  });
});
