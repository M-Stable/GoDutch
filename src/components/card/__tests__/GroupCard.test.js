import React from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";

import GroupCard from "../GroupCard";
import Card, * as card from "../Card";

let component;

beforeEach(() => {
  component = shallow(
    <GroupCard groupName={"group"} moneyAmount={10} groupId={"123"} />
  );
});

test("it renders correctly", () => {
  const shallowRenderer = new ShallowRenderer();
  const snapshotComponent = shallowRenderer.render(<GroupCard />).toJSON();
  expect(snapshotComponent).toMatchSnapshot();
});

test("it contains card component", () => {
  expect(component.find(Card)).toHaveLength(1);
});

test("it contains NameText with correct text", () => {
  expect(component.find(card.NameText)).toHaveLength(1);
  expect(component.find(card.NameText).props().children).toEqual("group");
});

test("it contains MoneyText with correct text", () => {
  expect(component.find(card.MoneyText)).toHaveLength(1);
  expect(component.find(card.MoneyText).props().children).toEqual("$10.00");
});
