import React from "react";
import { shallow } from "enzyme";
import { HorizontalBarChart } from "./horizontalbarchart";
import configure from "../../setupTests";

describe("<HorizontalBarChart />", () => {
  it("Renders without crashing", () => {
    let similarMovies = [];
    shallow(<HorizontalBarChart similarMovies={similarMovies} />);
  });
});
