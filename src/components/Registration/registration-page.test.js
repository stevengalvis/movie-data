import React from "react";
import { shallow } from "enzyme";
import { RegistrationPage } from "./registration-page";
import configure from "../../setupTests";

describe("<RegistrationPage />", () => {
  it("Renders without crashing", () => {
    shallow(<RegistrationPage props={{}} />);
  });
});
