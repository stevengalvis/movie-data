import React from "react";
import { shallow } from "enzyme";
import { SearchBox } from "./search-box";
import configure from "../../setupTests";

describe("<SearchBox />", () => {
  it("Renders without crashing", () => {
    let movies = [];
    shallow(<SearchBox movies={movies} />);
  });
});
