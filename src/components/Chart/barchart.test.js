import React from "react";
import { shallow } from "enzyme";
import { BarChart } from "./barchart";
import configure from "../../setupTests";

describe("<BarChart />", () => {
  it("Renders without crashing", () => {
    shallow(<BarChart movie={[]} />);
  });
});
