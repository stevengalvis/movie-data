import React from "react";
import configure from "../../setupTests";
import { shallow } from "enzyme";

import { Card } from "./card";

describe("<Card />", () => {
  it("Renders without crashing", () => {
    const dispatch = jest.fn();
    shallow(<Card dispatch={dispatch} />);
  });
});
