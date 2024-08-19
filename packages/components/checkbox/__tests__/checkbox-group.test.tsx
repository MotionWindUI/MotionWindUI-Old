import React from "react";
import { render } from "@testing-library/react";

import { Checkbox, CheckboxGroup, CheckboxGroupProps } from "../src";
import { MotionWindUIProvider } from "@motionwindui/provider";

const ProviderWrapper = ({ children }) => <MotionWindUIProvider>{children}</MotionWindUIProvider>;

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: ProviderWrapper, ...options });

describe("CheckboxGroup", () => {
  it("should render correctly", () => {
    const wrapper = customRender(<CheckboxGroup />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    customRender(<CheckboxGroup ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it("should render with a label", () => {
    const wrapper = customRender(<CheckboxGroup label="Label"></CheckboxGroup>);

    expect(wrapper.getByText("Label"));
  });

  it("should render with a description", () => {
    const wrapper = customRender(<CheckboxGroup description="Description" />);

    expect(wrapper.getByText("Description"));
  });

  it("should render with an error message if it is invalid", () => {
    const wrapper = customRender(<CheckboxGroup errorMessage="Error" isInvalid />);

    expect(wrapper.getByText("Error"));
  });

  it("should not render with an error message if it is not invalid", () => {
    const wrapper = customRender(<CheckboxGroup errorMessage="Error" />);

    expect(() => wrapper.getByText("Error")).toThrow();
  });

  it("should have children", () => {
    const wrapper = customRender(
      <CheckboxGroup>
        <Checkbox data-testid="child">Test Label</Checkbox>
      </CheckboxGroup>,
    );

    expect(wrapper.getAllByTestId("child")[0]);
  });

  it("should not have any child animate when disableAnimation is true", () => {
    const wrapper = customRender(
      <CheckboxGroup disableAnimation>
        <Checkbox data-testid="child">Test Label</Checkbox>
      </CheckboxGroup>,
    );

    const checkboxChildWrapper = wrapper
      .getAllByTestId("child")[0]
      .querySelector("span.before\\:box-border");

    expect(checkboxChildWrapper).not.toBeNull();

    expect(checkboxChildWrapper).toHaveClass("transition-none");
  });

  it("should have default selected values", () => {
    const Component = (props: CheckboxGroupProps) => {
      const defaultValues = ["dog", "cat", "bird"];

      return (
        <CheckboxGroup value={defaultValues} {...props}>
          <Checkbox value="dog">Dog</Checkbox>
          <Checkbox value="cat">Cat</Checkbox>
          <Checkbox value="fish">Fish</Checkbox>
          <Checkbox value="bird">Bird</Checkbox>
        </CheckboxGroup>
      );
    };

    const wrapper = customRender(<Component />);

    const checkboxList = wrapper.getAllByRole("checkbox");

    expect(checkboxList[0]).toBeChecked();
    expect(checkboxList[1]).toBeChecked();
    expect(checkboxList[2]).not.toBeChecked();
    expect(checkboxList[3]).toBeChecked();
  });
});
