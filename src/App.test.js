import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import configure from "./setupTests";

import { shallow, mount } from "enzyme";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    shallow(<App />, div);
  });
});
