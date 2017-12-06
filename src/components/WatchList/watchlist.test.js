import React from "react";
import { shallow } from "enzyme";
import { Watchlist } from "./watchlist";
import configure from "../../setupTests";

describe("<Watchlist />", () => {
  it("Renders without crashing", () => {
    const dispatch = jest.fn;
    shallow(<Watchlist dispatch={dispatch} />);
  });
});
