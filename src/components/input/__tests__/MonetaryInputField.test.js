import React from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";

import MonetaryInputField, { InputLabel, Error } from "../MonetaryInputField";

describe("Monetary Input Field", () => {
  let inputfield;
  const props = {
    label: "Email",
    onChange: jest.fn(),
    value: "",
    placeholder: "test placeholder",
    isDark: true,
    error: false,
  };
  beforeEach(() => {
    inputfield = shallow(<MonetaryInputField {...props} />);
  });

  it("renders correctly", () => {
    const shallowRenderer = new ShallowRenderer();
    const snapshotComponent = shallowRenderer.render(<MonetaryInputField />).toJSON();
    expect(snapshotComponent).toMatchSnapshot();
  });

  it("contains the correct label", () => {
    const inputlabel = inputfield.find(InputLabel);
    const styledInput = inputfield.find(Error);

    expect(inputlabel.render().text()).toEqual("Email");
    expect(styledInput.exists).toBe(true);
  });

  it("contains no label", () => {
    const propsNoLabel = {
      label: "",
      onChange: jest.fn(),
      value: "",
      placeholder: "test placeholder",
      isDark: true,
      error: false,
    };
    const inputfieldNoLabel = shallow(<MonetaryInputField {...propsNoLabel} />);

    expect(inputfieldNoLabel.find(InputLabel).exists()).toBe(false);
  });

  it("renders error text properly", () => {
    const propsError = {
      label: "Email",
      onChange: jest.fn(),
      value: "",
      placeholder: "test placeholder",
      isDark: true,
      error: true,
    };
    const inputfieldError = shallow(<MonetaryInputField {...propsError} />);
    const styledInput = inputfieldError.find(Error);

    expect(styledInput.exists).toBe(true);
    expect(styledInput.render().text()).toEqual("Invalid number");
  });
});
