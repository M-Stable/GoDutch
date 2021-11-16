import React from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";

import AddExpenseButton from "../AddExpenseButton";
import OrangeButton from "../OrangeButton";

let component;

beforeEach(() => {
  component = shallow(<AddExpenseButton disabled={true} />);
});

test("it renders correctly", () => {
  const shallowRenderer = new ShallowRenderer();
  const snapshotComponent = shallowRenderer.render(<AddExpenseButton />);
  expect(snapshotComponent).toMatchSnapshot();
});

test("it contains orange button", () => {
  expect(component.find(OrangeButton)).toHaveLength(1);
  expect(component.find(OrangeButton).props().text).toEqual("Add Expense");
  expect(component.find(OrangeButton).props().disabled).toEqual(true);
});
