import React, { cloneElement, ReactElement, useMemo } from "react";
import { MotionWindUIBaseProps } from "@motionwindui/base";
import { CheckboxSlots, checkBoxStyles } from "@motionwindui/theme";
import {
  CheckboxContext,
  Checkbox as RACCheckbox,
  CheckboxProps as RACCheckboxProps,
  useContextProps,
  FieldError,
} from "react-aria-components";
import { CheckboxIcon } from "./CheckboxIcon";
import { SlotClassess } from "@motionwindui/theme";
import { clsxMerge } from "@motionwindui/theme/src/utils/clsxMerge";
import { useMotionWindUI } from "@motionwindui/provider";
import { useFocusRing } from "react-aria";

export interface CheckboxProps extends MotionWindUIBaseProps, Omit<RACCheckboxProps, "children"> {
  /* Whether or not to include the checkbox label */
  includeLabel?: boolean;

  /* A description of the input (if desired) */
  description?: string;

  /* The children to be used as the label */
  children?: React.ReactNode;

  /* The icon to display in the checkbox */
  icon?: React.ReactNode;

  /* Disables all animation */
  disableAnimation?: boolean;

  /* The error message content to display */
  errorMessage?: React.ReactNode | string;

  /* Use React Aria's native FieldError component */
  useFieldError?: boolean;

  /* Errors that are shown for validation */
  fieldError?: ReactElement<typeof FieldError>;

  /* The individual slots to apply extra styling to */
  classNames?: SlotClassess<CheckboxSlots>;
}

const Checkbox = React.forwardRef(
  (props: CheckboxProps, ref: React.ForwardedRef<HTMLLabelElement>) => {
    [props, ref] = useContextProps(props, ref, CheckboxContext);

    // Get the global context
    const globalProvider = useMotionWindUI();

    const {
      color = "neutral",
      size = "md",
      radius = "none",
      includeLabel = true,
      disableAnimation = globalProvider.disableAnimations,
      icon: checkBoxIcon = <CheckboxIcon />,
      description: descriptionProp,
      isIndeterminate,
      isReadOnly,
      isDisabled,
      isInvalid,
      isRequired,
      fieldError: fieldErrorProp,
      useFieldError = false,
      errorMessage,
      className,
      classNames,
      children,
    } = props;

    const { isFocusVisible } = useFocusRing();

    const {
      base,
      wrapper,
      label,
      icon,
      description,
      fieldError: fieldErrorStyle,
    } = useMemo(
      () =>
        checkBoxStyles({
          color,
          size,
          radius,
          isReadOnly,
          isDisabled,
          isInvalid,
          isRequired,
          isFocusVisible,
          disableAnimation,
        }),
      [
        color,
        size,
        radius,
        isReadOnly,
        isDisabled,
        isInvalid,
        isRequired,
        isFocusVisible,
        disableAnimation,
      ],
    );

    const cloneErrorMessage = (errorMessageContent?: React.ReactNode | string) => {
      return typeof errorMessageContent === "string" ? (
        <span className={fieldErrorStyle()}>{errorMessageContent as string}</span>
      ) : (
        cloneElement(errorMessageContent as React.ReactElement, { className: fieldErrorStyle() })
      );
    };

    /**
     * Clones any icon passed to the checkbox to give the proper styles
     * @param isSelected Whether or not the checkbox is selected
     * @returns The cloned checkbox icon
     */
    const cloneCheckIcon = (isSelected: boolean) => {
      return typeof checkBoxIcon === "function"
        ? (checkBoxIcon as () => React.ReactNode)()
        : cloneElement(checkBoxIcon as ReactElement, {
            "aria-hidden": true,
            className: icon({ className: classNames?.icon, isSelected }),
            isIndeterminate,
          });
    };

    return (
      <div className="inline-flex flex-col">
        <RACCheckbox
          className={base({ className: clsxMerge(classNames?.base, className) })}
          {...props}
        >
          {({ isSelected, isRequired, ...renderProps }) => (
            <>
              <span
                className={wrapper({ isSelected, ...renderProps, className: classNames?.wrapper })}
              >
                {cloneCheckIcon(isSelected)}
              </span>
              {includeLabel && (
                <span className={label({ isRequired, className: classNames?.label })}>
                  {children}
                </span>
              )}
            </>
          )}
        </RACCheckbox>
        {descriptionProp && (
          <span className={description({ className: classNames?.description })}>
            {descriptionProp}
          </span>
        )}
        {useFieldError &&
          fieldErrorProp &&
          cloneElement(fieldErrorProp as ReactElement, { className: fieldErrorStyle() })}
        {isInvalid && errorMessage && cloneErrorMessage(errorMessage)}
      </div>
    );
  },
);

Checkbox.displayName = "MotionWindUI.Checkbox";

export default Checkbox;
