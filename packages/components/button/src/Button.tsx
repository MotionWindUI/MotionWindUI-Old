import React from "react";
import { ButtonProps, useButton } from "./useButton";

const Button = React.forwardRef(
  (props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const { Root, children, startContent, endContent, rootProps } = useButton({ ...props, ref });

    return (
      <Root {...rootProps()}>
        {startContent && startContent}
        {children}
        {endContent && endContent}
      </Root>
    );
  },
);

Button.displayName = "MotionWindUI.Button";

export default Button;
