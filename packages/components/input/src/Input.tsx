import React from "react";
import { InputProps, useInput } from "./useInput";

const Input = React.forwardRef((props: InputProps, ref: React.ForwardedRef<HTMLLabelElement>) => {
  const {
    RootComponent,
    InputElement,
    label,
    description,
    errorMessage,
    isInvalid,
    rootProps,
    labelProps,
    labelWrapperProps,
    inputWrapperProps,
    inputContentWrapperProps,
    helpContentWrapperProps,
    descriptionProps,
    errorMessageProps,
    inputProps,
  } = useInput({
    ...props,
    ref,
  });

  return (
    <RootComponent {...rootProps()}>
      <div {...labelWrapperProps()}>
        <label {...labelProps()}>{label}</label>
        <div {...inputWrapperProps()}>
          <div {...inputContentWrapperProps()}>
            <InputElement {...inputProps()} />
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
