import * as React from "react";
import { render } from "@testing-library/react";

import { Switch } from "../src";
import { MotionWindUIProvider } from "@motionwindui/provider";

const ProviderWrapper = ({ children }) => <MotionWindUIProvider>{children}</MotionWindUIProvider>;

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: ProviderWrapper, ...options });

describe("Switch", () => {
  it("should render correctly", () => {
    const wrapper = customRender(<Switch />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {});
});
