import * as React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { RadioGroup, RadioGroupProps } from "../src";
import { axe } from "jest-axe";
import { MotionWindUIProvider } from "@motionwindui/provider";
import Radio from "../src/Radio";
import { useState } from "react";
import { mockPrefersReducedMotion } from "../../../../tests/utils";

const ProviderWrapper = ({ children }) => <MotionWindUIProvider>{children}</MotionWindUIProvider>;

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: ProviderWrapper, ...options });

describe("RadioGroup", () => {
  it("should render correctly", () => {
    const wrapper = customRender(<RadioGroup label="test" />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should throw an error when trying to use the Radio component without being in a group", () => {
    // Suppressing console errors
    // eslint-disable-next-line no-console
    console.error = jest.fn();
    expect(() => customRender(<Radio value="test">test</Radio>)).toThrow();
  });

  it("should render radio buttons correctly within a group", () => {
    customRender(
      <RadioGroup label="test">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
      </RadioGroup>,
    );

    expect(screen.getByLabelText("Option 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Option 2")).toBeInTheDocument();
  });

  it("should allow selecting a radio button", () => {
    customRender(
      <RadioGroup label="test">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
      </RadioGroup>,
    );

    const option1 = screen.getByLabelText("Option 1");

    fireEvent.click(option1);

    expect(option1).toBeChecked();
  });

  it("should call onChange when a radio button is selected", () => {
    const handleChange = jest.fn();

    customRender(
      <RadioGroup onChange={handleChange} label="test">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
      </RadioGroup>,
    );

    const option1 = screen.getByLabelText("Option 1");

    fireEvent.click(option1);

    expect(handleChange).toHaveBeenCalledWith("option1");
  });

  it("should display an error message when the radio group is invalid", () => {
    customRender(
      <RadioGroup isInvalid errorMessage="This field is required" label="test">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
      </RadioGroup>,
    );

    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("should disable all radio buttons when the group is disabled", () => {
    customRender(
      <RadioGroup isDisabled label="test">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
      </RadioGroup>,
    );

    const option1 = screen.getByLabelText("Option 1");
    const option2 = screen.getByLabelText("Option 2");

    expect(option1).toBeDisabled();
    expect(option2).toBeDisabled();
  });

  it("should render with a custom class name", () => {
    customRender(
      <RadioGroup className="custom-class" label="test">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
      </RadioGroup>,
    );

    const radioGroup = screen.getByRole("radiogroup");

    expect(radioGroup).toHaveClass("custom-class");
  });

  it("should render with additional attributes", () => {
    customRender(
      <RadioGroup data-testid="custom-radio-group" aria-label="Custom Radio Group">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
      </RadioGroup>,
    );

    const radioGroup = screen.getByTestId("custom-radio-group");

    expect(radioGroup).toHaveAttribute("aria-label", "Custom Radio Group");
  });

  it("should not have basic accessibility violations", async () => {
    const { container } = customRender(
      <RadioGroup label="test">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
      </RadioGroup>,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it("should warn when using the RadioGroup component without any label", () => {
    const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();

    customRender(
      <RadioGroup>
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
      </RadioGroup>,
    );

    expect(consoleWarnSpy).toHaveBeenCalled();
  });

  it("should warn when using the Radio component without any label", () => {
    const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();

    customRender(
      <RadioGroup>
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
      </RadioGroup>,
    );

    expect(consoleWarnSpy).toHaveBeenCalled();
  });

  it("should work with a default value", () => {
    const wrapper = customRender(
      <RadioGroup defaultValue="option2" label="test">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
      </RadioGroup>,
    );

    const option1 = wrapper.getByLabelText("Option 1");
    const option2 = wrapper.getByLabelText("Option 2");

    expect(option1).not.toBeChecked();
    expect(option2).toBeChecked();

    act(() => {
      option1.click();
    });

    expect(option1).toBeChecked();
    expect(option2).not.toBeChecked();
  });

  it("should allow for clicking between options", () => {
    const wrapper = customRender(
      <RadioGroup label="test">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
      </RadioGroup>,
    );

    const option1 = wrapper.getByLabelText("Option 1");
    const option2 = wrapper.getByLabelText("Option 2");

    expect(option1).not.toBeChecked();
    expect(option2).not.toBeChecked();

    act(() => {
      option1.click();
    });

    expect(option1).toBeChecked();
    expect(option2).not.toBeChecked();

    act(() => {
      option2.click();
    });

    expect(option1).not.toBeChecked();
    expect(option2).toBeChecked();
  });

  it("should allow for controlled values", () => {
    const onChange = jest.fn();

    const TestComponent = (props: RadioGroupProps) => {
      const { children, ...otherProps } = props;

      const [value, setValue] = useState<string | null>(null);

      const handleChange = (newValue: string) => {
        setValue(newValue);
        onChange(newValue);
      };

      return (
        <RadioGroup value={value} onChange={handleChange} {...otherProps}>
          {children}
        </RadioGroup>
      );
    };

    const wrapper = customRender(
      <TestComponent label="test">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
      </TestComponent>,
    );

    const option1 = wrapper.getByLabelText("Option 1");
    const option2 = wrapper.getByLabelText("Option 2");

    expect(option1).not.toBeChecked();
    expect(option2).not.toBeChecked();

    act(() => {
      option1.click();
    });

    expect(option1).toBeChecked();
    expect(option2).not.toBeChecked();

    expect(onChange).toHaveBeenCalledWith("option1");

    act(() => {
      option2.click();
    });

    expect(option1).not.toBeChecked();
    expect(option2).toBeChecked();

    expect(onChange).toHaveBeenCalledWith("option2");
  });

  it("should allow for controlled values with a default value", () => {
    const onChange = jest.fn();

    const TestComponent = (props: RadioGroupProps) => {
      const { children, ...otherProps } = props;

      const [value, setValue] = useState<string | null>("option1");

      const handleChange = (newValue: string) => {
        setValue(newValue);
        onChange(newValue);
      };

      return (
        <RadioGroup value={value} onChange={handleChange} {...otherProps}>
          {children}
        </RadioGroup>
      );
    };

    const wrapper = customRender(
      <TestComponent label="test">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
      </TestComponent>,
    );

    const option1 = wrapper.getByLabelText("Option 1");
    const option2 = wrapper.getByLabelText("Option 2");

    expect(option1).toBeChecked();
    expect(option2).not.toBeChecked();

    act(() => {
      option2.click();
    });

    expect(option1).not.toBeChecked();
    expect(option2).toBeChecked();

    expect(onChange).toHaveBeenCalledWith("option2");

    act(() => {
      option1.click();
    });

    expect(option1).toBeChecked();
    expect(option2).not.toBeChecked();

    expect(onChange).toHaveBeenCalledWith("option1");
  });

  it("should not allow animations to run when disableAnimations is true", () => {
    const wrapper = customRender(
      <RadioGroup disableAnimations label="test">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
      </RadioGroup>,
    );

    const option1 = wrapper.getByLabelText("Option 1");
    const option2 = wrapper.getByLabelText("Option 2");

    // Get the input's label's second child (the visual indicator)
    const option1Indicator = option1.closest("label")?.children[1];
    const option2Indicator = option2.closest("label")?.children[1];

    if (!option1Indicator || !option2Indicator) {
      throw new Error("Could not find the radio button indicators");
    }

    expect(option1Indicator).toHaveClass("transition-none");
    expect(option2Indicator).toHaveClass("transition-none");
  });

  it("should not allow any pointer events when disabled", () => {
    const wrapper = customRender(
      <RadioGroup isDisabled label="test">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
      </RadioGroup>,
    );

    const option1 = wrapper.getByLabelText("Option 1");
    const option2 = wrapper.getByLabelText("Option 2");

    const option1Indicator = option1.closest("label");
    const option2Indicator = option2.closest("label");

    expect(option1Indicator).toHaveClass("opacity-disabled pointer-events-none");
    expect(option2Indicator).toHaveClass("opacity-disabled pointer-events-none");
  });

  it("should not allow animations if the user prefers reduced motion", () => {
    mockPrefersReducedMotion();
    const wrapper = customRender(
      <RadioGroup label="test">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
      </RadioGroup>,
    );

    const option1 = wrapper.getByLabelText("Option 1");
    const option2 = wrapper.getByLabelText("Option 2");

    // Get the input's label's second child (the visual indicator)
    const option1Indicator = option1.closest("label")?.children[1];
    const option2Indicator = option2.closest("label")?.children[1];

    if (!option1Indicator || !option2Indicator) {
      throw new Error("Could not find the radio button indicators");
    }

    expect(option1Indicator).not.toHaveClass("transition-none");
    expect(option2Indicator).not.toHaveClass("transition-none");
  });
});
