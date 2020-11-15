import React from "react";
import Team from "../landing/Team";
import { findByTestAttr, checkProps } from "../testUtils/testUtils";
import { shallow } from "enzyme";

const defaultProps = {
  teamPlayers: [
    {
      jerseyNumber: "55",
      person: {
        fullName: "Samuel Morin",
        id: 8474502,
      },
      position: {
        name: "Defenseman",
      },
    },
  ],
};
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Team {...setupProps} />);
};

test("render App component without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-test");
  expect(appComponent.length).toBe(1);
});

test("check that the props are working", () => {
  checkProps(Team, defaultProps);
});
