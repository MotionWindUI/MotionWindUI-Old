import React from "react";
import { SwitchProps, useSwitch } from "./useSwitch";
import { VisuallyHidden } from "react-aria";

const Switch = React.forwardRef((props: SwitchProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  const {
    RootComponent,
    children,
    startContent,
    endContent,
    thumbContent,
    description,
    rootProps,
    inputProps,
    wrapperProps,
    trackProps,
    thumbProps,
    labelProps,
  } = useSwitch({
    ...props,
    ref,
  });

  return (
    <RootComponent {...rootProps()}>
      <VisuallyHidden>
        <input {...inputProps()} />
      </VisuallyHidden>
      <div {...wrapperProps()}>
        <div {...trackProps()}>
          {startContent && <span>{startContent}</span>}
          <div {...thumbProps()}>{thumbContent && <span>{thumbContent}</span>}</div>
          {endContent && <span>{endContent}</span>}
        </div>
        {children && <span {...labelProps()}>{children}</span>}
        {description}
      </div>
    </RootComponent>
  );
});

Switch.displayName = "MotionWindUI.Switch";

export default Switch;
