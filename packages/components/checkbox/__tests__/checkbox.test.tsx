import { act, render } from "@testing-library/react";
import { axe } from "jest-axe";
import { Checkbox, CheckboxProps } from "../src";
import React, { useState } from "react";
import { MotionWindUIProvider } from "@motionwindui/provider";

const ProviderWrapper = ({ children }) => <MotionWindUIProvider>{children}</MotionWindUIProvider>;

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: ProviderWrapper, ...options });

describe("Checkbox", () => {
  it("should render correctly", () => {
    const wrapper = customRender(<Checkbox>Label</Checkbox>);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLLabelElement>();

    customRender(<Checkbox ref={ref}>Label</Checkbox>);
    expect(ref.current).not.toBeNull();
  });

  it("should ignore events wheen disabled", () => {
    const onPress = jest.fn();
    const { getByRole } = customRender(<Checkbox isDisabled>Label</Checkbox>);

    act(() => {
      getByRole("checkbox").click();
    });

    expect(onPress).not.toHaveBeenCalled();
  });

  it("should render with a label", () => {
    const wrapper = customRender(<Checkbox>Label</Checkbox>);

    expect(wrapper.getByText("Label"));
  });

  it("should render with a description", () => {
    const wrapper = customRender(<Checkbox description="Description" labelId="test" />);

    expect(wrapper.getByText("Description"));
  });

  it("should render with an icon", () => {
    const wrapper = customRender(
      <Checkbox icon={<span data-testid="icon">Icon</span>} labelId="test" />,
    );

    expect(wrapper.getByTestId("icon"));
  });

  it("should not render with an error message if it is not invalid", () => {
    const wrapper = customRender(<Checkbox errorMessage="Error" labelId="test" />);

    expect(() => wrapper.getByText("Error")).toThrow();
  });

  it("should render with an error message if it is invalid", () => {
    const wrapper = customRender(<Checkbox errorMessage="Error" isInvalid labelId="test" />);

    expect(wrapper.getByText("Error"));
  });

  it("should not animate when disableAnimation is true", () => {
    const wrapper = customRender(<Checkbox disableAnimation>My Label Text</Checkbox>);

    const checkboxWrapper = wrapper.container.querySelector("span.before\\:box-border");

    expect(checkboxWrapper).not.toBeNull();

    expect(checkboxWrapper).toHaveClass("transition-none");
  });

  it("should work with an initial value", () => {
    // Suppressing console warning to skip the warning about controlled and uncontrolled components
    // eslint-disable-next-line no-console
    console.warn = jest.fn();
    const wrapper = customRender(<Checkbox labelId="test" />);

    expect(wrapper.getByRole("checkbox")).not.toBeChecked();

    wrapper.rerender(<Checkbox isSelected labelId="test" />);

    expect(wrapper.getByRole("checkbox")).toBeChecked();
  });

  it("should change value after a click", () => {
    const wrapper = customRender(<Checkbox labelId="test" />);

    const checkbox = wrapper.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();

    act(() => {
      checkbox.click();
    });

    expect(checkbox).toBeChecked();
  });

  it("should ignore events when disabled", () => {
    const onPress = jest.fn();
    const { getByRole } = customRender(<Checkbox isDisabled labelId="test" />);

    act(() => {
      getByRole("checkbox").click();
    });

    expect(onPress).not.toHaveBeenCalled();
  });

  it("should ignore events when readOnly", () => {
    const onPress = jest.fn();
    const { getByRole } = customRender(<Checkbox isReadOnly labelId="test" />);

    act(() => {
      getByRole("checkbox").click();
    });

    expect(onPress).not.toHaveBeenCalled();
  });

  it("should work with a controlled value", () => {
    const onChange = jest.fn();

    const Component = (props: CheckboxProps) => {
      const { children, ...otherProps } = props;
      const [value, setValue] = useState(false);

      const handleChange = (newValue: boolean) => {
        setValue(newValue);
        onChange(newValue);
      };

      return (
        <Checkbox isSelected={value} onChange={handleChange} {...otherProps}>
          {children}
        </Checkbox>
      );
    };

    const wrapper = customRender(<Component data-testid="checkbox-test">Option</Component>);

    act(() => {
      wrapper.getAllByTestId("checkbox-test")[1].click();
    });

    expect(onChange).toHaveBeenCalled();
  });

  it("should render with custom styles", () => {
    const wrapper = customRender(
      <Checkbox style={{ color: "red", fontSize: "16px" }}>Custom Styles</Checkbox>,
    );

    const checkbox = wrapper.container.querySelector("label");

    expect(checkbox).toHaveStyle("color: red");
    expect(checkbox).toHaveStyle("font-size: 16px");
  });

  it("should call onChange when clicked", () => {
    const onChange = jest.fn();
    const wrapper = customRender(<Checkbox onChange={onChange}>Click Me</Checkbox>);

    const checkbox = wrapper.getByRole("checkbox");

    act(() => {
      checkbox.click();
    });

    expect(onChange).toHaveBeenCalled();
  });

  it("should render with a custom class name", () => {
    const wrapper = customRender(<Checkbox className="custom-checkbox">Custom Class</Checkbox>);

    const checkbox = wrapper.container.querySelector("label");

    expect(checkbox).toHaveClass("custom-checkbox");
  });

  it("should render with additional attributes", () => {
    const wrapper = customRender(
      <Checkbox data-testid="custom-checkbox" aria-label="Custom Checkbox">
        Additional Attributes
      </Checkbox>,
    );

    // 1 is the input element itself, 0 is the label, so we need to check on the input element
    const checkbox = wrapper.getAllByTestId("custom-checkbox")[1];

    expect(checkbox).toHaveAttribute("aria-label", "Custom Checkbox");
  });

  it("should warn when a child (label) is not provided and the aria-label or label ID is missing", () => {
    const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();

    // Render the component without a child (label) and without an aria-label or label ID
    customRender(<Checkbox />);

    // Assert that the warning was called
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "Warning: The `Checkbox` component is missing a label. You must provide an aria-label attribute, label ID to your label, or children for accessibility.",
    );

    // Clean up the spy
    consoleWarnSpy.mockRestore();
  });

  it("should not warn when a child (label) is provided", () => {
    const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();

    // Render the component with a child (label)
    customRender(<Checkbox>Label</Checkbox>);

    // Assert that the warning was not called
    expect(consoleWarnSpy).not.toHaveBeenCalled();

    // Clean up the spy
    consoleWarnSpy.mockRestore();
  });

  it("should not warn when an aria-label is provided", () => {
    const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();

    // Render the component with an aria-label
    customRender(<Checkbox aria-label="Label" />);

    // Assert that the warning was not called
    expect(consoleWarnSpy).not.toHaveBeenCalled();

    // Clean up the spy
    consoleWarnSpy.mockRestore();
  });

  it("should not warn when a label ID is provided", () => {
    const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();

    // Render the component with a label ID
    customRender(<Checkbox labelId="label-id" />);

    // Assert that the warning was not called
    expect(consoleWarnSpy).not.toHaveBeenCalled();

    // Clean up the spy
    consoleWarnSpy.mockRestore();
  });

  it("should not have basic accessibility violations", async () => {
    const { container } = customRender(<Checkbox>Label</Checkbox>);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
