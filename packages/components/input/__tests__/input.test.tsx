import * as React from "react";
import { act, render } from "@testing-library/react";
import { Input } from "../src";
import { MotionWindUIProvider } from "@motionwindui/provider";
import { axe } from "jest-axe";

const ProviderWrapper = ({ children }) => <MotionWindUIProvider>{children}</MotionWindUIProvider>;

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: ProviderWrapper, ...options });

describe("Input", () => {
  it("should render correctly", () => {
    const wrapper = customRender(<Input />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLInputElement>();

    customRender(<Input ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it("should render with a label", () => {
    const wrapper = customRender(<Input label="Label" />);

    expect(wrapper.getByText("Label")).toBeInTheDocument();
  });

  it("should render with a description", () => {
    const wrapper = customRender(<Input description="Description" />);

    expect(wrapper.getByText("Description")).toBeInTheDocument();
  });

  it("should render with an error message if it is invalid", () => {
    const wrapper = customRender(<Input errorMessage="Error" isInvalid />);

    expect(wrapper.getByText("Error")).toBeInTheDocument();
  });

  it("should not render with an error message if it is not invalid", () => {
    const wrapper = customRender(<Input errorMessage="Error" />);

    expect(() => wrapper.getByText("Error")).toThrow();
  });

  it("should render with start content", () => {
    const wrapper = customRender(
      <Input startContent={<span data-testid="start-content">Start</span>} />,
    );

    expect(wrapper.getByTestId("start-content")).toBeInTheDocument();
  });

  it("should render with end content", () => {
    const wrapper = customRender(<Input endContent={<span data-testid="end-content">End</span>} />);

    expect(wrapper.getByTestId("end-content")).toBeInTheDocument();
  });

  it("should change value after a change event", () => {
    const wrapper = customRender(<Input />);
    const input = wrapper.getByRole("textbox") as HTMLInputElement;

    act(() => {
      input.value = "New Value";
      input.dispatchEvent(new Event("input", { bubbles: true }));
    });

    expect(input.value).toBe("New Value");
  });

  it("should ignore events when disabled", () => {
    const onChange = jest.fn();
    const wrapper = customRender(<Input isDisabled onChange={onChange} />);
    const input = wrapper.getByRole("textbox") as HTMLInputElement;

    act(() => {
      input.value = "New Value";
      input.dispatchEvent(new Event("input", { bubbles: true }));
    });

    expect(onChange).not.toHaveBeenCalled();
  });

  it("should not animate when disableAnimation is true", () => {
    const wrapper = customRender(<Input disableAnimations />);
    const inputWrapper = wrapper.container.querySelector("div");

    expect(inputWrapper).not.toBeNull();
    expect(inputWrapper).toHaveClass("transition-none");
  });

  it("should have basic accessibility violations", async () => {
    const { container } = customRender(<Input label="Label" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it("should have no accessibility violations when disabled", async () => {
    const { container } = customRender(<Input label="Label" isDisabled />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
