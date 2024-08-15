import React, { cloneElement, useMemo } from "react";
import {
  CheckboxGroup as RACCheckboxGroup,
  CheckboxGroupProps as RACheckboxGroupProps,
} from "react-aria-components";
import { MotionWindUIBaseProps } from "@motionwindui/base";
import { CheckboxGroupProvider } from "./CheckboxGroupContext";
import { CheckboxGroupSlots, checkBoxGroupStyles, SlotClassess } from "@motionwindui/theme";
import { clsxMerge } from "@motionwindui/theme/src/utils/clsxMerge";

export interface CheckboxGroupProps
  extends MotionWindUIBaseProps,
    Omit<RACheckboxGroupProps, "children"> {
  /** A label for the group of checkboxes */
  label?: string;

  /** A description for the group of checkboxes */
  description?: string | React.ReactNode;

  /** The checkbox group children */
  children?: React.ReactNode;

  /** The error message content for when the checkbox group is invalid */
  errorMessage?: string | React.ReactNode;

  /** The individual slots to apply extra styling to */
  classNames?: SlotClassess<CheckboxGroupSlots>;
}

export type CheckboxContextType = {
  /** The color of the checkbox group */
  color?: CheckboxGroupProps["color"];

  /** The size of the checkbox group */
  size?: CheckboxGroupProps["size"];

  /** The radius of the checkbox group */
  radius?: CheckboxGroupProps["radius"];

  /** Disables the checkbox group animations */
  disableAnimations?: CheckboxGroupProps["disableAnimations"];
};

const CheckboxGroup = React.forwardRef(
  (props: CheckboxGroupProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const {
      children,
      isInvalid = false,
      isRequired = false,
      isDisabled = false,
      size = "md",
      className,
      classNames,
      label: labelProp,
      errorMessage: errorMessageProp,
      description: descriptionProp,
      ...rest
    } = props;

    const checkBoxGroupProps = {
      size,
      ...rest,
    };

    const { base, wrapper, label, description, errorMessage } = useMemo(
      () => checkBoxGroupStyles({ isRequired, isDisabled, size }),
      [isRequired, isDisabled, size],
    );

    // Clones the error message content and applies the error message styles
    // It will allow a string or a ReactNode to be passed as the error message
    // If a ReactNode is passed, it will clone the element and apply the error message styles
    // If a string is passed, it will wrap the string in a span and apply the error message styles
    const cloneErrorMessage = (errorMessageContent?: React.ReactNode | string) => {
      return typeof errorMessageContent === "string" ? (
        <span className={errorMessage({ className: classNames?.errorMessage })}>
          {errorMessageContent as string}
        </span>
      ) : (
        cloneElement(errorMessageContent as React.ReactElement, {
          className: errorMessage({ className: classNames?.errorMessage }),
        })
      );
    };

    return (
      <RACCheckboxGroup
        {...rest}
        isInvalid={isInvalid}
        isRequired={isRequired}
        ref={ref}
        className={base({ className: clsxMerge(classNames?.base, className) })}
      >
        {labelProp && <span className={label()}>{labelProp}</span>}
        <div className={wrapper({ className: classNames?.wrapper })}>
          <CheckboxGroupProvider value={{ ...checkBoxGroupProps }}>
            {children}
          </CheckboxGroupProvider>
        </div>
        {descriptionProp && (
          <span className={description({ className: classNames?.description })}>
            {descriptionProp}
          </span>
        )}
        {isInvalid && errorMessageProp && cloneErrorMessage(errorMessageProp)}
      </RACCheckboxGroup>
    );
  },
);

CheckboxGroup.displayName = "MotionWindUI.CheckboxGroup";

export default CheckboxGroup;
