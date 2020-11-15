import React from "react";
import MenuDrawer from "../landing/MenuDrawer";
import { findByTestAttr, checkProps } from "../testUtils/testUtils";
import { shallow } from "enzyme";

const defaultProps = {
  teams: [
    {
      name: "Ottawa Senators",
    },
  ],
};
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<MenuDrawer {...setupProps} />);
};

test("render App component without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-menu-drawer");
  expect(appComponent.length).toBe(1);
});

test("check that the props are working", () => {
  checkProps(MenuDrawer, defaultProps);
});
