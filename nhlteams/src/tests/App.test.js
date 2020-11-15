import React from "react";
import App from "../App";
import { findByTestAttr, checkProps } from "../testUtils/testUtils";
import { shallow } from "enzyme";

/**
 * Set up the App component
 * @function
 * @param {Null}
 */
const setup = () => shallow(<App />);

test("render App component without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});
