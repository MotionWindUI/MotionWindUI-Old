import { render } from "@testing-library/react";

import { Checkbox } from "../src";

describe("Checkbox", () => {
  it("should render correctly", () => {
    const wrapper = render(<Checkbox />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {});
});
