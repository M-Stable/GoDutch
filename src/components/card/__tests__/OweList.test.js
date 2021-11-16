import React from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";

import OweList, * as oweList from "../OweList";

let component;

beforeEach(() => {
  component = shallow(
    <OweList
      oweArray={[
        { userId: "123", name: "name", netAmount: 10, transactions: [] },
        { userId: "456", name: "nameV2", netAmount: 20, transactions: [] },
      ]}
    />
  );
});

test("it renders correctly", () => {
  const shallowRenderer = new ShallowRenderer();
  const snapshotComponent = shallowRenderer.render(<OweList />).toJSON();
  expect(snapshotComponent).toMatchSnapshot();
});

test("it contains OweListItem component", () => {
  expect(component.find(oweList.OweListItem)).toHaveLength(2);
});
