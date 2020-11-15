import React from "react";
import Logo from "../Logos";
import { findByTestAttr, checkProps } from "../testUtils/testUtils";
import { shallow } from "enzyme";

/**
 * Set up default props
 * @variable
 */
const defaultProps = {
  logo: "dal",
};

/**
 * Get MenuDrawer component with props
 * @function
 * @param {Null}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Logo {...setupProps} />);
};

test("render App component without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-logo");
  expect(appComponent.length).toBe(1);
});

test("check that the props are working", () => {
  checkProps(Logo, defaultProps);
});
