import React from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";

import Card, * as card from "../Card";

let component;

beforeEach(() => {
  component = shallow(<Card cardHeight={"110px"} cardWidth={"48%"} />);
});

test("it renders correctly", () => {
  const shallowRenderer = new ShallowRenderer();
  const snapshotComponent = shallowRenderer.render(<Card />).toJSON();
  expect(snapshotComponent).toMatchSnapshot();
});

test("it contains card container component with correct props", () => {
  expect(component.find(card.CardContainer)).toHaveLength(1);
  expect(component.find(card.CardContainer).props().cardHeight).toEqual(
    "110px"
  );
  expect(component.find(card.CardContainer).props().cardWidth).toEqual("48%");
});

test("it contains GreenBar", () => {
  expect(component.find(card.GreenBar)).toHaveLength(1);
});
