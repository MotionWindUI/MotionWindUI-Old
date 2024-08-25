import React from "react";
import { RadioGroupProps, useRadioGroup } from "./useRadioGroup";
import { RadioGroupProvider } from "./RadioGroupContext";

const RadioGroup = React.forwardRef(
  (props: RadioGroupProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const {
      RootComponent,
      label,
      description,
      errorMessage,
      isInvalid,
      children,
      context,
      groupBaseProps,
      groupDescriptionProps,
      groupErrorProps,
      groupWrapperProps,
      groupLabelProps,
    } = useRadioGroup({
      ...props,
      ref,
    });

    return (
      <RootComponent {...groupBaseProps()}>
        {label && <span {...groupLabelProps()}>{label}</span>}
        <div {...groupWrapperProps()}>
          <RadioGroupProvider value={context}>{children}</RadioGroupProvider>
        </div>
        {errorMessage && isInvalid && <span {...groupErrorProps()}>{errorMessage}</span>}
        {description && <span {...groupDescriptionProps()}>{description}</span>}
      </RootComponent>
    );
  },
);

RadioGroup.displayName = "MotionWindUI.RadioGroup";

export default RadioGroup;
