import { act, render } from "@testing-library/react";
import { Checkbox, CheckboxProps } from "../src";
import React, { useState } from "react";
import { MotionWindUIProvider } from "@motionwindui/provider";

const ProviderWrapper = ({ children }) => <MotionWindUIProvider>{children}</MotionWindUIProvider>;

describe("Checkbox", () => {
  it("should render correctly", () => {
    const wrapper = render(<Checkbox />, { wrapper: ProviderWrapper });

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLLabelElement>();

    render(<Checkbox ref={ref} />, { wrapper: ProviderWrapper });
    expect(ref.current).not.toBeNull();
  });

  it("should ignore events wheen disabled", () => {
    const onPress = jest.fn();
    const { getByRole } = render(<Checkbox isDisabled />, { wrapper: ProviderWrapper });

    act(() => {
      getByRole("checkbox").click();
    });

    expect(onPress).not.toHaveBeenCalled();
  });

  it("should render with a label", () => {
    const wrapper = render(<Checkbox>Label</Checkbox>, { wrapper: ProviderWrapper });

    expect(wrapper.getByText("Label"));
  });

  it("should render with a description", () => {
    const wrapper = render(<Checkbox description="Description" />, { wrapper: ProviderWrapper });

    expect(wrapper.getByText("Description"));
  });

  it("should render with an icon", () => {
    const wrapper = render(<Checkbox icon={<span data-testid="icon">Icon</span>} />, {
      wrapper: ProviderWrapper,
    });

    expect(wrapper.getByTestId("icon"));
  });

  it("should not render with an error message if it is not invalid", () => {
    const wrapper = render(<Checkbox errorMessage="Error" />, {
      wrapper: ProviderWrapper,
    });

    expect(() => wrapper.getByText("Error")).toThrow();
  });

  it("should render with an error message if it is invalid", () => {
    const wrapper = render(<Checkbox errorMessage="Error" isInvalid />, {
      wrapper: ProviderWrapper,
    });

    expect(wrapper.getByText("Error"));
  });

  it("should not animate when disableAnimation is true", () => {
    const wrapper = render(<Checkbox disableAnimation>My Label Text</Checkbox>, {
      wrapper: ProviderWrapper,
    });

    const checkboxWrapper = wrapper.container.querySelector("span.before\\:box-border");

    expect(checkboxWrapper).not.toBeNull();

    expect(checkboxWrapper).toHaveClass("transition-none");
  });

  it("should work with an initial value", () => {
    // Suppressing console warning to skip the warning about controlled and uncontrolled components
    // eslint-disable-next-line no-console
    console.warn = jest.fn();
    const wrapper = render(<Checkbox />, { wrapper: ProviderWrapper });

    expect(wrapper.getByRole("checkbox")).not.toBeChecked();

    wrapper.rerender(<Checkbox isSelected />);

    expect(wrapper.getByRole("checkbox")).toBeChecked();
  });

  it("should change value after a click", () => {
    const wrapper = render(<Checkbox />, { wrapper: ProviderWrapper });

    const checkbox = wrapper.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();

    act(() => {
      checkbox.click();
    });

    expect(checkbox).toBeChecked();
  });

  it("should ignore events when disabled", () => {
    const onPress = jest.fn();
    const { getByRole } = render(<Checkbox isDisabled />, { wrapper: ProviderWrapper });

    act(() => {
      getByRole("checkbox").click();
    });

    expect(onPress).not.toHaveBeenCalled();
  });

  it("should ignore events when readOnly", () => {
    const onPress = jest.fn();
    const { getByRole } = render(<Checkbox isReadOnly />, { wrapper: ProviderWrapper });

    act(() => {
      getByRole("checkbox").click();
    });

    expect(onPress).not.toHaveBeenCalled();
  });

  it("should work with a controlled value", () => {
    const onChange = jest.fn();

    const Component = (props: CheckboxProps) => {
      const [value, setValue] = useState(false);

      const handleChange = (newValue: boolean) => {
        setValue(newValue);
        onChange(newValue);
      };

      return <Checkbox isSelected={value} onChange={handleChange} {...props} />;
    };

    const wrapper = render(<Component data-testid="checkbox-test">Option</Component>, {
      wrapper: ProviderWrapper,
    });

    act(() => {
      wrapper.getAllByTestId("checkbox-test")[1].click();
    });

    expect(onChange).toHaveBeenCalled();
  });

  it("should render with custom styles", () => {
    const wrapper = render(
      <Checkbox style={{ color: "red", fontSize: "16px" }}>Custom Styles</Checkbox>,
      { wrapper: ProviderWrapper },
    );

    const checkbox = wrapper.container.querySelector("label");

    expect(checkbox).toHaveStyle("color: red");
    expect(checkbox).toHaveStyle("font-size: 16px");
  });

  it("should call onChange when clicked", () => {
    const onChange = jest.fn();
    const wrapper = render(<Checkbox onChange={onChange}>Click Me</Checkbox>, {
      wrapper: ProviderWrapper,
    });

    const checkbox = wrapper.getByRole("checkbox");

    act(() => {
      checkbox.click();
    });

    expect(onChange).toHaveBeenCalled();
  });

  it("should render with a custom class name", () => {
    const wrapper = render(<Checkbox className="custom-checkbox">Custom Class</Checkbox>, {
      wrapper: ProviderWrapper,
    });

    const checkbox = wrapper.container.querySelector("label");

    expect(checkbox).toHaveClass("custom-checkbox");
  });

  it("should render with additional attributes", () => {
    const wrapper = render(
      <Checkbox data-testid="custom-checkbox" aria-label="Custom Checkbox">
        Additional Attributes
      </Checkbox>,
      { wrapper: ProviderWrapper },
    );

    // 1 is the input element itself, 0 is the label, so we need to check on the input element
    const checkbox = wrapper.getAllByTestId("custom-checkbox")[1];

    expect(checkbox).toHaveAttribute("aria-label", "Custom Checkbox");
  });
});
