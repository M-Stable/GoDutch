import React from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";

import InputField, { InputLabel, StyledInputField } from "../InputField";

const props = {
  label: "Email",
  onChange: jest.fn(),
  value: "",
  placeholder: "test placeholder",
  secure: false,
  isDark: true,
  isUserForm: false,
};

describe("Input Field", () => {
  let inputfield;
  beforeEach(() => {
    inputfield = shallow(<InputField {...props} />);
  });

  it("renders correctly", () => {
    const shallowRenderer = new ShallowRenderer();
    const snapshotComponent = shallowRenderer.render(<InputField />).toJSON();
    expect(snapshotComponent).toMatchSnapshot();
  });

  it("contains the correct label", () => {
    const inputlabel = inputfield.find(InputLabel);

    expect(inputlabel.render().text()).toEqual("Email");
  });

  it("contains the correct props if Email", () => {
    const styledInput = inputfield.find(StyledInputField);

    expect(styledInput.props().autoCapitalize).toEqual("none");
    expect(styledInput.props().keyboardType).toEqual("email-address");
  });

  it("contains the correct props if not Email", () => {
    const props = {
      label: "Name",
      onChange: jest.fn(),
      value: "",
      placeholder: "test placeholder",
      secure: false,
      isDark: true,
      isUserForm: false,
    };

    const inputfieldNoEmail = shallow(<InputField {...props} />);

    const styledInput = inputfieldNoEmail.find(StyledInputField);

    expect(styledInput.props().autoCapitalize).toEqual("sentences");
    expect(styledInput.props().keyboardType).toEqual("default");
  });
});
