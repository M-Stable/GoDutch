import React from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";

import OrangeButton, * as orangeButton from "../OrangeButton";
import * as button from "../Button";

let componentEnabled;
let componentDisabled;

beforeEach(() => {
  componentEnabled = shallow(
    <OrangeButton text={"Login"} disabled={false} scaled={true} />
  );
  componentDisabled = shallow(
    <OrangeButton text={"Login"} disabled={true} scaled={true} />
  );
});

test("it renders correctly", () => {
  const shallowRenderer = new ShallowRenderer();
  const snapshotComponent = shallowRenderer.render(<OrangeButton />);
  expect(snapshotComponent).toMatchSnapshot();
});

test("it contains button container", () => {
  expect(componentEnabled.find(orangeButton.ButtonContainer)).toHaveLength(1);
  expect(
    componentEnabled.find(orangeButton.ButtonContainer).props().scaled
  ).toEqual(true);
  expect(
    componentEnabled.find(orangeButton.ButtonContainer).props().activeOpacity
  ).toEqual(0.2);
});

test("it contains correct text when disabled", () => {
  expect(componentDisabled.find(button.ButtonText)).toHaveLength(1);
  expect(componentDisabled.find(button.ButtonText).props().children).toEqual(
    "Login"
  );
});

test("it contains orange background when enabled", () => {
  expect(componentEnabled.find(orangeButton.Background)).toHaveLength(1);
  expect(componentEnabled.find(button.ButtonText)).toHaveLength(1);
  expect(componentEnabled.find(button.ButtonText).props().children).toEqual(
    "Login"
  );
});
