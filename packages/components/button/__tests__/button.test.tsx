import * as React from "react";
import { act, render } from "@testing-library/react";

import { Button } from "../src";

describe("Button", () => {
  it("should render correctly", () => {
    const wrapper = render(<Button />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(<Button ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it("should ignore events wheen disabled", () => {
    const onPress = jest.fn();
    const { getByRole } = render(<Button isDisabled />);

    act(() => {
      getByRole("button").click();
    });

    expect(onPress).not.toHaveBeenCalled();
  });

  it("should render with a start icon", () => {
    const wrapper = render(<Button startContent={<span data-testid="start-icon">Icon</span>} />);

    expect(wrapper.getByTestId("start-icon"));
  });

  it("should render with an end icon", () => {
    const wrapper = render(<Button endContent={<span data-testid="end-icon">Icon</span>} />);

    expect(wrapper.getByTestId("end-icon"));
  });
});
