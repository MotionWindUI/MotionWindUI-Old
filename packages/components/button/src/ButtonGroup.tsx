import React from "react";
import { ButtonGroupContextProps, ButtonGroupProvider } from "./ButtonGroupContext";

export interface ButtonGroupProps extends ButtonGroupContextProps {}

const ButtonGroup = React.forwardRef(
  (props: ButtonGroupProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className="flex flex-row">
        <ButtonGroupProvider {...props}>{props.children}</ButtonGroupProvider>
      </div>
    );
  },
);

ButtonGroup.displayName = "MotionWindUI.ButtonGroup";

export default ButtonGroup;
