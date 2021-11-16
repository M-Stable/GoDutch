import React from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";

import OweInfoBox, * as oweInfoBox from "../OweInfoBox";

let component;

beforeEach(() => {
  component = shallow(<OweInfoBox moneyAmount={10} />);
});

test("it renders correctly", () => {
  const shallowRenderer = new ShallowRenderer();
  const snapshotComponent = shallowRenderer.render(<OweInfoBox />).toJSON();
  expect(snapshotComponent).toMatchSnapshot();
});

test("it contains Container component", () => {
  expect(component.find(oweInfoBox.Container)).toHaveLength(1);
});

test("it contains MoneyText with correct text", () => {
  expect(component.find(oweInfoBox.MoneyText)).toHaveLength(1);
  expect(component.find(oweInfoBox.MoneyText).props().children).toEqual(
    "$10.00"
  );
});
