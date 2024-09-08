import React from "react";
import { InputProps, useInput } from "./useInput";

const Input = React.forwardRef((props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  const {
    RootComponent,
    InputElement,
    label: labelProp,
    description,
    errorMessage,
    isInvalid,
    startContent,
    endContent,
    rootProps,
    labelProps,
    labelWrapperProps,
    inputWrapperProps,
    inputContentWrapperProps,
    helpContentWrapperProps,
    descriptionProps,
    errorMessageProps,
    inputProps,
  } = useInput<HTMLInputElement>({
    ...props,
    ref,
  });

  const label = labelProp ? <label {...labelProps()}>{labelProp}</label> : null;

  return (
    <RootComponent {...rootProps()}>
      <div {...labelWrapperProps()}>
        {label}
        <div {...inputWrapperProps()}>
          <div {...inputContentWrapperProps()}>
            {startContent}
            <InputElement {...inputProps()} />
            {endContent}
          </div>
          <div {...helpContentWrapperProps()}>
            {description && <span {...descriptionProps()}>{description}</span>}
            {isInvalid && errorMessage && <span {...errorMessageProps()}>{errorMessage}</span>}
          </div>
        </div>
      </div>
    </RootComponent>
  );
});

Input.displayName = "MotionWindUI.Input";

export default Input;
