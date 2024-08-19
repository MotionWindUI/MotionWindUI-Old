import React, { cloneElement, useMemo } from "react";
import {
  CheckboxGroup as RACCheckboxGroup,
  CheckboxGroupProps as RACheckboxGroupProps,
  CheckboxGroupContext as RACCheckboxGroupContext,
} from "react-aria-components";
import { MotionWindUIBaseProps } from "@motionwindui/base";
import { CheckboxGroupProvider } from "./CheckboxGroupContext";
import { CheckboxGroupSlots, checkBoxGroupStyles, SlotClassess } from "@motionwindui/theme";
import { clsxMerge } from "@motionwindui/theme/src/utils/clsxMerge";
import { useId } from "react-aria";
import { useMotionWindUI } from "@motionwindui/provider";

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

  /** The checkbox group's validation behavior */
  validationBehavior?: CheckboxGroupProps["validationBehavior"];
};

const CheckboxGroup = React.forwardRef(
  (props: CheckboxGroupProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const globalProvider = useMotionWindUI();

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
      validationBehavior = globalProvider.validationBehavior || "aria",
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

    // Generate the unique ids for the description, error message, and label
    // To follow the best practices for accessibility we need to set the aria-describedby,
    // aria-labelledby, and aria-errormessage attributes. We need to set the ids for these
    const descriptionId = useId();
    const errorMessageId = useId();
    const labelId = useId();

    // If the description is provided, we need to set the descriptionId and add our styles
    const cloneErrorMessage = (errorMessageContent?: React.ReactNode | string) => {
      return typeof errorMessageContent === "string" ? (
        <small className={errorMessage()} id={errorMessageId}>
          {errorMessageContent as string}
        </small>
      ) : (
        cloneElement(errorMessageContent as React.ReactElement, {
          className: errorMessage(),
          id: errorMessageId,
        })
      );
    };

    return (
      <RACCheckboxGroupContext.Provider
        value={{
          "aria-describedby": descriptionId,
          "aria-labelledby": labelId,
          "aria-errormessage": errorMessageId,
        }}
      >
        <RACCheckboxGroup
          {...rest}
          isInvalid={isInvalid}
          isRequired={isRequired}
          ref={ref}
          className={base({ className: clsxMerge(classNames?.base, className) })}
          validationBehavior={validationBehavior}
        >
          {labelProp && (
            <span className={label()} id={labelId}>
              {labelProp}
            </span>
          )}
          <div className={wrapper({ className: classNames?.wrapper })}>
            <CheckboxGroupProvider value={{ ...checkBoxGroupProps }}>
              {children}
            </CheckboxGroupProvider>
          </div>
          {descriptionProp && (
            <span
              className={description({ className: classNames?.description })}
              id={descriptionId}
            >
              {descriptionProp}
            </span>
          )}
          {isInvalid && errorMessageProp && cloneErrorMessage(errorMessageProp)}
        </RACCheckboxGroup>
      </RACCheckboxGroupContext.Provider>
    );
  },
);

CheckboxGroup.displayName = "MotionWindUI.CheckboxGroup";

export default CheckboxGroup;
