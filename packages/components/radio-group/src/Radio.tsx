import React from "react";
import { RadioProps, useRadio } from "./useRadio";
import { VisuallyHidden } from "react-aria";

const Radio = React.forwardRef((props: RadioProps, ref: React.ForwardedRef<HTMLLabelElement>) => {
  const {
    RootComponent,
    children,
    description,
    rootProps,
    wrapperProps,
    inputProps,
    labelProps,
    labelWrapperProps,
    controlProps,
    descriptionProps,
  } = useRadio({ ...props, ref });

  return (
    <RootComponent {...rootProps()}>
      <VisuallyHidden elementType="span">
        <input {...inputProps()} />
      </VisuallyHidden>
      <span {...wrapperProps()}>
        <span {...controlProps()} />
      </span>
      <div {...labelWrapperProps()}>
        {children && <span {...labelProps()}>{children}</span>}
        {description && <span {...descriptionProps()}>{description}</span>}
      </div>
    </RootComponent>
  );
});

Radio.displayName = "MotionWindUI.Radio";

export default Radio;
