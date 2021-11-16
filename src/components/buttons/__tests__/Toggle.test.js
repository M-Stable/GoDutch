import React from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";

import Toggle, * as toggle from "../Toggle";

let component;

beforeEach(() => {
  component = shallow(<Toggle action={"Create"} />);
});

test("it renders correctly", () => {
  const shallowRenderer = new ShallowRenderer();
  const snapshotComponent = shallowRenderer.render(<Toggle />);
  expect(snapshotComponent).toMatchSnapshot();
});

test("it's subcomponent renders correctly", () => {
  const shallowRenderer = new ShallowRenderer();
  const snapshotComponent = shallowRenderer.render(<ToggleButton />);
  expect(snapshotComponent).toMatchSnapshot();
});

test("it contains 2 Toggle buttons", () => {
  expect(component.find(toggle.ToggleButton)).toHaveLength(2);
  expect(component.find(toggle.ToggleButton).at(0).props().text).toEqual(
    "Create"
  );
  expect(component.find(toggle.ToggleButton).at(0).props().action).toEqual(
    "Create"
  );
  expect(component.find(toggle.ToggleButton).at(1).props().text).toEqual(
    "Join"
  );
  expect(component.find(toggle.ToggleButton).at(1).props().action).toEqual(
    "Create"
  );
});
